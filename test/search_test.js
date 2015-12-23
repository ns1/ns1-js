"use strict";

let expect = require('chai').expect,
    NS1    = require('../lib'),
    utils  = require('./utils')

const TEST_ZONE = 'testdomain.test'

utils.setup_context('NS1.Search', function() {

  describe('new NS1.Search() constructor', function() {
    it('should throw an error if no query parameter is supplied', function() {
      expect(() => new NS1.Search()).to.throw('NS1.Search requires a string to query')
    })

    it('should return records & zones of a name', function() {
      return new NS1.Search(TEST_ZONE)
      .then((results) => {
        let keys = flatten_to_keys(results)
        expect(keys).to.contain('zone')
        expect(keys).to.contain('domain')
      })
    })

    it('should only return records if a type is specified', function() {
      return new NS1.Search(TEST_ZONE, 'record')
      .then((results) => {
        let keys = flatten_to_keys(results)
        expect(keys).to.contain('domain')
        expect(keys).to.contain('zone')
        expect(keys.length).to.eq(3)
      })
    })

    it('should only return zones if a type is specified', function() {
      return new NS1.Search(TEST_ZONE, 'zone')
      .then((results) => {
        let keys = flatten_to_keys(results)
        expect(keys).not.to.contain('domain')
        expect(keys).to.contain('zone')
        expect(keys.length).to.eq(1)
      })
    })

    it('should respect limits set by max values', function() {
      return new NS1.Search(TEST_ZONE, undefined, 1)
      .then((results) => {
        expect(results.length).to.eq(1)
      })
    })
  })

})


function flatten_to_keys(array_of_objects) {
  // results come in as an array of objects, the below
  // flattens them to an array of just object keys
  return [].concat.apply([], array_of_objects.map((item) => Object.keys(item)))
}
