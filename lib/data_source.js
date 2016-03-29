"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RestResource = require('./rest_resource');
var NS1Request = require('./NS1_request');

/**
 * Class representing data sources in NS1.
 *
 * @extends RestResource
 * @memberof NS1
 */

var DataSource = function (_RestResource) {
  _inherits(DataSource, _RestResource);

  function DataSource() {
    _classCallCheck(this, DataSource);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(DataSource).apply(this, arguments));
  }

  _createClass(DataSource, [{
    key: 'get_resource_path',
    value: function get_resource_path() {
      return this.constructor.get_base_path() + '/' + this.attributes.id;
    }
  }, {
    key: 'create_resource_path',
    value: function create_resource_path() {
      return this.constructor.get_base_path();
    }
  }, {
    key: 'feed',

    /**
     * Manually send data to your data source with this method.
     *
     * @param {Object} contents
     * @param {String} method (defaults to post)
     * @return {Promise}
     */
    value: function feed(contents, method) {
      method = method || 'post';
      return new NS1Request(method, '/feed/' + this.attributes.id, contents);
    }
  }], [{
    key: 'get_base_path',
    value: function get_base_path() {
      return 'data/sources';
    }
  }, {
    key: 'types',
    value: function types() {
      return new NS1Request('get', '/data/sourcetypes');
    }
  }]);

  return DataSource;
}(RestResource);

module.exports = DataSource;