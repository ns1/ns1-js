"use strict"

let nock = require('nock'),
    path = require('path'),
    fs   = require('fs')

module.exports = function (name) {
  let fp              = `test/fixtures/${name}.js`,
      force_recording = !!process.env.NS1_NOCK_RECORD,
      has_fixtures    = false

  return {
    before() {
      if (force_recording == false){
        try {
          require('../../' + fp)
          has_fixtures = true
          return
        } catch (e) {}
      }

      nock.recorder.rec({
        dont_print: true
      })
    },

    after(done) {
      if (!has_fixtures) {
        let fixtures = nock.recorder.play(),
            text     = "var nock = require('nock')\n" + fixtures.join('\n')
        fs.writeFile(fp, text, done)
      } else {
        done()
      }
    }
  }
}
