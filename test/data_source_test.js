"use strict";

let expect = require('chai').expect,
    NS1    = require('../lib'),
    utils  = require('./utils')

utils.setup_context('NS1.DataSource', function() {

  let data_source_obj

  before(function() {
    return new NS1.NS1Request(
      'put',
      '/data/sources/',
      {
        "config": {
          "secret_key": "47AOG8ATA1QNUC3H3UH2DRBXYZ",
          "api_key": "15PSVFCXA377TGUY0FJA7T9VZY"
        },
        "name": "Monitor.us Example",
        "sourcetype": "monitor_us"
      }
    ).then((data_source) => {
      data_source_obj = data_source
    })
  })

  after(function() {
    return new NS1.NS1Request(
      'del',
      `/data/sources/${data_source_obj.id}`
    ).then(function() {
      data_source_obj = undefined
    })
  })

  utils.rest_resource_tests.call(this, {
    subject:        NS1.DataSource,
    existing_val:   () => data_source_obj.id,
    existing_obj:   () => data_source_obj,
    new_object_obj:   {
      "config": {
        "secret_key": "47CAGRFTA1QNUC3H3UH2DRBXYZ",
        "api_key": "15PSVFCXR377TXAY0FJA7T9VZY"
      },
      "name": "Monitor.us Example 2",
      "sourcetype": "monitor_us"
    },
    update_val:     "test update",
    update_key:     'name'
  })

  describe('.types', function() {
    it('should return an array of all data types', function() {
      return NS1.DataSource.types()
      .then((types) => {
        expect(typeof types).to.equal('object')
        expect(types.monitis.shortdesc).to.equal('Monitis Alert Notification')
      })
    })
  })



})
