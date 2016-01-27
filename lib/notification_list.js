"use strict";

let RestResource = require('./rest_resource')
let NS1Request   = require('./NS1_request')

/**
 * Class representing Notification Lists in NS1
 *
 * @extends RestResource
 * @memberof NS1
 */
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

  /**
   * Returns the different notifier types (e.g. Email, slack, etc)
   *
   * @returns Promise
   */
  static types() {
    return new NS1Request('get', '/notifytypes')
  }

}

module.exports = NotificationList
