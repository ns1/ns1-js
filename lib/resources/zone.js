"use strict";

let RestResource = require('../rest_resource')

const RESOURCE_NAME = 'zones'

class Zone extends RestResource {

  constructor(attributes) {
    super(RESOURCE_NAME, attributes || {})
  }

  static find(attributes) {
    return super.find(RESOURCE_NAME, attributes)
  }

  static list() {
    return super.list(RESOURCE_NAME)
  }

}


module.exports = Zone
