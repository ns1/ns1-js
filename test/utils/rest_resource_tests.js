"use strict";

let expect = require('chai').expect,
    NS1    = require('../../lib'),
    utils  = require('./')

const TEST_ZONE_NAME    = 'testdomain.test',
      NEW_ZONE_NAME     = 'newtestdomain.test',
      DEFAULT_TTL_VALUE = 3600

let total_zones = 0

module.exports = function() {

  describe(`NS1.Zone.find()`, () => {
    it(`Should return all zones in an array when no domain specified`, () => {
      return NS1.Zone.find().then((zones) => {
        expect(Array.isArray(zones)).to.eq(true)
        total_zones = zones.length
      })
    })

    it (`Should return a single zone when a domain is specified`, () => {
      return NS1.Zone.find(TEST_ZONE_NAME).then((zone) => {
        expect(typeof zone).to.eq('object')
        expect(zone.attributes.zone).to.eq(TEST_ZONE_NAME)
      })
    })
  })

  describe(`NS1.Zone#update()`, () => {
    let old_refresh, new_refresh

    after(() => {
      return NS1.Zone.find(TEST_ZONE_NAME).then((zone) => {
        return zone.update({ refresh: old_refresh })
      })
    })

    it(`Should update a single zone's TTL value`, () => {
      let zone

      return NS1.Zone.find(TEST_ZONE_NAME).then((z) => {
        zone = z
        old_refresh = zone.attributes.refresh,
        new_refresh = old_refresh !== 665 ? 665 : 1;

        return zone.update({
          refresh: new_refresh
        })
      }).then((new_zone) => {
        expect(new_zone).to.deep.equal(zone)
        expect(new_zone.attributes.refresh).to.eq(new_refresh)

        return NS1.Zone.find(TEST_ZONE_NAME)
      }).then((zone_check) => {
        expect(zone_check.attributes.refresh).to.eq(new_refresh)
      })
    })
  })

  describe(`NS1.Zone#save() by way of NS1.Zone.create(), then NS1.Zone#destroy(), temporary janky testing`, () => {
    it(`Should create a brand new zone, then destroy it`, () => {
      let zone

      return NS1.Zone.create({ 
        zone: NEW_ZONE_NAME 
      }).then((z) => {
        zone = z
        expect(zone.attributes.zone).to.eq(NEW_ZONE_NAME)
        expect(zone.attributes.ttl).to.eq(DEFAULT_TTL_VALUE)

        return NS1.Zone.find()
      }).then((zones) => {
        expect(zones.length).to.eq(total_zones + 1)

        return zone.destroy()
      }).then((destroyed) => {
        expect(destroyed).to.eq(true)

        return NS1.Zone.find()
      }).then((zones) => {
        expect(zones.length).to.eq(total_zones)
      })
    })
  })
}
