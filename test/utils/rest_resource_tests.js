"use strict";

let expect     = require('chai').expect,
    NS1        = require('../../lib'),
    utils      = require('./'),
    pluralize  = require('pluralize')


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
    
  let class_name       = `NS1.${options.subject.name}`,
      new_object_attrs = {},
      total_objects    = 0

  new_object_attrs[new_object_key] = new_object_val

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

      return subject.find(existing_val).then((_object) => {
        object                       = _object
        old_update_attrs[update_key] = object.attributes[update_key]

        return object.update(new_update_attrs)
      }).then((new_object) => {
        expect(new_object).to.deep.equal(object)
        expect(new_object.attributes.refresh).to.eq(update_val)

        return subject.find(existing_val)
      }).then((object_check) => {
        expect(object_check.attributes[update_key]).to.eq(update_val)
      })
    })
  })

  describe(`${class_name}#save() by way of ${class_name}.create(), then ${class_name}#destroy(), temporary janky testing`, () => {
    it(`Should create a brand new ${class_name}, then destroy it`, () => {
      let object

      return subject.create(new_object_attrs).then((_object) => {
        object = _object
        expect(object.attributes[new_object_key]).to.eq(new_object_val)

        return subject.find()
      }).then((objects) => {
        expect(objects.length).to.eq(total_objects + 1)

        return object.destroy()
      }).then((destroyed) => {
        expect(destroyed).to.eq(true)

        return subject.find()
      }).then((objects) => {
        expect(objects.length).to.eq(total_objects)
      })
    })
  })
}
