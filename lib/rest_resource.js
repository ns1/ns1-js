"use strict";

let NS1Request = require('./ns1_request'),
    pluralize  = require('pluralize')

class RestResource {

  constructor(attributes, from_server) {
    this.attributes = attributes || {}
    this.resource_name = this.constructor.get_resource_name()

    if (from_server) {
      this.id = this.attributes.id || undefined
    }
  }

  update(attributes) {
    this.attributes = Object.assign({}, this.attributes, attributes)
    return this.save()
  }

  save() {
    return new Promise((resolve, reject) => {
      let method, uri

      if (this.id !== undefined) {
        method = 'post'
        uri    = `${this.resource_name}/${this.id}`
      } else {
        method = 'put'
        uri    = `${this.get_create_resource_name() || this.resource_name}`
      }

      new NS1Request(method, uri, this.attributes)
          .then((response) => {
            resolve(convert_json_to_objects.bind(this.constructor)(response))
          }).catch(reject)
    })
  }

  destroy() {
    return new Promise((resolve, reject) => {
      new NS1Request('del', `${this.resource_name}/${this.id}`)
          .then((response) => {
            resolve(response)
          }).catch(reject)
    })
  }

  static create(attributes) {
    return new this(attributes).save()
  }

  // default behavior is to use the class name. won't work for most things, override in child classes
  static get_resource_name() {
    return pluralize(this.name.toLowerCase())
  }

  // method to overload if creating a new resource requires more than simply the resource name
  get_create_resource_name() {
    return undefined
  }

  static find(uid) {
    let resource_uri = this.get_resource_name()

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
