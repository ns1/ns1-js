"use strict";

let RestResource = require('./rest_resource')
let NS1Request   = require('./ns1_request')

/**
 * Class representing data sources in NS1.
 *
 * @extends RestResource
 * @memberof NS1
 */
class DataSource extends RestResource {
  
  static get_base_path() {
    return 'data/sources'
  }

  get_resource_path() {
    return `${this.constructor.get_base_path()}/${this.attributes.id}`
  }

  create_resource_path() {
    return this.constructor.get_base_path()
  }

  static types() {
    return new NS1Request('get', '/data/sourcetypes')
  }
}

module.exports = DataSource
