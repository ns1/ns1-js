"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RestResource = require('./rest_resource');
var NS1Request = require('./NS1_request');

/**
 * Class representing monitors / monitoring jobs in NS1.
 *
 * @extends RestResource
 * @memberof NS1
 */

var Monitor = function (_RestResource) {
  _inherits(Monitor, _RestResource);

  function Monitor() {
    _classCallCheck(this, Monitor);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Monitor).apply(this, arguments));
  }

  _createClass(Monitor, [{
    key: 'get_resource_path',
    value: function get_resource_path() {
      return this.constructor.get_base_path() + '/' + this.attributes.id;
    }
  }, {
    key: 'create_resource_path',
    value: function create_resource_path() {
      return this.constructor.get_base_path();
    }

    /**
     * Returns history of monitor object.
     *
     * @param {Object} args - Arguments to be supplied to refine the request, see https://ns1.com/api/#history-get for details
     * @returns Promise
     */

  }, {
    key: 'history',
    value: function history(args) {
      return new NS1Request('get', '/monitoring/history/' + this.attributes.id, args);
    }

    /**
     * Returns metrics of monitor object.
     *
     * @param {Object} args - Arguments to be supplied to refine the request, see https://ns1.com/api/#metrics-get for details
     * @returns Promise
     */

  }, {
    key: 'metrics',
    value: function metrics(args) {
      return new NS1Request('get', '/monitoring/metrics/' + this.attributes.id, args);
    }

    /**
     * Returns job types xxxf Monitor.
     *
     * @returns Promise
     */

  }], [{
    key: 'get_base_path',
    value: function get_base_path() {
      return 'monitoring/jobs';
    }
  }, {
    key: 'jobtypes',
    value: function jobtypes() {
      return new NS1Request('get', '/monitoring/jobtypes');
    }

    /**
     * Returns region keys available to Monitors.
     *
     * @returns Promise
     */

  }, {
    key: 'regions',
    value: function regions() {
      return new NS1Request('get', '/monitoring/regions');
    }
  }]);

  return Monitor;
}(RestResource);

module.exports = Monitor;