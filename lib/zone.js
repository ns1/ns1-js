"use strict";

let RestResource = require('./rest_resource')
let NS1Request   = require('./ns1_request')

class Zone extends RestResource {

  get_resource_path() {
    return `${this.constructor.get_base_path()}/${this.attributes.zone}`
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
