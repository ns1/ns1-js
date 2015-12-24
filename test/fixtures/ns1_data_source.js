var nock = require('nock')

nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .put('/v1/data/sources/', {"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"name":"Monitor.us Example","sourcetype":"monitor_us"})
  .reply(200, {"status":"pending","name":"Monitor.us Example","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"5b84680ee5d514df0c1461adc248d003","sourcetype":"monitor_us"}, { date: 'Thu, 24 Dec 2015 04:14:20 GMT',
  'content-type': 'application/json',
  'content-length': '218',
  connection: 'close',
  'x-ratelimit-remaining': '99',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '100',
  'x-ratelimit-period': '200',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/data/sources')
  .reply(200, [{"status":"pending","name":"Monitor.us Example","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"5b84680ee5d514df0c1461adc248d003","sourcetype":"monitor_us"}], { date: 'Thu, 24 Dec 2015 04:14:20 GMT',
  'content-type': 'application/json',
  'content-length': '220',
  connection: 'close',
  'x-ratelimit-remaining': '899',
  etag: '"4141579f2accbcfccb6bb524e1df9997a4ed6069"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/data/sources/5b84680ee5d514df0c1461adc248d003')
  .reply(200, {"status":"pending","name":"Monitor.us Example","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"5b84680ee5d514df0c1461adc248d003","sourcetype":"monitor_us"}, { date: 'Thu, 24 Dec 2015 04:14:20 GMT',
  'content-type': 'application/json',
  'content-length': '218',
  connection: 'close',
  'x-ratelimit-remaining': '898',
  etag: '"ded12c6f15527c81c99f417e1d83296b3afadc42"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/data/sources/5b84680ee5d514df0c1461adc248d003')
  .reply(200, {"status":"pending","name":"Monitor.us Example","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"5b84680ee5d514df0c1461adc248d003","sourcetype":"monitor_us"}, { date: 'Thu, 24 Dec 2015 04:14:20 GMT',
  'content-type': 'application/json',
  'content-length': '218',
  connection: 'close',
  'x-ratelimit-remaining': '897',
  etag: '"ded12c6f15527c81c99f417e1d83296b3afadc42"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .post('/v1/data/sources/5b84680ee5d514df0c1461adc248d003', {"status":"pending","name":"test update","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"5b84680ee5d514df0c1461adc248d003","sourcetype":"monitor_us"})
  .reply(200, {"status":"pending","name":"test update","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"5b84680ee5d514df0c1461adc248d003","sourcetype":"monitor_us"}, { date: 'Thu, 24 Dec 2015 04:14:20 GMT',
  'content-type': 'application/json',
  'content-length': '211',
  connection: 'close',
  'x-ratelimit-remaining': '299',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '300',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/data/sources/5b84680ee5d514df0c1461adc248d003')
  .reply(200, {"status":"pending","name":"test update","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"5b84680ee5d514df0c1461adc248d003","sourcetype":"monitor_us"}, { date: 'Thu, 24 Dec 2015 04:14:20 GMT',
  'content-type': 'application/json',
  'content-length': '211',
  connection: 'close',
  'x-ratelimit-remaining': '896',
  etag: '"e04c00fd08ffb92f33a1b859dbb8c313898b34d6"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/data/sources/5b84680ee5d514df0c1461adc248d003')
  .reply(200, {"status":"pending","name":"test update","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"5b84680ee5d514df0c1461adc248d003","sourcetype":"monitor_us"}, { date: 'Thu, 24 Dec 2015 04:14:20 GMT',
  'content-type': 'application/json',
  'content-length': '211',
  connection: 'close',
  'x-ratelimit-remaining': '896',
  etag: '"e04c00fd08ffb92f33a1b859dbb8c313898b34d6"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .post('/v1/data/sources/5b84680ee5d514df0c1461adc248d003', {"status":"pending","name":"Monitor.us Example","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"5b84680ee5d514df0c1461adc248d003","sourcetype":"monitor_us"})
  .reply(200, {"status":"pending","name":"Monitor.us Example","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"5b84680ee5d514df0c1461adc248d003","sourcetype":"monitor_us"}, { date: 'Thu, 24 Dec 2015 04:14:20 GMT',
  'content-type': 'application/json',
  'content-length': '218',
  connection: 'close',
  'x-ratelimit-remaining': '298',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '300',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .put('/v1/data/sources', {"config":{"secret_key":"47CAGRFTA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXR377TXAY0FJA7T9VZY"},"name":"Monitor.us Example 2","sourcetype":"monitor_us"})
  .reply(200, {"status":"pending","name":"Monitor.us Example 2","feeds":[],"config":{"secret_key":"47CAGRFTA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXR377TXAY0FJA7T9VZY"},"id":"0a1dd85c157f8108bc42e66af7d72996","sourcetype":"monitor_us"}, { date: 'Thu, 24 Dec 2015 04:14:20 GMT',
  'content-type': 'application/json',
  'content-length': '220',
  connection: 'close',
  'x-ratelimit-remaining': '98',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '100',
  'x-ratelimit-period': '200',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/data/sources')
  .reply(200, [{"status":"pending","name":"Monitor.us Example 2","feeds":[],"config":{"secret_key":"47CAGRFTA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXR377TXAY0FJA7T9VZY"},"id":"0a1dd85c157f8108bc42e66af7d72996","sourcetype":"monitor_us"},{"status":"pending","name":"Monitor.us Example","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"5b84680ee5d514df0c1461adc248d003","sourcetype":"monitor_us"}], { date: 'Thu, 24 Dec 2015 04:14:21 GMT',
  'content-type': 'application/json',
  'content-length': '440',
  connection: 'close',
  'x-ratelimit-remaining': '895',
  etag: '"715f5f596817ea4d0dc7dd56f5448d89f48dab43"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .delete('/v1/data/sources/0a1dd85c157f8108bc42e66af7d72996')
  .reply(200, {}, { date: 'Thu, 24 Dec 2015 04:14:21 GMT',
  'content-type': 'application/json',
  'content-length': '3',
  connection: 'close',
  'x-ratelimit-remaining': '99',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '100',
  'x-ratelimit-period': '200',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/data/sources')
  .reply(200, [{"status":"pending","name":"Monitor.us Example","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"5b84680ee5d514df0c1461adc248d003","sourcetype":"monitor_us"}], { date: 'Thu, 24 Dec 2015 04:14:21 GMT',
  'content-type': 'application/json',
  'content-length': '220',
  connection: 'close',
  'x-ratelimit-remaining': '895',
  etag: '"4141579f2accbcfccb6bb524e1df9997a4ed6069"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .delete('/v1/data/sources/5b84680ee5d514df0c1461adc248d003')
  .reply(200, {}, { date: 'Thu, 24 Dec 2015 04:14:21 GMT',
  'content-type': 'application/json',
  'content-length': '3',
  connection: 'close',
  'x-ratelimit-remaining': '98',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '100',
  'x-ratelimit-period': '200',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });
