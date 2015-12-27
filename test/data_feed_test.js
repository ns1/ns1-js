"use strict";

let expect = require('chai').expect,
    NS1    = require('../lib'),
    utils  = require('./utils')

utils.setup_context('NS1.DataFeed', { record: true }, function() {

  let data_source_obj,
      data_feed_obj,
      generated_data_feed_class

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
  
      generated_data_feed_class = NS1.DataFeed.factory(data_source_obj.id)

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
//    subject:        { fn: () => { return NS1.DataFeed.factory(data_source_obj.id) } },
    subject:        { fn: () => {return generated_data_feed_class} },
    existing_val:   () => data_feed_obj.id,
    existing_obj:   () => data_feed_obj,
    new_object_obj: () => {
      return {
        data_source_id: data_source_obj.id,
        config: {
          "alarm_id": "a1AAAAA",
          "entity_id": "enAAAAA"
        },
        "name": "server.example.com alert 2"
      }
    },
    update_val:     "test update",
    update_key:     'name'
  })

})
