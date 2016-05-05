"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RestResource = require('./rest_resource');
var NS1Request = require('./NS1_request');
var Stats = require('./stats');

/**
 * Class representing all "records" in NS1.
 *
 * @extends RestResource
 * @memberof NS1
 */

var Record = function (_RestResource) {
  _inherits(Record, _RestResource);

  function Record() {
    _classCallCheck(this, Record);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Record).apply(this, arguments));
  }

  _createClass(Record, [{
    key: 'get_resource_path',


    /**
     * Defines the resource path w/ necessary zone information to succesfully GET the resource. Used
     * internally.
     *
     * @return {String}
     */
    value: function get_resource_path() {
      var path = [this.constructor.get_base_path(), this.attributes.zone, this.attributes.domain, this.attributes.type].map(function (item) {
        return encodeURIComponent(item.replace(/\//g, "%2f"));
      }).join('/');

      if (path[0] === '/') {
        path = path.substring(1);
      }

      return path;
    }

    /**
     * Throws an error if an ID isn't supplied, informs the user to get records through a Zone object if they want a list.
     * 
     * @param {String} id
     * @return {Promise}
     */

  }, {
    key: 'qps',


    /**
     * Returns the Queries Per Second statistics of a single record
     *
     * @return {Promise}
     */
    value: function qps() {
      return Stats.qps(this.get_resource_path().replace(this.constructor.get_base_path() + '/', ''));
    }

    /**
     * Returns usage statistics on a single record
     *
     * @return {Promise}
     */

  }, {
    key: 'usage',
    value: function usage() {
      return Stats.usage(this.get_resource_path().replace(this.constructor.get_base_path() + '/', ''));
    }
  }], [{
    key: 'get_base_path',


    /**
     * Defines the base path as just "zones/", all other info is derided from actual record object
     * itself.
     *
     * @return {String}
     */
    value: function get_base_path() {
      return 'zones';
    }
  }, {
    key: 'find',
    value: function find(id) {
      if (id === undefined) {
        throw new Error("Records can only be listed through a Zone, try new NS1.Zone(zone.name).attributes.records");
      } else {
        return _get(Object.getPrototypeOf(Record), 'find', this).apply(this, arguments);
      }
    }

    /**
     * Returns all the acceptable metadata keys for records.
     *
     * @return {Promise}
     */

  }, {
    key: 'metatypes',
    value: function metatypes() {
      return new NS1Request('get', '/metatypes');
    }

    /**
     * Returns all the acceptable filter types on a record's filter chain.
     *
     * @return {Promise}
     */

  }, {
    key: 'filtertypes',
    value: function filtertypes() {
      return new NS1Request('get', '/filtertypes');
    }
  }]);

  return Record;
}(RestResource);

module.exports = Record;