"use strict";

let expect = require('chai').expect,
    NS1    = require('../lib'),
    utils  = require('./utils')

utils.setup_context('NS1.Record', { record: true }, function() {
  utils.rest_resource_tests.call(this, {
    subject:        NS1.Record,
    existing_val:   'testdomain.test/testdomain.test/NS',
    existing_obj:   {
      'zone':   'testdomain.test',
      'domain': 'testdomain.test',
      'type':   'NS'
    },
    new_object_val: 'testdomain.test/www.testdomain.test/A',
    new_object_obj: {
      'zone':   'testdomain.test',
      'domain': 'www.testdomain.test',
      'type':   'A',
      'answers': [
        {
          'answer': [
            '1.1.1.1'
          ]
        }
      ]
    },
    update_val:     665,
    update_key:     'ttl',
    skip_find_all:  true
  })
})
