"use strict";

let NS1Request   = require('./NS1_request')

/**
 * Static class for all stats in NS1
 *
 * @memberof NS1
 */
let Stats = {

  /**
   * Gets queries per seconds. If no argument is supplied for "id", gets qps on an account
   * wide level. IDs can either be the name of zones, or records in the /:zone/:domain/:type format
   *
   * @param {String} id - name of the individual zone or records to get stats for
   * @return Promise
   */
  qps(id) {
    id = id || ''
    return new NS1Request('get', `/stats/qps/${id}`)
  },

  /**
   * Gets usage stats. If no argument is supplied for "id", gets usage stats on an account
   * wide level. IDs can either be the name of zones, or records in the /:zone/:domain/:type format
   *
   * @param {String} id - name of the individual zone or records to get stats for
   * @return Promise
   */
  usage(id) {
    id = id || ''
    return new NS1Request('get', `/stats/usage/${id}`)
  }

}

module.exports = Stats
