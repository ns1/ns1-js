"use strict";

let NS1 = {
  // base resources
  Zone:        require('./zone'),
  Record:      require('./record'),

  // helper classes
  Request:     require('./ns1_request'),
  Search:      require('./search'),
  
  // convenience methods
  set_api_key(key) {
    return NS1.Request.set_api_key(key)
  },

  set_api_url(url) {
    return NS1.Request.set_api_url(url)
  }
}

module.exports = NS1
