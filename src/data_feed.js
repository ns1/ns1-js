"use strict";

let RestResource = require('./rest_resource')
let NS1Request   = require('./NS1_request')

/**
 * Class representing data sources in NS1.
 *
 * @extends RestResource
 * @memberof NS1
 */
class DataFeed extends RestResource {

  constructor(attributes, from_server) {
    let data_source_id = attributes.data_source_id
    delete attributes.data_source_id
    super(attributes, from_server)
    this.data_source_id = data_source_id
  }
  
  static get_base_path() {
    return 'data/feeds'
  }

  get_resource_path() {
    return `${this.constructor.get_base_path()}/${this.data_source_id}/${this.attributes.id}`
  }

  create_resource_path() {
    return `${this.constructor.get_base_path()}/${this.data_source_id}`
  }

  save() {
    let data_source_id = this.data_source_id
    return new Promise((resolve, reject) => {
      return super.save.call(this).then((results) => {
        resolve(this.constructor.add_data_source_to_objects(results, data_source_id))
      }).catch((err) => {
        reject(err)
      })
    })
  }

  static find(id) {
    let data_source_id = id.split('/')[0]
    return new Promise((resolve, reject) => {
      return super.find.call(this, id).then((results) => {
        resolve(this.add_data_source_to_objects(results, data_source_id))
      }).catch((err) => {
        reject(err)
      })
    })
  }

  static add_data_source_to_objects(data, data_source_id) {
    if (Array.isArray(data)) {
      return data.map((item, index, arr) => {
        item.data_source_id = data_source_id
        return item
      })
    } else {
      data.data_source_id = data_source_id
      return data
    }
  }
}

module.exports = DataFeed
