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

  history(args) {
    return new NS1Request('get', `/monitoring/history/${this.attributes.id}`, args)
  }

  metrics(args) {
    return new NS1Request('get', `/monitoring/metrics/${this.attributes.id}`, args)
  }

  static jobtypes() {
    return new NS1Request('get', `/monitoring/jobtypes`)
  }

  static regions() {
    return new NS1Request('get', `/monitoring/regions`)
  }

}

module.exports = Monitor
