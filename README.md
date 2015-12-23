# NS1 JS API

This is a high level JS client for NS1.com's REST API. Works as a Node.js module. If you'd like to use this in the browser and need to bypass our CORS restrictions, please contact us directly. Requires an NS1 account w/ an API key.

Publishing this to NPM is on the roadmap. For now, download the repo and include it via npm as such:

`$ npm install path/to/ns1-js-repo`

Currently in development; only Zone and Record endpoints are supported. Using Gitflow so most up-to-date version will be in the develop branch.

### Example Usage

All methods return A+ style promises.

```javascript
var NS1 = require('ns1-js')

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

### Run the tests

`$ export NS1_JS_TEST_API_KEY=[your api key]`
`$ npm install`
`$ npm test`
