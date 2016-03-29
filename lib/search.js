"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NS1Request = require('./NS1_request');

/**
 * Handles all search-able entities on the NS1 platform. Currently
 * can only search types of "zone" or "record."
 *
 * @memberof NS1
 */

var Search =

/**
 * Requires an initial string to query with. Optional arguments
 * include type, which defaults to "all", and max, which defaults to 10.
 *
 * @param {String} query
 * @param {String} type
 * @param {Number} max
 * @return {Promise}
 */
function Search(query, type, max) {
  _classCallCheck(this, Search);

  if (typeof query !== 'string') {
    throw new Error('NS1.Search requires a string to query');
  }

  var query_object = {
    q: query
  };

  if (type) {
    query_object.type = type;
  }

  if (max) {
    query_object.max = max;
  }

  return new NS1Request('get', '/search', query_object);
};

module.exports = Search;