"use strict";

let superagent = require('superagent')

let api_key,
    api_url = 'https://api.nsone.net/v1/'

class NS1Request {

  static get_api_key() { 
    return api_key
  }
  
  static set_api_key(key) {
    api_key = key 
  }

  static get_api_url() {
    return api_url
  }

  static set_api_url(root) {
    api_url = root
  }

  constructor(method, uri, query, files) {
    this.method = method
    this.is_json_response = true // flag to adjust later on when dealing with binary file responses

    this.request = superagent[method].apply(
                     superagent, 
                     [`${api_url}${uri}`]
                   ).set('X-NSONE-Key', api_key)
                   .set('X-NSONE-Js-Api', require('../package.json').version)

              
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
          throw this.handle_error(err, response)
        } 

        if (this.is_json_response && this.method != 'del' && response.text !== '') {
          try {
            var parsed = JSON.parse(response.text)
          } catch(parse_err) {
            throw new Error(`NS1 API Response couldn't parse as JSON: ${parse_err}`)
          }
        } else {
          // TODO: Determine if there's a need to filter/reject empty response bodies on 200's
        }

        return resolve(parsed || true)
      })
    })
  }

  handle_error(err, response) {
    if (response && response.text) {
      let final_message
      try {
        final_message = JSON.parse(response.text).message
      } catch(e) {
        final_message = response.text
      }
      return new Error(`NS1 API Request Failed: ${final_message}`) 
    } else {
      return err
    }
  }
}

module.exports = NS1Request
