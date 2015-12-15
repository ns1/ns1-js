"use strict";

let expect = require('chai').expect,
    NS1    = require('../lib'),
    utils  = require('./utils')

utils.setup_context('NS1.Zone', function() {
  utils.rest_resource_tests.call(this)
})
