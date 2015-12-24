var nock = require('nock')

nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .put('/v1/data/sources/', {"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"name":"Monitor.us Example","sourcetype":"monitor_us"})
  .reply(200, {"status":"pending","name":"Monitor.us Example","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"efa8a89e557e86606bc518248c667a6c","sourcetype":"monitor_us"}, { date: 'Thu, 24 Dec 2015 03:56:56 GMT',
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
  .reply(200, [{"status":"pending","name":"Monitor.us Example","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"efa8a89e557e86606bc518248c667a6c","sourcetype":"monitor_us"}], { date: 'Thu, 24 Dec 2015 03:56:56 GMT',
  'content-type': 'application/json',
  'content-length': '220',
  connection: 'close',
  'x-ratelimit-remaining': '899',
  etag: '"6824e08b0779309b4c93b74ae8019caaea4db221"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/data/sources/efa8a89e557e86606bc518248c667a6c')
  .reply(200, {"status":"pending","name":"Monitor.us Example","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"efa8a89e557e86606bc518248c667a6c","sourcetype":"monitor_us"}, { date: 'Thu, 24 Dec 2015 03:56:56 GMT',
  'content-type': 'application/json',
  'content-length': '218',
  connection: 'close',
  'x-ratelimit-remaining': '898',
  etag: '"3e19107a46d7ce80959091848c16ee6541f8c7a1"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/data/sources/efa8a89e557e86606bc518248c667a6c')
  .reply(200, {"status":"pending","name":"Monitor.us Example","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"efa8a89e557e86606bc518248c667a6c","sourcetype":"monitor_us"}, { date: 'Thu, 24 Dec 2015 03:56:56 GMT',
  'content-type': 'application/json',
  'content-length': '218',
  connection: 'close',
  'x-ratelimit-remaining': '897',
  etag: '"3e19107a46d7ce80959091848c16ee6541f8c7a1"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .post('/v1/data/sources/efa8a89e557e86606bc518248c667a6c', {"status":"pending","name":"test update","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"efa8a89e557e86606bc518248c667a6c","sourcetype":"monitor_us"})
  .reply(200, {"status":"pending","name":"test update","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"efa8a89e557e86606bc518248c667a6c","sourcetype":"monitor_us"}, { date: 'Thu, 24 Dec 2015 03:56:56 GMT',
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
  .get('/v1/data/sources/efa8a89e557e86606bc518248c667a6c')
  .reply(200, {"status":"pending","name":"test update","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"efa8a89e557e86606bc518248c667a6c","sourcetype":"monitor_us"}, { date: 'Thu, 24 Dec 2015 03:56:57 GMT',
  'content-type': 'application/json',
  'content-length': '211',
  connection: 'close',
  'x-ratelimit-remaining': '896',
  etag: '"143ddb8f4ec2f8db90b9b779e72334ff6a4f7704"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/data/sources/efa8a89e557e86606bc518248c667a6c')
  .reply(200, {"status":"pending","name":"test update","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"efa8a89e557e86606bc518248c667a6c","sourcetype":"monitor_us"}, { date: 'Thu, 24 Dec 2015 03:56:57 GMT',
  'content-type': 'application/json',
  'content-length': '211',
  connection: 'close',
  'x-ratelimit-remaining': '896',
  etag: '"143ddb8f4ec2f8db90b9b779e72334ff6a4f7704"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .post('/v1/data/sources/efa8a89e557e86606bc518248c667a6c', {"status":"pending","name":"Monitor.us Example","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"efa8a89e557e86606bc518248c667a6c","sourcetype":"monitor_us"})
  .reply(200, {"status":"pending","name":"Monitor.us Example","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"efa8a89e557e86606bc518248c667a6c","sourcetype":"monitor_us"}, { date: 'Thu, 24 Dec 2015 03:56:57 GMT',
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
  .reply(200, {"status":"pending","name":"Monitor.us Example 2","feeds":[],"config":{"secret_key":"47CAGRFTA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXR377TXAY0FJA7T9VZY"},"id":"81879fd5bef031d2f42dfe40a892f8af","sourcetype":"monitor_us"}, { date: 'Thu, 24 Dec 2015 03:56:57 GMT',
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
  .reply(200, [{"status":"pending","name":"Monitor.us Example 2","feeds":[],"config":{"secret_key":"47CAGRFTA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXR377TXAY0FJA7T9VZY"},"id":"81879fd5bef031d2f42dfe40a892f8af","sourcetype":"monitor_us"},{"status":"pending","name":"Monitor.us Example","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"efa8a89e557e86606bc518248c667a6c","sourcetype":"monitor_us"}], { date: 'Thu, 24 Dec 2015 03:56:57 GMT',
  'content-type': 'application/json',
  'content-length': '440',
  connection: 'close',
  'x-ratelimit-remaining': '895',
  etag: '"f08ee11eb6f6faeded1d72a21637748deeec4f36"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .delete('/v1/data/sources/81879fd5bef031d2f42dfe40a892f8af')
  .reply(200, {}, { date: 'Thu, 24 Dec 2015 03:56:57 GMT',
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
  .reply(200, [{"status":"pending","name":"Monitor.us Example","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"efa8a89e557e86606bc518248c667a6c","sourcetype":"monitor_us"}], { date: 'Thu, 24 Dec 2015 03:56:57 GMT',
  'content-type': 'application/json',
  'content-length': '220',
  connection: 'close',
  'x-ratelimit-remaining': '895',
  etag: '"6824e08b0779309b4c93b74ae8019caaea4db221"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });
