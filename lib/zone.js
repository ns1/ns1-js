"use strict";

let RestResource = require('./rest_resource')
let NS1Request   = require('./ns1_request')
let Stats        = require('./stats')

/**
 * Represents all Zone objects on a client's account.
 *
 * @extends RestResource
 * @memberof NS1
 */
class Zone extends RestResource {

  /**
   * Defines the resource path w/ necessary zone information to succesfully GET the resource. Used
   * internally.
   *
   * @return {String}
   */
  get_resource_path() {
    return `${this.constructor.get_base_path()}/${this.attributes.zone}`
  }

  /**
   * Imports a zonefile and defines the zone's records w/ the info in the file.
   * 
   * @param {String} zone_name
   * @param {String} filepath
   * @param {Boolean} async_call
   * @return {Promise}
   */
  static import_zonefile(zone_name, filepath, async_call) {
    async_call = async_call || true
    return new NS1Request('put', `/import/zonefile/${zone_name}?async=${async_call}`, {}, { 'zonefile': filepath })
  }

  /**
   * Wrapper method to make the import_zonefile API call synchronously.
   *
   * @param {String} zone_name
   * @param {String} filepath
   * @return {Promise}
   */
  static import_zonefile_sync(zone_name, filepath) {
    return this.import_zonefile(zone_name, filepath, false)
  }

  /**
   * Returns all the networks a user can apply a zone to
   *
   * @return {Promise}
   */
  static networks() {
    return new NS1Request('get', '/networks')
  }

  /**
   * Returns the Queries Per Second statistics of a single record
   *
   * @return {Promise}
   */
  qps() {
    return Stats.qps(this.attributes.zone)
  }

  /**
   * Returns usage statistics on a single record
   *
   * @return {Promise}
   */
  usage() {
    return Stats.usage(this.attributes.zone)
  }

}

module.exports = Zone
