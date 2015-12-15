"use strict";

class NS1 {
  static set_api_key(key) {
    return NS1.Request.set_api_key(key)
  }

  static set_api_url(url) {
    return NS1.Request.set_api_url(url)
  }
}

NS1.Request = require('./ns1_request')
NS1.Zone    = require('./zone')

module.exports = NS1
