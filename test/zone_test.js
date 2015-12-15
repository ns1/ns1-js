"use strict";

let expect = require('chai').expect,
    NS1    = require('../lib'),
    utils  = require('./utils')

utils.setup_context('NS1.Zone', function() {
  utils.rest_resource_tests.call(this, {
    subject:        NS1.Zone,
    existing_val:   'testdomain.test',
    existing_key:   'zone',
    new_object_val: 'newtestdomain.test',
    new_object_key: 'zone',
    update_val:     665,
    update_key:     'refresh'
  })
})
