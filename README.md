# NS1 JS API

[![Build Status](https://travis-ci.org/ns1/ns1-js.svg?branch=master)](https://travis-ci.org/ns1/ns1-js)

This is a high level JS client for NS1.com's REST API. Works as a Node.js module, tested on Node v 5+. If you'd like to use this in the browser and need to bypass our CORS restrictions, please contact us directly. Requires an NS1 account w/ an API key.

Using Gitflow so most up-to-date version will be in the develop branch.

Check out our API documentation at [http://ns1.github.io/ns1-js](http://ns1.github.io/ns1-js)

All method signatures reflect endpoints from the NS1 REST API, documentation available at [https://ns1.com/api](https://ns1.com/api)

### Installation

`$ npm install -s ns1`

### TLDR Example Usage

All methods return A+ style promises.

```javascript
var NS1 = require('ns1')

NS1.set_api_key([your api key])

NS1.Zone.find().then(function(zones) {
  console.log(zones) //=> Array of NS1.Zone objects
})

NS1.Zone.find('yourzone.com').then(function(zone) {
  console.log(zone) //=> NS1.Zone object of just the zone
  zone.update({ zone: 'anotherdomain.com' }).then(function(zone) {
    console.log(zone) //=> NS1.Zone object w/ updated info
  })
})

NS1.Zone.create({ zone: 'yourzone.com' }).then(function(zone) {
  console.log(zone) //=> Your newly created zone
})

new NS1.Zone({ zone: 'yourzone.com' }).save().then(function(zone) {
  console.log(zone) //=> same as above
})
```

### Code Usage

All objects (with the exception of `NS1Request` and `RestResource`) follow the resource concept and have static `find` and `create` methods for retrieving and creating objects of those types, respectively. For some objects, `find` can be passed with no arguments to get all objects of that data type, e.g. `NS1.Zone.find()`.

Once you've retrieved an object from the server, you can use `update` and pass an object of values you'd like to update, or you can adjust the variables on the object's `attributes` object, and then call `save`.

All method signatures follow the NS1 API, so whatever is passed to "find" a record via GET requests listed on the api is the required argument for a `find` method call.

Some examples:

```javascript
var NS1 = require('ns1')

NS1.set_api_key([your api key])

// find a record, records require zone + type info in string
NS1.Record.find('zone.com/www.zone.com/A')
.then(function(record) {
  return record.update({
    ttl: 300
  })
}).then(function(record) {
  console.log(record.attributes.ttl) // ==> 300
})

// adding an email to a notification list
NS1.NotificationList.find(...)
.then(function(list) {
  list.attributes.notify_list.push({
    "config": {
      "email": "example_email_@ddress.com"
    },
    "type": "email"
  })
  return list.save()
})

// manually send a request to the API
new NS1.NS1Request('get', '/zones/zone.com/www.zone.com/A')
.then(function(zone) {
  ...
})
```
