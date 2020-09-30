"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var superagent = require('superagent');

var api_key = void 0,
    api_url = 'https://api.nsone.net/v1/',
    errorCb = void 0,
    successCb = void 0,
    startCb = void 0;

/**
 * Class representing all HTTP requests to the NS1 API. Uses the superagent
 * lib to be cross compatible w/ Node.js and Browser based environment.
 * @memberof NS1
 */

var NS1Request = function () {

  /**
   * Creates a request and returns a promise object for that request.
   * @param {String} method - The HTTP verb to use in this request e.g. get, post, etc. Must be lower case.
   * @param {String} uri    - The URI to query against the base API URL
   * @param {Object} query  - Any parameters to be sent in the query string for GET requests or in the req body for others
   * @param {Object/FormData} files  - Key / value mapped object containing file paths for uploads, or a FormData object if on the browser.
   * @return {Promise} an ES2015 promise w/ then and catch methods for continuation handling.
   */
  function NS1Request(method, uri, query, files) {
    _classCallCheck(this, NS1Request);

    if (uri[0] === '/') {
      uri = uri.substring(1);
    }

    this.method = method;
    this.uri = uri;
    this.is_json_response = true; // flag to adjust later on when dealing with binary file responses

    this.request = superagent[method].apply(superagent, ['' + api_url + uri]).set('X-NSONE-Key', api_key).set('X-NSONE-Js-Api', require('../package.json').version);

    apply_data.call(this, query, files);
    return create_promise.call(this);
  }

  /**
   * Returns the current API key being used by the class.
   * @return {String} The API key
   */


  _createClass(NS1Request, null, [{
    key: 'get_api_key',
    value: function get_api_key() {
      return api_key;
    }

    /**
     * Sets the API key used by the class.
     * @param {String} key - The API key supplied by the user
     * @param {Function} start - function reference to be called whenever a request is made.
     * @param {Function} error - function reference to be called when a request has an error.
     * @param {Function} success - function reference to be called whenever a request completes successfully.
     */

  }, {
    key: 'set_api_key',
    value: function set_api_key(key, start, error, success) {
      api_key = key;
      errorCb = error ? error : undefined;
      startCb = start ? start : undefined;
      successCb = success ? success : undefined;
    }

    /**
     * Returns the current API url base being used.
     * @return {String} The API url
     */

  }, {
    key: 'get_api_url',
    value: function get_api_url() {
      return api_url;
    }

    /**
     * Sets the API url used by the class.
     * @param {String} root - The URL to set as the base for API calls
     */

  }, {
    key: 'set_api_url',
    value: function set_api_url(root) {
      if (root[root.length - 1] !== '/') {
        root = root + '/';
      }
      api_url = root;
    }
  }]);

  return NS1Request;
}();

/**
 * Applies data to the this.request superagent object. Works with query params or
 * file attachments.
 *
 * @param {Object} query  - Any parameters to be sent in the query string for GET requests or in the req body for others
 * @param {Object/FormData} files  - Key / value mapped object containing file paths for uploads, or a FormData object if it's coming from the browser
 * @private
 */


function apply_data(query, files) {
  var _this = this;

  if (startCb) {
    startCb();
  }
  if (query !== undefined) {
    if (this.method === 'get') {
      this.request = this.request.query(query);
    } else {
      this.request = this.request.send(query);
    }
  }

  if (files !== undefined) {
    if (files instanceof FormData) {
      this.request = this.request.send(files);
    } else {
      Object.keys(files).forEach(function (key) {
        _this.request = _this.request.attach(key, files[key]);
      });
    }
  }
}

/**
 * Creates an ES2015 Promise which parses the message internally as JSON and
 * returns it as the resolve() method's sole argument.
 *
 * @return {Promise}
 * @private
 */
function create_promise() {
  var _this2 = this;

  return new Promise(function (resolve, reject) {
    _this2.request.end(function (err, response) {
      if (err) {
        reject(handle_error.call(_this2, err, response));
      } else {
        if (successCb) {
          successCb(response);
        }
      }

      if (_this2.is_json_response && _this2.method != 'del' && response && response.text !== '') {
        try {
          var parsed = JSON.parse(response.text);
        } catch (parse_err) {
          return reject(new NS1Error('NS1 API Response couldn\'t parse as JSON: ' + parse_err));
        }
      } else {
        // TODO: Determine if there's a need to filter/reject empty response bodies on 200's
      }
      return resolve(parsed || true);
    });
  });
}

/**
 * Handles error messaging. Some errors will come back as JSON w/ the error details
 * in the message field of the returning object. Other times JSOn won't be able to parse.
 * This should return an appropriate JS Error object w/ the right message.
 *
 * @param {Error} err
 * @param {String} response
 * @return {Error}
 * @private
 */
function handle_error(err, response) {
  if (errorCb) {
    errorCb(err, response);
  }
  if (response && response.text) {
    var final_message = void 0,
        data = void 0;
    try {
      data = JSON.parse(response.text);
      final_message = data.message;
    } catch (e) {
      final_message = response.text;
    }
    return new NS1Error('NS1 API Request Failed on \n ' + this.method.toUpperCase() + ' ' + api_url + this.uri + ' \n ' + final_message + ' \n', final_message, data);
  } else {
    return new NS1Error('NS1 API Request Failed on \n ' + this.method.toUpperCase() + ' ' + api_url + this.uri + ' \n ' + err.message + ' \n', err.message);
  }
}

var NS1Error = function (_Error) {
  _inherits(NS1Error, _Error);

  function NS1Error(message, raw, data) {
    _classCallCheck(this, NS1Error);

    var _this3 = _possibleConstructorReturn(this, (NS1Error.__proto__ || Object.getPrototypeOf(NS1Error)).call(this, message));

    _this3.raw = raw;
    _this3.data = data;
    return _this3;
  }

  return NS1Error;
}(Error);

module.exports = NS1Request;