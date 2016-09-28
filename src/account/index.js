"use strict";

let NS1Request    = require('../NS1_request'),
    PaymentMethod = require('./payment_method'),
    User          = require('./user'),
    ApiKey        = require('./api_key'),
    Team          = require('./team')

let Account = {

  PaymentMethod: PaymentMethod,
  User:          User,
  ApiKey:        ApiKey,
  Team:          Team,

  settings(changes) {
    return post_changes_or_get_results.call(this, '/account/settings', changes)
  },

  usage_warnings(changes) {
    return post_changes_or_get_results.call(this, '/account/usagewarnings', changes)
  },

  plan_types() {
    return new NS1Request('get', '/account/plantypes')
  },

  plan(changes) {
    return post_changes_or_get_results.call(this, '/account/plan', changes)
  },

  invoice(id) {
    if (id) {
      return new NS1Request('get', `/account/invoices/${id}`)
    } else {
      return new NS1Request('get', '/account/invoices')
    }
  },

  invoices() {
    return this.invoice()
  },

  bill_at_a_glance() {
    return new NS1Request('get', '/account/billataglance')
  },

  activity(params) {
    return new NS1Request('get', '/account/activity', params)
  },

  logout(){
    return new NS1Request('delete', '/account/logout')
  }

}

function post_changes_or_get_results(uri, changes) {
  if (changes) {
    return new NS1Request('post', uri, changes)
  } else {
    return new NS1Request('get', uri)
  }
}

module.exports = Account
