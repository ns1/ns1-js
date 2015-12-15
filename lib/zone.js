"use strict";

let RestResource = require('./rest_resource')
let NS1Request   = require('./ns1_request')

class Zone extends RestResource {

  constructor(attributes, from_server) {
    super(attributes, from_server)

    if (from_server) {
      this.id = attributes.zone || undefined
    }
  }

  get_create_resource_name() {
    return `${this.resource_name}/${this.attributes.zone}`
  }

  static import_zonefile(zone_name, filepath, async_call) {
    async_call = async_call || true
    return new NS1Request('put', `/import/zonefile/${zone_name}?async=${async_call}`, {}, { 'zonefile': filepath })
  }

  static import_zonefile_sync(zone_name, filepath) {
    return this.import_zonefile(zone_name, filepath, false)
  }

}

module.exports = Zone
