"use strict";

let expect     = require('chai').expect,
    NS1        = require('../../lib'),
    utils      = require('./'),
    pluralize  = require('pluralize')


module.exports = function(options) {

  let {
    subject, 
    existing_val, 
    existing_obj,
    new_object_obj,
    update_val,
    update_key
  } = options
    
  let class_name       = `NS1.${options.subject.name}`,
      total_objects    = 0

  describe('Should behave resoucefully', function() {
    describe(`${class_name}.find()`, function() {

      if (!options.skip_find_all) {

        it(`Should return all relevant objects in an array`, function() {
          return subject.find().then((objects) => {
            expect(Array.isArray(objects)).to.eq(true)
            expect(objects[0].constructor).to.eq(subject)
            total_objects = objects.length
          })
        })

      }

      it (`Should return a single object when an ID is specified`, function() {
        if (typeof existing_val === 'function') existing_val = existing_val()
        if (typeof existing_obj === 'function') existing_obj = existing_obj()

        return subject.find(existing_val).then((object) => {
          expect(typeof object).to.eq('object')
          expect(Array.isArray(object)).to.eq(false)
          expect(object.constructor).to.eq(subject)
          
          for (var key in existing_obj) {
            expect(object.attributes[key]).to.eq(existing_obj[key])
          }
        })
      })
    })

    describe(`${class_name}#update()`, function() {
      let old_update_attrs = {},
          new_update_attrs = {}
          
      new_update_attrs[update_key] = update_val

      after(function() {
        if (typeof existing_val === 'function') existing_val = existing_val()
        
          return subject.find(existing_val).then((object) => {
          return object.update(old_update_attrs)
        })
      })

      it(`Should update a resource's value`, function() {
        if (typeof existing_val === 'function') existing_val = existing_val()

        let object

        return subject.find(existing_val).then((_object) => {
          object                       = _object
          old_update_attrs[update_key] = object.attributes[update_key]

          return object.update(new_update_attrs)
        }).then((new_object) => {
          expect(new_object).to.deep.equal(object)
          expect(new_object.attributes[update_key]).to.eq(update_val)

          return subject.find(existing_val)
        }).then((object_check) => {
          expect(object_check.attributes[update_key]).to.eq(update_val)
        })
      })
    })

    describe(`${class_name}#save() by way of ${class_name}.create(), then ${class_name}#destroy(), temporary janky testing`, function() {
      it(`Should create a brand new ${class_name}, then destroy it`, function() {
        let object

        return subject.create(new_object_obj).then((_object) => {
          object = _object
          
          for (let key in new_object_obj) {
            let val = new_object_obj[key]

            if (['string', 'number'].indexOf(typeof val) !== -1) {
              expect(object.attributes[key]).to.eq(val)
            }
          }


          if (!options.skip_find_all) {
            return subject.find()
            .then((objects) => {
              expect(objects.length).to.eq(total_objects + 1)

              return object.destroy()
            }).then((destroyed) => {
              expect(destroyed).to.eq(true)

              return subject.find()
            }).then((objects) => {
              expect(objects.length).to.eq(total_objects)
            })
          } else {
            return object.destroy()
            .then((destroyed) => {
              expect(destroyed).to.eq(true)
            })
          }
        })
      })
    })
  })
}
