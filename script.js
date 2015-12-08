"use strict";

var NS1API = require('./lib/index')

NS1API.setApiKey('kQzlB2XBMJxDurt2IB02')

NS1API.Zone.list().then((zones) => {
  console.log(zones)
}).catch((err) => {
  console.log('error', err)
})
