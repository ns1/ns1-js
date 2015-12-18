"use strict";

let NS1Request = require('./ns1_request'),
    pluralize  = require('pluralize')

class RestResource {

  constructor(attributes, from_server) {
    this.attributes  = attributes || {}
    this.from_server = from_server
  }

  update(attributes) {
    this.attributes = Object.assign({}, this.attributes, attributes)
    return this.save()
  }

  save() {
    return new Promise((resolve, reject) => {
      let method = this.from_server ? 'post' : 'put',
          uri    = this.get_resource_path()

      new NS1Request(method, uri, this.attributes)
          .then((response) => {
            resolve(convert_json_to_objects.bind(this.constructor)(response))
          }).catch(reject)
    })
  }

  destroy() {
    return new Promise((resolve, reject) => {
      new NS1Request('del', this.get_resource_path())
          .then((response) => {
            resolve(response)
          }).catch(reject)
    })
  }

  static create(attributes) {
    return new this(attributes).save()
  }

  // default behavior is to use the class name. won't work for most things, override in child classes
  static get_base_path() {
    return pluralize(this.name.toLowerCase())
  }

  // defines the path to posting changes & getting details on a single resource.
  // requiring this method to be overloaded by each child resource as various attributes matter
  // per resource
  get_resource_path() {
    throw new Error(`NS1 JS API: NS1.${this.constructor.name}.get_resource_path() requires a definition`)
  }

  static find(uid) {
    let resource_uri = this.get_base_path()

    if (uid !== undefined) {
      resource_uri += `/${uid}`
    }

    return new Promise((resolve, reject) => {
      new NS1Request('get', resource_uri)
          .then((response) => {
            resolve(convert_json_to_objects.bind(this)(response))
          })
          .catch(reject)
    })
  }
}

function convert_json_to_objects(data) {
  if (Array.isArray(data)) {
    return data.map((item, index, arr) => {
      return new this(item, true)
    })
  } else {
    return new this(data, true)
  }
}

module.exports = RestResource
