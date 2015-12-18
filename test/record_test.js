"use strict";

let expect = require('chai').expect,
    NS1    = require('../lib'),
    utils  = require('./utils')

utils.setup_context('NS1.Record', function() {
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

  describe('NS1.Record.find()', function() {
    it('Should throw an error without any supplied arguments', function() {
      expect(NS1.Record.find).to.throw("Records can only be listed through a Zone, try new NS1.Zone(zone.name).attributes.records")
    })
  })

  // TODO: Make sure these actually do something
  describe('NS1.Record.metatypes()', function() {
    it('Should return the metatypes list as JSON', function() {
      return NS1.Record.metatypes().then((types) => {
        expect(typeof types).to.eq('object')
        expect(types.up.category).to.eq('status')
        expect(types.up.shortdesc).to.eq('Up/down')
      })
    })
  })

  describe('NS1.Record.filtertypes()', function() {
    it('Should return the filtertypes list as JSON', function() {
      return NS1.Record.filtertypes().then((types) => {
        expect(typeof types).to.eq('object')
        expect(types.up.inputs).to.deep.eq(["up"])
        expect(types.up.shortdesc).to.eq('Removes "down" answers')
      })
    })
  })
})
