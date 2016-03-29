"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RestResource = require('./rest_resource');
var NS1Request = require('./NS1_request');
var Stats = require('./stats');

/**
 * Represents all Zone objects on a client's account.
 *
 * @extends RestResource
 * @memberof NS1
 */

var Zone = function (_RestResource) {
  _inherits(Zone, _RestResource);

  function Zone() {
    _classCallCheck(this, Zone);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Zone).apply(this, arguments));
  }

  _createClass(Zone, [{
    key: 'get_resource_path',

    /**
     * Defines the resource path w/ necessary zone information to succesfully GET the resource. Used
     * internally.
     *
     * @return {String}
     */
    value: function get_resource_path() {
      return this.constructor.get_base_path() + '/' + this.attributes.zone;
    }

    /**
     * Imports a zonefile and defines the zone's records w/ the info in the file.
     * 
     * @param {String} zone_name
     * @param {String} filepath
     * @param {Boolean} async_call
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
      return Stats.qps(this.attributes.zone);
    }

    /**
     * Returns usage statistics on a single record
     *
     * @return {Promise}
     */

  }, {
    key: 'usage',
    value: function usage() {
      return Stats.usage(this.attributes.zone);
    }
  }], [{
    key: 'import_zonefile',
    value: function import_zonefile(zone_name, filepath, async_call) {
      async_call = async_call || true;
      return new NS1Request('put', '/import/zonefile/' + zone_name + '?async=' + async_call, {}, { 'zonefile': filepath });
    }

    /**
     * Wrapper method to make the import_zonefile API call synchronously.
     *
     * @param {String} zone_name
     * @param {String} filepath
     * @return {Promise}
     */

  }, {
    key: 'import_zonefile_sync',
    value: function import_zonefile_sync(zone_name, filepath) {
      return this.import_zonefile(zone_name, filepath, false);
    }

    /**
     * Returns all the networks a user can apply a zone to
     *
     * @return {Promise}
     */

  }, {
    key: 'networks',
    value: function networks() {
      return new NS1Request('get', '/networks');
    }
  }]);

  return Zone;
}(RestResource);

module.exports = Zone;