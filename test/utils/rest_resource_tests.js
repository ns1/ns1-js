"use strict";

let expect     = require('chai').expect,
    NS1        = require('../../lib'),
    utils      = require('./'),
    pluralize  = require('pluralize')

let total_objects = 0

module.exports = function(options) {

  let {
    subject, 
    existing_val, 
    existing_key,
    new_object_val,
    new_object_key,
    update_val,
    update_key
  } = options
    
  let class_name         = `NS1.${options.subject.name}`

  describe(`${class_name}.find()`, () => {
    it(`Should return all relevant objects in an array`, () => {
      return subject.find().then((objects) => {
        expect(Array.isArray(objects)).to.eq(true)
        expect(objects[0].constructor).to.eq(subject)
        total_objects = objects.length
      })
    })

    it (`Should return a single object when an ID is specified`, () => {
      return subject.find(existing_val).then((object) => {
        expect(typeof object).to.eq('object')
        expect(Array.isArray(object)).to.eq(false)
        expect(object.constructor).to.eq(subject)
        expect(object.attributes[existing_key]).to.eq(existing_val)
      })
    })
  })

  describe(`${class_name}#update()`, () => {
    let old_update_attrs = {},
        new_update_attrs = {}
        
    new_update_attrs[update_key] = update_val

    after(() => {
      return subject.find(existing_val).then((object) => {
        return object.update(old_update_attrs)
      })
    })

    it(`Should update a resource's value`, () => {
      let object

      return NS1.Zone.find(existing_val).then((_object) => {
        object                       = _object
        old_update_attrs[update_key] = object.attributes[update_key]

        return object.update(new_update_attrs)
      }).then((new_object) => {
        expect(new_object).to.deep.equal(object)
        expect(new_object.attributes.refresh).to.eq(update_val)

        return NS1.Zone.find(existing_val)
      }).then((object_check) => {
        expect(object_check.attributes[update_key]).to.eq(update_val)
      })
    })
  })

  describe(`NS1.Zone#save() by way of NS1.Zone.create(), then NS1.Zone#destroy(), temporary janky testing`, () => {
    it(`Should create a brand new zone, then destroy it`, () => {
      let zone

      return NS1.Zone.create({ 
        zone: new_object_val 
      }).then((z) => {
        zone = z
        expect(zone.attributes.zone).to.eq(new_object_val)
        expect(zone.attributes.ttl).to.eq(3600)

        return NS1.Zone.find()
      }).then((zones) => {
        expect(zones.length).to.eq(total_objects + 1)

        return zone.destroy()
      }).then((destroyed) => {
        expect(destroyed).to.eq(true)

        return NS1.Zone.find()
      }).then((zones) => {
        expect(zones.length).to.eq(total_objects)
      })
    })
  })
}
