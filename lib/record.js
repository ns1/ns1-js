"use strict";

let RestResource = require('./rest_resource')
let NS1Request   = require('./ns1_request')

class Record extends RestResource {

  static get_base_path() {
    return 'zones'
  }

  get_resource_path() {
    return `${this.constructor.get_base_path()}/${this.attributes.zone}/${this.attributes.domain}/${this.attributes.type}`
  }

  static find() {
    if (arguments.length === 0) {
      throw new Error("Records can only be listed through a Zone, try new NS1.Zone(zone.name).attributes.records")
    } else {
      return super.find.apply(this, arguments)
    }
  }

}

module.exports = Record
