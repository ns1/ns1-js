"use strict";

let RestResource = require('./rest_resource')
let NS1Request   = require('./ns1_request')

class Record extends RestResource {

  static get_base_path() {
    return '/zones'
  }

  get_resource_path() {
    return `${this.constructor.get_base_path()}/${this.attributes.zone}/${this.attributes.domain}/${this.attributes.type}`
  }

}

module.exports = Record
