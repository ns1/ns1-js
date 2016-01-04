"use strict";

let RestResource = require('./rest_resource')
let NS1Request   = require('./ns1_request')

/**
 * Class representing monitors / monitoring jobs in NS1.
 *
 * @extends RestResource
 * @memberof NS1
 */
class Monitor extends RestResource {

  static get_base_path() {
    return 'monitoring/jobs'
  }

  get_resource_path() {
    return `${this.constructor.get_base_path()}/${this.attributes.id}`
  }

  create_resource_path() {
    return this.constructor.get_base_path()
  }

  /**
   * Returns history of monitor object.
   *
   * @param {Object} args - Arguments to be supplied to refine the request, see https://ns1.com/api/#history-get for details
   * @returns Promise
   */
  history(args) {
    return new NS1Request('get', `/monitoring/history/${this.attributes.id}`, args)
  }

  /**
   * Returns metrics of monitor object.
   *
   * @param {Object} args - Arguments to be supplied to refine the request, see https://ns1.com/api/#metrics-get for details
   * @returns Promise
   */
  metrics(args) {
    return new NS1Request('get', `/monitoring/metrics/${this.attributes.id}`, args)
  }

  /**
   * Returns job types xxxf Monitor.
   *
   * @returns Promise
   */
  static jobtypes() {
    return new NS1Request('get', `/monitoring/jobtypes`)
  }

  /**
   * Returns region keys available to Monitors.
   *
   * @returns Promise
   */
  static regions() {
    return new NS1Request('get', `/monitoring/regions`)
  }

}

module.exports = Monitor
