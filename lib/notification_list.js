"use strict";

let RestResource = require('./rest_resource')
let NS1Request   = require('./ns1_request')

class NotificationList extends RestResource {
  
  static get_base_path() {
    return 'lists'
  }

  get_resource_path() {
    return `${this.constructor.get_base_path()}/${this.attributes.id}`
  }

  create_resource_path() {
    return this.constructor.get_base_path()
  }

  static types() {
    return new NS1Request('get', '/notifytypes')
  }

}

module.exports = NotificationList
