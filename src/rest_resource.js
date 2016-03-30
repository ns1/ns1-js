"use strict";

let NS1Request = require('./NS1_request'),
    pluralize  = require('pluralize')

/**
 * Parent class for all resourceful objects. Grants basic REST backed resource
 * object methods and behaviors, e.g. new Object({ object_vars }).save, Object.create,
 * #destroy and #update methods.
 */
class RestResource {

  /**
   * @param {Object} attributes   - The attributes representing a new object
   * @param {Boolean} from_server - Used internally to know if an object exists on the server
   */
  constructor(attributes, from_server) {
    this.attributes  = attributes || {}
    this.from_server = from_server
  }

  /**
   * Updates an object w/ the provided attributes.
   *
   * @param {Object} attributes
   * @return {Promise}
   */
  update(attributes) {
    this.attributes = Object.assign({}, this.attributes, attributes)
    return this.save()
  }

  /**
   * Saves an object on the server.
   *
   * @return {Promise}
   */
  save() {
    return new Promise((resolve, reject) => {
      let method = this.from_server ? 'post' : 'put',
          uri    = this.from_server ? this.get_resource_path() : this.create_resource_path()

      return new NS1Request(method, uri, this.attributes)
          .then((response) => {
            resolve(convert_json_to_objects.bind(this.constructor)(response))
          }).catch((err) => {
            reject(err)
          })
    })
  }

  /**
   * Destroys an object on the server w/ the delete HTTP verb.
   *
   * @return {Promise}
   */
  destroy() {
    return new Promise((resolve, reject) => {
      return new NS1Request('del', this.get_resource_path())
          .then((response) => {
            resolve(response)
          }).catch((err) => {
            reject(err)
          })
    })
  }

  /**
   * Creates a new object w/ the provided attributes.
   *
   * @param {Object} attributes
   * @return {Promise}
   */
  static create(attributes) {
    return new this(attributes).save()
  }

  /**
   * Defines the default path for the resource, e.g. zones == '/zones'. Default behavior is the to take
   * the class's name, lower case it, and pluralize it. Overrideable in child classes.
   *
   * @return {String}
   */
  static get_base_path() {
    return pluralize(this.name.toLowerCase())
  }

  /**
   * Defines the path to posting changes & getting details on a single resource. Method is
   * required to be overriden within child classes as most paths will require info pertaining
   * to the individual resource's attributes.
   *
   * @return {String}
   */
  get_resource_path() {
    throw new Error(`NS1 JS API: NS1.${this.constructor.name}.get_resource_path() requires a definition`)
  }

  /**
   * Overrideable method to provide non-standard "PUT" behavior on creating new records.
   * E.g. Zones require info in the URI where Data Sources don't.
   *
   * @return {String}
   */
  create_resource_path() {
    return this.get_resource_path()
  }

  /**
   * Finds either all the relevant resources when not given any arguments (e.g. finds all Zones in an account)
   * but when supplied an identifier will only return that single resource (e.g. /zones/testdomain.test will
   * only return info pertaining to the zone testdomain.test)
   *
   * @param {String} uid - String identifier of the object which is conjoined with the base_path of the resource
   * @return {Promise}
   */
  static find(uid) {
    let resource_uri = this.get_base_path()

    if (uid !== undefined) {
      resource_uri += `/${uid}`
    }

    return new Promise((resolve, reject) => {
      return new NS1Request('get', resource_uri)
          .then((response) => {
            resolve(convert_json_to_objects.bind(this)(response))
          }).catch((err) => {
            reject(err)
          })
    })
  }
}

/**
 * Takes in JSON from requests and converts internal objects into objects representing the
 * resource class.
 *
 * @param {Array/Object} data - JSON data, either a single object or an array of objects
 * @return {Array/Object} - Returns the data as objects of the resource class
 * @private
 */
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
