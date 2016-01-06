"use strict";

let expect = require('chai').expect,
    NS1    = require('../lib'),
    utils  = require('./utils')

utils.setup_context('NS1.Monitor', {record:true}, function() {

  let existing_obj, list
  let existing_obj_attrs = {
    "notify_regional": false,
    "notify_failback": true,
    "notify_repeat": 0,
    "notify_delay": 1000000,
    "rules": [
      {
	"value": "200 OK",
	"comparison": "contains",
	"key": "output"
      },
      {
	"value": 200,
	"comparison": "<=",
	"key": "connect"
      }
    ],
    "config": {
      "ssl": "1",
      "send": "HEAD / HTTP/1.0\r\n\r\n",
      "port": 443,
      "host": "1.2.3.4"
    },
    "job_type": "tcp",
    "name": "myhost.com:443 monitor",
    "active": true,
    "rapid_recheck": true,
    "region_scope": "fixed",
    "regions": [
      "master"
    ],
    "frequency": 30000000,
    "policy": "quorum",
    "notes": "If this monitor is down then the webserver on myhost.com:443 is down or too slow!"
  }

  let new_object_attrs = existing_obj_attrs
  new_object_attrs.name = "myotherhost.com:443 monitor"

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
    ).then((_list) => {
      list = _list
      existing_obj_attrs.notify_list = list.id
      return new NS1.NS1Request(
	'put',
	'/monitoring/jobs',
	existing_obj_attrs
      ).then((obj) => {
	existing_obj = obj
      })
    })
  })

  after(function() {
    return new NS1.NS1Request(
      'del',
      `/monitoring/jobs/${existing_obj.id}`
    ).then(() => {
      return new NS1.NS1Request(
        'del',
        `/lists/${list.id}`
      )
    })
  })

  utils.rest_resource_tests.call(this, {
    skip_find_all:  true,
    subject:        NS1.Monitor,
    existing_val:   () => existing_obj.id,
    existing_obj:   () => existing_obj,
    new_object_obj: new_object_attrs,
    update_val:     "test update",
    update_key:     'name'
  })

  describe('#history', function() {
    it('Should return an array of historical info', function() {
      return NS1.Monitor.find(existing_obj.id)
      .then((obj) => {
        return obj.history({ period: "30d" })
      }).then((history) => {
        expect(Array.isArray(history)).to.eq(true)
        expect(history[0].job).to.eq(existing_obj.id)
      })
    })
  })

  describe('#metrics', function() {
    it('Should return metric info for the monitoring job', function() {
      return NS1.Monitor.find(existing_obj.id)
      .then((obj) => {
        return obj.metrics()
      }).then((metrics) => {
        expect(Array.isArray(metrics)).to.eq(true)
      })
    })
  })

  describe('.jobtypes', function() {
    it('Should return job types', function() {
      return NS1.Monitor.jobtypes()
      .then((jobtypes) => {
        expect(typeof jobtypes).to.eq('object')
        expect(jobtypes.tcp.desc).to.eq('Connect to a TCP port on a host.')
      })
    })
  })

  describe('.regions', function() {
    it('Should return all usable monitoring regions', function() {
      return NS1.Monitor.regions()
      .then((regions) => {
        expect(Array.isArray(regions)).to.eq(true)
        expect(regions[0].code).to.eq('master')
      })
    })
  })

})
