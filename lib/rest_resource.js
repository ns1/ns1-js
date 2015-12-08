"use strict";

let request = require('superagent');

const NS1_API_ROOT = 'https://api.nsone.net/v1/'

class RestResource {

  constructor(resource_name, attributes) {
    this.attributes     = attributes || {}
    this.resource_name  = resource_name
    this.resource_url   = RestResource.get_resource_url(resource_name)
  }

  update() {}
  save()   {}
  remove() {}

  static get_resource_url(resource_name) {
    return `${NS1_API_ROOT}${resource_name}/`
  }

  static find(resource_name, attributes) {}

  static list(resource_name) {
    let resource_url = this.get_resource_url(resource_name)
    return new Promise((resolve, reject) => {
      request.get(resource_url)
             .set('X-NSONE-Key', global.__NS1_API_KEY__)
             .set('Accept', 'application/json')
             .end(function(err, res){
               if (err) { 
                 return reject(err) 
               }
               return resolve(res.text);
             })
    })
  }
}

module.exports = RestResource;
