"use strict";

let superagent = require('superagent')

class NS1Request {
  constructor(method, uri, query, files) {
    this.method = method
    this.is_json_response = true // flag to adjust later on when dealing with binary file responses

    this.request = superagent[method].apply(
                     superagent, 
                     [`${NS1Request.NS1_API_ROOT}${uri}`]
                   ).set('X-NSONE-Key', NS1Request.NS1_API_KEY)
              
    this.apply_data(query, files)
    return this.create_promise()               
  }

  apply_data(query, files) {
    // if there's ever an API query that would involve BOTH
    // a URL query (/path?query_val=1) AND POST data, adjust
    // below or force URI to be fully formatted
    if (query !== undefined) {
      if (this.method === 'get') {
        this.request = this.request.query(query)
      } else {
        this.request = this.request.send(query)
      }
    }

    if (files !== undefined) {
      for (var key in files) {
        this.request = this.request.attach(key, files[key])
      }
    }
  }

  create_promise() {
    return new Promise((resolve, reject) => {
      this.request.end((err, response) => {
        if (err) {
          if (response && response.text) {
            throw new Error(`NS1 API Request Failed: ${response.text}`) 
          } else {
            throw err
          }
        } 

        if (this.is_json_response && this.method != 'del' && response.text !== '') {
          try {
            var parsed = JSON.parse(response.text)
          } catch(parse_err) {
            reject(parse_err)
          }
        } else { /*???*/ }

        return resolve(parsed || true)
      })
    })
  }
}

module.exports = NS1Request
