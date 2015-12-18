"use strict";

let NS1Request   = require('./ns1_request')

class Search {
  constructor(query, type, max) {
    if (typeof query !== 'string') {
      throw new Error('NS1.Search requires a string to query')
    }

    let query_object = {
      q: query
    }

    if (type) {
      query_object.type = type
    }

    if (max) {
      query_object.max = max
    }

    return new NS1Request('get', '/search', query_object)
  }
}

module.exports = Search
