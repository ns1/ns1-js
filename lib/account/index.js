"use strict";

var NS1Request = require('../NS1_request'),
    PaymentMethod = require('./payment_method'),
    User = require('./user'),
    ApiKey = require('./api_key'),
    Team = require('./team');

var Account = {

  PaymentMethod: PaymentMethod,
  User: User,
  ApiKey: ApiKey,
  Team: Team,

  settings: function settings(changes) {
    return post_changes_or_get_results.call(this, '/account/settings', changes);
  },
  usage_warnings: function usage_warnings(changes) {
    return post_changes_or_get_results.call(this, '/account/usagewarnings', changes);
  },
  plan_types: function plan_types() {
    return new NS1Request('get', '/account/plantypes');
  },
  plan: function plan(changes) {
    return post_changes_or_get_results.call(this, '/account/plan', changes);
  },
  invoice: function invoice(id) {
    if (id) {
      return new NS1Request('get', '/account/invoices/' + id);
    } else {
      return new NS1Request('get', '/account/invoices');
    }
  },
  invoices: function invoices() {
    return this.invoice();
  },
  bill_at_a_glance: function bill_at_a_glance() {
    return new NS1Request('get', '/account/billataglance');
  },
  activity: function activity() {
    return new NS1Request('get', '/account/activity');
  }
};

function post_changes_or_get_results(uri, changes) {
  if (changes) {
    return new NS1Request('post', uri, changes);
  } else {
    return new NS1Request('get', uri);
  }
}

module.exports = Account;