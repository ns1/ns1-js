"use strict";

let NS1Request   = require('../NS1_request'),
    RestResource = require('../rest_resource')

class User extends RestResource {

  static get_base_path() {
    return 'account/users'
  }

  get_resource_path() {
    return `${this.constructor.get_base_path()}/${this.attributes.username}`
  }

  create_resource_path() {
    return this.get_resource_path()
  }

  reinvite() {
    return new NS1Request('post', `/account/reinvite/${this.attributes.username}`)
  }

}

module.exports = User
