"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var superagent = require('superagent');

var api_key = undefined,
    api_url = 'https://api.nsone.net/v1/';

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
   * @param {Object} files  - Key / value mapped object containing file paths for uploads.
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
     */

  }, {
    key: 'set_api_key',
    value: function set_api_key(key) {
      api_key = key;
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
 * @param {Object} files  - Key / value mapped object containing file paths for uploads.
 * @private
 */

function apply_data(query, files) {
  if (query !== undefined) {
    if (this.method === 'get') {
      this.request = this.request.query(query);
    } else {
      this.request = this.request.send(query);
    }
  }

  if (files !== undefined) {
    for (var key in files) {
      this.request = this.request.attach(key, files[key]);
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
  var _this = this;

  return new Promise(function (resolve, reject) {
    _this.request.end(function (err, response) {
      if (err) throw handle_error.call(_this, err, response);

      if (_this.is_json_response && _this.method != 'del' && response.text !== '') {
        try {
          var parsed = JSON.parse(response.text);
        } catch (parse_err) {
          throw new Error('NS1 API Response couldn\'t parse as JSON: ' + parse_err);
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
  if (response && response.text) {
    var final_message = undefined;
    try {
      final_message = JSON.parse(response.text).message;
    } catch (e) {
      final_message = response.text;
    }
    return new Error('NS1 API Request Failed on \n ' + this.method.toUpperCase() + ' ' + api_url + this.uri + ' \n ' + final_message + ' \n');
  } else {
    return new Error('NS1 API Request Failed on \n ' + this.method.toUpperCase() + ' ' + api_url + this.uri + ' \n ' + err.message + ' \n');
  }
}

module.exports = NS1Request;