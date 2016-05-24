"use strict";

let NS1Request   = require('../NS1_request'),
    RestResource = require('../rest_resource')

class PaymentMethod extends RestResource {

  static get_base_path() {
    return 'account/paymentmethods'
  }

  get_resource_path() {
    return `${this.constructor.get_base_path()}/${this.attributes.id}`
  }

  create_resource_path() {
    return this.constructor.get_base_path()
  }

  set_as_default() {
    return new NS1Request('post', `${this.get_resource_path()}`)
  }

}

module.exports = PaymentMethod
