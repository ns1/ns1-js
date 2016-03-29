"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

var DataFeed = function (_RestResource) {
  _inherits(DataFeed, _RestResource);

  function DataFeed(attributes, from_server) {
    _classCallCheck(this, DataFeed);

    var data_source_id = attributes.data_source_id;
    delete attributes.data_source_id;

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DataFeed).call(this, attributes, from_server));

    _this.data_source_id = data_source_id;
    return _this;
  }

  _createClass(DataFeed, [{
    key: 'get_resource_path',
    value: function get_resource_path() {
      return this.constructor.get_base_path() + '/' + this.data_source_id + '/' + this.attributes.id;
    }
  }, {
    key: 'create_resource_path',
    value: function create_resource_path() {
      return this.constructor.get_base_path() + '/' + this.data_source_id;
    }
  }, {
    key: 'save',
    value: function save() {
      var _this2 = this;

      var data_source_id = this.data_source_id;
      return new Promise(function (resolve, reject) {
        return _get(Object.getPrototypeOf(DataFeed.prototype), 'save', _this2).call(_this2).then(function (results) {
          resolve(_this2.constructor.add_data_source_to_objects(results, data_source_id));
        });
      });
    }
  }], [{
    key: 'get_base_path',
    value: function get_base_path() {
      return 'data/feeds';
    }
  }, {
    key: 'find',
    value: function find(id) {
      var _this3 = this;

      var data_source_id = id.split('/')[0];
      return new Promise(function (resolve, reject) {
        return _get(Object.getPrototypeOf(DataFeed), 'find', _this3).call(_this3, id).then(function (results) {
          resolve(_this3.add_data_source_to_objects(results, data_source_id));
        });
      });
    }
  }, {
    key: 'add_data_source_to_objects',
    value: function add_data_source_to_objects(data, data_source_id) {
      if (Array.isArray(data)) {
        return data.map(function (item, index, arr) {
          item.data_source_id = data_source_id;
          return item;
        });
      } else {
        data.data_source_id = data_source_id;
        return data;
      }
    }
  }]);

  return DataFeed;
}(RestResource);

module.exports = DataFeed;