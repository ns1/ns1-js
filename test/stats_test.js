"use strict";

let expect = require('chai').expect,
    NS1    = require('../lib'),
    utils  = require('./utils')

utils.setup_context('NS1.Stats', function() {

  let zone

  utils.test_zone_before_and_after.call(this)
  .then((_zone) => {
    zone = _zone
  })

  describe('.qps', function() {
    it('Should return account wide stats given no arguments', function() {
      return NS1.Stats.qps()
      .then((stats) => {
        expect(typeof stats).to.eq('object')
        expect(typeof stats.qps).to.eq('number')
      })
    })

    it('Should return zone wide stats given a zone as an argument', function() {
      return NS1.Stats.qps(zone.zone)
      .then((stats) => {
        expect(typeof stats).to.eq('object')
        expect(typeof stats.qps).to.eq('number')
        expect(stats.qps).to.eq(0)
      })
    })
  })

  describe('.usage', function() {
    it('Should return account wide stats given no arguments', function() {
      return NS1.Stats.usage()
      .then((stats) => {
        expect(Array.isArray(stats)).to.eq(true)
        expect(typeof stats[0].jobs).to.eq('number')
        expect(stats[0].jobs).to.eq(0)
      })
    })

    it('Should return zone wide stats given a zone as an argument', function() {
      return NS1.Stats.usage(zone.zone)
      .then((stats) => {
        expect(Array.isArray(stats)).to.eq(true)
        expect(typeof stats[0].records).to.eq('number')
        expect(stats[0].records).to.eq(1)
      })
    })
  })
})
