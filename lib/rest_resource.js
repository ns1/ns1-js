"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NS1Request = require('./NS1_request'),
    pluralize = require('pluralize');

/**
 * Parent class for all resourceful objects. Grants basic REST backed resource
 * object methods and behaviors, e.g. new Object({ object_vars }).save, Object.create,
 * #destroy and #update methods.
 */

var RestResource = function () {

  /**
   * @param {Object} attributes   - The attributes representing a new object
   * @param {Boolean} from_server - Used internally to know if an object exists on the server
   */

  function RestResource(attributes, from_server) {
    _classCallCheck(this, RestResource);

    this.attributes = attributes || {};
    this.from_server = from_server;
  }

  /**
   * Updates an object w/ the provided attributes.
   *
   * @param {Object} attributes
   * @return {Promise}
   */


  _createClass(RestResource, [{
    key: 'update',
    value: function update(attributes) {
      this.attributes = Object.assign({}, this.attributes, attributes);
      return this.save();
    }

    /**
     * Saves an object on the server.
     *
     * @return {Promise}
     */

  }, {
    key: 'save',
    value: function save() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        var method = _this.from_server ? 'post' : 'put',
            uri = _this.from_server ? _this.get_resource_path() : _this.create_resource_path();

        return new NS1Request(method, uri, _this.attributes).then(function (response) {
          resolve(convert_json_to_objects.bind(_this.constructor)(response));
        }).catch(function (err) {
          reject(err);
        });
      });
    }

    /**
     * Destroys an object on the server w/ the delete HTTP verb.
     *
     * @return {Promise}
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        return new NS1Request('del', _this2.get_resource_path()).then(function (response) {
          resolve(response);
        }).catch(function (err) {
          reject(err);
        });
      });
    }

    /**
     * Creates a new object w/ the provided attributes.
     *
     * @param {Object} attributes
     * @return {Promise}
     */

  }, {
    key: 'get_resource_path',


    /**
     * Defines the path to posting changes & getting details on a single resource. Method is
     * required to be overriden within child classes as most paths will require info pertaining
     * to the individual resource's attributes.
     *
     * @return {String}
     */
    value: function get_resource_path() {
      throw new Error('NS1 JS API: NS1.' + this.constructor.name + '.get_resource_path() requires a definition');
    }

    /**
     * Overrideable method to provide non-standard "PUT" behavior on creating new records.
     * E.g. Zones require info in the URI where Data Sources don't.
     *
     * @return {String}
     */

  }, {
    key: 'create_resource_path',
    value: function create_resource_path() {
      return this.get_resource_path();
    }

    /**
     * Finds either all the relevant resources when not given any arguments (e.g. finds all Zones in an account)
     * but when supplied an identifier will only return that single resource (e.g. /zones/testdomain.test will
     * only return info pertaining to the zone testdomain.test)
     *
     * @param {String} uid - String identifier of the object which is conjoined with the base_path of the resource
     * @return {Promise}
     */

  }], [{
    key: 'create',
    value: function create(attributes) {
      return new this(attributes).save();
    }

    /**
     * Defines the default path for the resource, e.g. zones == '/zones'. Default behavior is the to take
     * the class's name, lower case it, and pluralize it. Overrideable in child classes.
     *
     * @return {String}
     */

  }, {
    key: 'get_base_path',
    value: function get_base_path() {
      return pluralize(this.name.toLowerCase());
    }
  }, {
    key: 'find',
    value: function find(uid) {
      var _this3 = this;

      var resource_uri = this.get_base_path();

      if (uid !== undefined) {
        resource_uri += '/' + uid;
      }

      return new Promise(function (resolve, reject) {
        return new NS1Request('get', resource_uri).then(function (response) {
          resolve(convert_json_to_objects.bind(_this3)(response));
        }).catch(function (err) {
          reject(err);
        });
      });
    }
  }]);

  return RestResource;
}();

/**
 * Takes in JSON from requests and converts internal objects into objects representing the
 * resource class.
 *
 * @param {Array/Object} data - JSON data, either a single object or an array of objects
 * @return {Array/Object} - Returns the data as objects of the resource class
 * @private
 */


function convert_json_to_objects(data) {
  var _this4 = this;

  if (Array.isArray(data)) {
    return data.map(function (item, index, arr) {
      return new _this4(item, true);
    });
  } else {
    return new this(data, true);
  }
}

module.exports = RestResource;