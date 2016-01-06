"use strict";

let NS1Request = require('../NS1_request')

let Account = {

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

  activity() {
    return new NS1Request('get', '/account/activity')
  }

}

function post_changes_or_get_results(uri, changes) {
  if (changes) {
    return new NS1Request('post', uri, changes)
  } else {
    return new NS1Request('get', uri)
  }
}

function get_list_or_specify_id(uri, id) {
}

module.exports = Account
