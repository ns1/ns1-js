"use strict";

let expect = require('chai').expect,
    NS1    = require('../lib'),
    utils  = require('./utils')

utils.setup_context('NS1.DataFeed', function() {

  let data_source_obj,
      data_feed_obj

  before(function() {
    return new NS1.NS1Request(
      'put',
      '/data/sources/',
      {
        "config": {
          "webhook_token": "15PSVFCXA377TGUY0FJA7T9VZY"
        },
        "name": "Rackspace Example",
        "sourcetype": "rackspace"
      }
    ).then((data_source) => {
      data_source_obj = data_source
  
      return new NS1.NS1Request(
        'put',
        `/data/feeds/${data_source_obj.id}`,
        {
          "config": {
              "alarm_id": "a1AAAAA",
              "entity_id": "enAAAAA"
            },
          "name": "server.example.com alert"
        }
      )
    }).then((data_feed) => {
      data_feed.data_source_id = data_source_obj.id
      data_feed_obj = data_feed
    })
  })

  after(function() {
    return new NS1.NS1Request(
      'del',
      `/data/feeds/${data_source_obj.id}/${data_feed_obj.id}`
    ).then(function() {
      return new NS1.NS1Request(
        'del',
        `/data/sources/${data_source_obj.id}`
      )
    })
  })

  utils.rest_resource_tests.call(this, {
    skip_find_all:  true,
    subject:        NS1.DataFeed,
    existing_val:   () => `${data_source_obj.id}/${data_feed_obj.id}`,
    existing_obj:   () => data_feed_obj,
    new_object_obj: () => {
      return {
        data_source_id: data_source_obj.id,
        config: {
          "alarm_id": "b1BABAB",
          "entity_id": "enABABA"
        },
        "name": "server.example.com alert 2"
      }
    },
    update_val:     "test update",
    update_key:     'name'
  })

})
