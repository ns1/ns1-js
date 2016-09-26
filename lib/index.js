"use strict";

/**
 * Base NS1 Module.
 * @namespace NS1
 */

var NS1 = {
  // base resources
  Zone: require('./zone'),
  Record: require('./record'),
  DataSource: require('./data_source'),
  DataFeed: require('./data_feed'),
  Monitor: require('./monitor'),
  NotificationList: require('./notification_list'),
  Stats: require('./stats'),
  Account: require('./account'),

  // helper classes
  NS1Request: require('./NS1_request'),
  Search: require('./search'),

  // convenience methods
  set_api_key: function set_api_key(key, start, err, success) {
    return NS1.NS1Request.set_api_key(key, start, err, success);
  },
  set_api_url: function set_api_url(url) {
    return NS1.NS1Request.set_api_url(url);
  }
};

module.exports = NS1;