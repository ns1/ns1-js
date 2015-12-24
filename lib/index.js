"use strict";

/**
 * Base NS1 Module.
 * @namespace NS1
 */
let NS1 = {
  // base resources
  Zone:       require('./zone'),
  Record:     require('./record'),
  DataSource: require('./data_source'),

  // helper classes
  NS1Request: require('./ns1_request'),
  Search:     require('./search'),
  
  // convenience methods
  set_api_key(key) {
    return NS1.NS1Request.set_api_key(key)
  },

  set_api_url(url) {
    return NS1.NS1Request.set_api_url(url)
  }
}

module.exports = NS1
