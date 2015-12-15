"use strict";

class NS1 {
  static setApiKey(key) {
    NS1.Request.NS1_API_KEY = key
  }

  static setApiUrl(url) {
    NS1.Request.NS1_API_ROOT = url
  }
}

NS1.Request = require('./ns1_request')
NS1.Zone    = require('./zone')

NS1.setApiUrl('https://api.nsone.net/v1/')

module.exports = NS1
