"use strict";

let RestResource = require('./rest_resource')
let NS1Request   = require('./NS1_request')
let Stats        = require('./stats')

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
    let path = [this.constructor.get_base_path(), this.attributes.zone, this.attributes.domain, this.attributes.type].map((item) => {
      return encodeURIComponent(item.replace(/\//g, "%2f"))
    }).join('/')

    if (path[0] === '/') {
      path = path.substring(1)
    }

    return path
  }

  /**
   * Throws an error if an ID isn't supplied, informs the user to get records through a Zone object if they want a list.
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

  /**
   * Returns the Queries Per Second statistics of a single record
   *
   * @return {Promise}
   */
  qps() {
    return Stats.qps(this.get_resource_path().replace(`${this.constructor.get_base_path()}/`, ''))
  }

  /**
   * Returns usage statistics on a single record
   *
   * @return {Promise}
   */
  usage() {
    return Stats.usage(this.get_resource_path().replace(`${this.constructor.get_base_path()}/`, ''))
  }
}

module.exports = Record
