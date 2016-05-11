"use strict";

let NS1Request   = require('../NS1_request'),
    RestResource = require('../rest_resource')

class ApiKey extends RestResource {

  static get_base_path() {
    return 'account/apikeys'
  }

  get_resource_path() {
    return `${this.constructor.get_base_path()}/${this.attributes.id}`
  }

  create_resource_path() {
    return this.constructor.get_base_path()
  }

}

module.exports = ApiKey
