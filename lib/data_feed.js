"use strict";

let RestResource = require('./rest_resource')
let NS1Request   = require('./ns1_request')

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
    this.data_source_id = this.constructor.data_source_id || data_source_id
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
    if (!this.from_server || !this.data_source_id) return throw_error_on_create.call(this)

    return super.save.apply(this, arguments)
  }

  static create(attributes) {
    if (!this.data_source_id || !attributes.data_source_id) return throw_error_on_create.call(this)

    return super.create.apply(this, arguments)
  }

  static find(id) {
    if (!this.data_source_id) return throw_error_on_create.call(this)

    return super.find.call(this, id ? `${this.data_source_id}/${id}` : this.data_source_id)
  }

  static factory(data_source_id) {
    class DataFeedChild extends DataFeed {}
    DataFeedChild.data_source_id = data_source_id
    return DataFeedChild
  }
}

function throw_error_on_create() {
  throw new Error('Please provide a data_source_id or create new data feeds from an NS1.DataSource object using NS1.DataSource#create_data_feed')
}

module.exports = DataFeed
