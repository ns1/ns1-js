var nock = require('nock')

nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .put('/v1/data/sources/', {"config":{"webhook_token":"15PSVFCXA377TGUY0FJA7T9VZY"},"name":"Rackspace Example","sourcetype":"rackspace"})
  .reply(200, {"status":"ok","name":"Rackspace Example","feeds":[],"config":{"webhook_token":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"fcf37e43e530545cc4545104c7f23480","sourcetype":"rackspace"}, { date: 'Mon, 28 Dec 2015 17:09:35 GMT',
  'content-type': 'application/json',
  'content-length': '175',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .put('/v1/data/feeds/fcf37e43e530545cc4545104c7f23480', {"config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"name":"server.example.com alert"})
  .reply(200, {"name":"server.example.com alert","data":{},"id":"56816ccf830f78046b18ddfb","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]}, { date: 'Mon, 28 Dec 2015 17:09:35 GMT',
  'content-type': 'application/json',
  'content-length': '164',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/data/feeds/fcf37e43e530545cc4545104c7f23480/56816ccf830f78046b18ddfb')
  .reply(200, {"name":"server.example.com alert","data":{},"id":"56816ccf830f78046b18ddfb","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]}, { date: 'Mon, 28 Dec 2015 17:09:35 GMT',
  'content-type': 'application/json',
  'content-length': '164',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"e18c60e20c590988709a1b5048cce24b634e866f"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/data/feeds/fcf37e43e530545cc4545104c7f23480/56816ccf830f78046b18ddfb')
  .reply(200, {"name":"server.example.com alert","data":{},"id":"56816ccf830f78046b18ddfb","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]}, { date: 'Mon, 28 Dec 2015 17:09:35 GMT',
  'content-type': 'application/json',
  'content-length': '164',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"e18c60e20c590988709a1b5048cce24b634e866f"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .post('/v1/data/feeds/fcf37e43e530545cc4545104c7f23480/56816ccf830f78046b18ddfb', {"name":"test update","data":{},"id":"56816ccf830f78046b18ddfb","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]})
  .reply(200, {"name":"test update","data":{},"id":"56816ccf830f78046b18ddfb","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]}, { date: 'Mon, 28 Dec 2015 17:09:35 GMT',
  'content-type': 'application/json',
  'content-length': '151',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/data/feeds/fcf37e43e530545cc4545104c7f23480/56816ccf830f78046b18ddfb')
  .reply(200, {"name":"test update","data":{},"id":"56816ccf830f78046b18ddfb","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]}, { date: 'Mon, 28 Dec 2015 17:09:35 GMT',
  'content-type': 'application/json',
  'content-length': '151',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"496bdb476ceff4be84d7a8daf7ed0ab0ec628ecc"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/data/feeds/fcf37e43e530545cc4545104c7f23480/56816ccf830f78046b18ddfb')
  .reply(200, {"name":"test update","data":{},"id":"56816ccf830f78046b18ddfb","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]}, { date: 'Mon, 28 Dec 2015 17:09:35 GMT',
  'content-type': 'application/json',
  'content-length': '151',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"496bdb476ceff4be84d7a8daf7ed0ab0ec628ecc"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .post('/v1/data/feeds/fcf37e43e530545cc4545104c7f23480/56816ccf830f78046b18ddfb', {"name":"server.example.com alert","data":{},"id":"56816ccf830f78046b18ddfb","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]})
  .reply(200, {"name":"server.example.com alert","data":{},"id":"56816ccf830f78046b18ddfb","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]}, { date: 'Mon, 28 Dec 2015 17:09:35 GMT',
  'content-type': 'application/json',
  'content-length': '164',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .delete('/v1/data/feeds/fcf37e43e530545cc4545104c7f23480/56816ccf830f78046b18ddfb')
  .reply(200, {}, { date: 'Mon, 28 Dec 2015 17:09:37 GMT',
  'content-type': 'application/json',
  'content-length': '3',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .delete('/v1/data/sources/fcf37e43e530545cc4545104c7f23480')
  .reply(200, {}, { date: 'Mon, 28 Dec 2015 17:09:37 GMT',
  'content-type': 'application/json',
  'content-length': '3',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });
