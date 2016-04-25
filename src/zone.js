"use strict";

let RestResource = require('./rest_resource')
let NS1Request   = require('./NS1_request')
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
    let path = [this.constructor.get_base_path(), this.attributes.zone].map((item) => {
      return encodeURIComponent(item.replace(/\//g, "%2f"))
    }).join('/')

    if (path[0] === '/') {
      path = path.substring(1)
    }

    return path
  }

  /**
   * Imports a zonefile and defines the zone's records w/ the info in the file.
   * 
   * @param {String} zone_name
   * @param {String/File} file
   * @param {Boolean} async_call
   * @return {Promise}
   */
  static import_zonefile(zone_name, file, async_call) {
    let file_data

    if (file instanceof File && typeof FormData === 'function') {
      file_data = new FormData()
      file_data.append('zonefile', file)
    } else if (typeof file === 'string') {
      file_data = { zonefile: file }
    }

    async_call = async_call !== undefined ? async_call : true

    return new NS1Request('put', `/import/zonefile/${zone_name}?async=${async_call}`, undefined, file_data).then((zone_attrs) => {
      return new Zone(zone_attrs, true)
    })
  }

  /**
   * Wrapper method to make the import_zonefile API call synchronously.
   *
   * @param {String} zone_name
   * @param {String/File} file
   * @return {Promise}
   */
  static import_zonefile_sync(zone_name, file) {
    return this.import_zonefile(zone_name, file, false)
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
    return Stats.qps(encodeURIComponent(this.attributes.zone.replace(/\//g, "%2f")))
  }

  /**
   * Returns usage statistics on a single record
   *
   * @return {Promise}
   */
  usage() {
    return Stats.usage(encodeURIComponent(this.attributes.zone.replace(/\//g, "%2f")))
  }

}

module.exports = Zone
