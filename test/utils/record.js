"use strict";

let nock = require('nock'),
    path = require('path'),
    fs   = require('fs'),
    NS1  = require('../../lib')

if (process.env.NS1_JS_TEST_API_KEY && process.env.NS1_JS_TEST_API_KEY !== NS1.Request.NS1_API_KEY) {
  NS1.setApiKey(process.env.NS1_JS_TEST_API_KEY)
} else {
  // TODO: Below error should probably come from lib internally.
  throw new Error("NS1 API key required. Please set env variable NS1_JS_TEST_API_KEY")
  process.exit(1)
}

module.exports = function (name, options) {
  // options tell us where to store our fixtures
  options = options || {};
  var test_folder = options.test_folder || 'test';
  var fixtures_folder = options.fixtures_folder || 'fixtures';
  var fp = path.join(test_folder, fixtures_folder, name + '.js');
  // the environment variable `NS1_NOCK_RECORD` can be used to force a new recording.
  var has_fixtures = !!process.env.NS1_NOCK_RECORD;

  return {
    // starts recording, or ensure the fixtures exist
    before: function () {
      if (!has_fixtures) try {
        require('../' + fp);
        has_fixtures = true;
      } catch (e) {
        nock.recorder.rec({
          dont_print: true
        });
      } else {
        has_fixtures = false;
        nock.recorder.rec({
          dont_print: true
        });
      }
    },
    // saves our recording if fixtures didn't already exist
    after: function (done) {
      if (!has_fixtures) {
        var fixtures = nock.recorder.play();
        var text = "var nock = require('nock');\n" + fixtures.join('\n');
        fs.writeFile(fp, text, done);
      } else {
        done();
      }
    }
  }
};
