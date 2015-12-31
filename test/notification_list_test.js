"use strict";

let expect = require('chai').expect,
    NS1    = require('../lib'),
    utils  = require('./utils')

utils.setup_context('NS1.NotificationList', function() {

  let existing_obj

  before(function() {
    return new NS1.NS1Request(
      'put',
      '/lists',
      {
        "name": "My Notification List",
        "notify_list": [
          {
            "config": {
              "email": "email+notify@gmail.com"
            },
            "type": "email"
          }
        ]
      }
    ).then((obj) => {
      existing_obj = obj
    })
  })

  after(function() {
    return new NS1.NS1Request(
      'del',
      `/lists/${existing_obj.id}`
    )
  })

  utils.rest_resource_tests.call(this, {
    skip_find_all:  true,
    subject:        NS1.NotificationList,
    existing_val:   () => existing_obj.id,
    existing_obj:   () => existing_obj,
    new_object_obj: () => {
      return {
        "name": "My Other Notification List",
        "notify_list": [
          {
            "config": {
              "email": "email+notify@gmail.com"
            },
            "type": "email"
          }
        ]
      }
    },
    update_val:     "test update",
    update_key:     'name'
  })

  describe('.types', function() {
    it('should return all notify_list types', function() {
      NS1.NotificationList.types((types) => {
        expect(Array.isArray(types)).to.eq(false)
        expect(types.email.desc).to.eq('Send notification to an email address.')
        expect(typeof types).to.eq('object')
      })
    })
  })
})
