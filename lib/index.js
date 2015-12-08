"use strict";

require('superagent');

class NS1 {
  static setApiKey(key) {
    global.__NS1_API_KEY__ = key
  }
}

NS1.Zone = require('./resources/zone')

module.exports = NS1
