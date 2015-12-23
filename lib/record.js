"use strict";

let RestResource = require('./rest_resource')
let NS1Request   = require('./ns1_request')

/**
 * Class representing all "records" in NS1.
 *
 * @extends RestResource
 * @memberof NS1
 */
class Record extends RestResource {

  /**
   * Defines the base path as just "zones/", all other info is derided from actual record object
   * itself.
   *
   * @return {String}
   */
  static get_base_path() {
    return 'zones'
  }

  /**
   * Defines the resource path w/ necessary zone information to succesfully GET the resource. Used
   * internally.
   *
   * @return {String}
   */
  get_resource_path() {
    return `${this.constructor.get_base_path()}/${this.attributes.zone}/${this.attributes.domain}/${this.attributes.type}`
  }

  /**
   * Throws an error if an ID is supplied, informs the user to get records through a Zone object if they want a list.
   * 
   * @param {String} id
   * @return {Promise}
   */
  static find(id) {
    if (id === undefined) {
      throw new Error("Records can only be listed through a Zone, try new NS1.Zone(zone.name).attributes.records")
    } else {
      return super.find.apply(this, arguments)
    }
  }

  /**
   * Returns all the acceptable metadata keys for records.
   *
   * @return {Promise}
   */
  static metatypes() {
    return new NS1Request('get', '/metatypes')
  }

  /**
   * Returns all the acceptable filter types on a record's filter chain.
   *
   * @return {Promise}
   */
  static filtertypes() {
    return new NS1Request('get', '/filtertypes')
  }
}

module.exports = Record
