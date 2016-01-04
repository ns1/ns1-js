"use strict";

let expect = require('chai').expect,
    NS1    = require('../lib'),
    utils  = require('./utils')

utils.setup_context('NS1.Record', function() {

  let zone_object,
      existing_val = 'testdomain.test/testdomain.test/NS',
      existing_obj = {
        'zone':   'testdomain.test',
        'domain': 'testdomain.test',
        'type':   'NS'
      }

  utils.test_zone_before_and_after.call(this)
  .then((zone) => { zone_object = zone })

  utils.rest_resource_tests.call(this, {
    subject:        NS1.Record,
    existing_val:   existing_val,
    existing_obj:   existing_obj,
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

  describe('#usage', function() {
    it('Should return record usage stats', function() {
      return NS1.Record.find(existing_val)
      .then((record) => {
        return record.usage()
      }).then((stats) => {
        expect(Array.isArray(stats)).to.eq(true)
        expect(stats[0].zone).to.eq('testdomain.test')
        expect(stats[0].queries).to.eq(0)
        expect(stats[0].rectype).to.eq('NS')
      })
    })
  })

  describe('#stats', function() {
    it('Should return record qps stats', function() {
      return NS1.Record.find(existing_val)
      .then((record) => {
        return record.qps()
      }).then((stats) => {
        expect(typeof stats).to.eq('object')
        expect(typeof stats.qps).to.eq('number')
        expect(stats.qps).to.eq(0)
      })
    })
  })
})
