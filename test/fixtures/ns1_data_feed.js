var nock = require('nock')

nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .put('/v1/data/sources/', {"config":{"webhook_token":"15PSVFCXA377TGUY0FJA7T9VZY"},"name":"Rackspace Example","sourcetype":"rackspace"})
  .reply(200, {"status":"ok","name":"Rackspace Example","feeds":[],"config":{"webhook_token":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"a072a99c87912b48e687236b7e0e4bef","sourcetype":"rackspace"}, { date: 'Mon, 04 Jan 2016 23:11:27 GMT',
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
  .put('/v1/data/feeds/a072a99c87912b48e687236b7e0e4bef', {"config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"name":"server.example.com alert"})
  .reply(200, {"name":"server.example.com alert","data":{},"id":"568afc1f830f780423017114","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]}, { date: 'Mon, 04 Jan 2016 23:11:27 GMT',
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
  .get('/v1/data/feeds/a072a99c87912b48e687236b7e0e4bef/568afc1f830f780423017114')
  .reply(200, {"name":"server.example.com alert","data":{},"id":"568afc1f830f780423017114","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]}, { date: 'Mon, 04 Jan 2016 23:11:27 GMT',
  'content-type': 'application/json',
  'content-length': '164',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"f6ce5e6a5f2a9345f5a1bf9a70fde23cb7751f43"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/data/feeds/a072a99c87912b48e687236b7e0e4bef/568afc1f830f780423017114')
  .reply(200, {"name":"server.example.com alert","data":{},"id":"568afc1f830f780423017114","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]}, { date: 'Mon, 04 Jan 2016 23:11:27 GMT',
  'content-type': 'application/json',
  'content-length': '164',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"f6ce5e6a5f2a9345f5a1bf9a70fde23cb7751f43"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .post('/v1/data/feeds/a072a99c87912b48e687236b7e0e4bef/568afc1f830f780423017114', {"name":"test update","data":{},"id":"568afc1f830f780423017114","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]})
  .reply(200, {"name":"test update","data":{},"id":"568afc1f830f780423017114","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]}, { date: 'Mon, 04 Jan 2016 23:11:27 GMT',
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
  .get('/v1/data/feeds/a072a99c87912b48e687236b7e0e4bef/568afc1f830f780423017114')
  .reply(200, {"name":"test update","data":{},"id":"568afc1f830f780423017114","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]}, { date: 'Mon, 04 Jan 2016 23:11:27 GMT',
  'content-type': 'application/json',
  'content-length': '151',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"6f4f68a89ed72358d2989da942efbe299019c80d"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/data/feeds/a072a99c87912b48e687236b7e0e4bef/568afc1f830f780423017114')
  .reply(200, {"name":"test update","data":{},"id":"568afc1f830f780423017114","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]}, { date: 'Mon, 04 Jan 2016 23:11:27 GMT',
  'content-type': 'application/json',
  'content-length': '151',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"6f4f68a89ed72358d2989da942efbe299019c80d"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .post('/v1/data/feeds/a072a99c87912b48e687236b7e0e4bef/568afc1f830f780423017114', {"name":"server.example.com alert","data":{},"id":"568afc1f830f780423017114","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]})
  .reply(200, {"name":"server.example.com alert","data":{},"id":"568afc1f830f780423017114","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]}, { date: 'Mon, 04 Jan 2016 23:11:27 GMT',
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
  .put('/v1/data/feeds/a072a99c87912b48e687236b7e0e4bef', {"config":{"alarm_id":"b1BABAB","entity_id":"enABABA"},"name":"server.example.com alert 2"})
  .reply(200, {"name":"server.example.com alert 2","data":{},"id":"568afc1f830f780493f5f028","config":{"alarm_id":"b1BABAB","entity_id":"enABABA"},"networks":[],"destinations":[]}, { date: 'Mon, 04 Jan 2016 23:11:27 GMT',
  'content-type': 'application/json',
  'content-length': '166',
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
  .delete('/v1/data/feeds/a072a99c87912b48e687236b7e0e4bef/568afc1f830f780493f5f028')
  .reply(200, {}, { date: 'Mon, 04 Jan 2016 23:11:27 GMT',
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
  .delete('/v1/data/feeds/a072a99c87912b48e687236b7e0e4bef/568afc1f830f780423017114')
  .reply(200, {}, { date: 'Mon, 04 Jan 2016 23:11:27 GMT',
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
  .delete('/v1/data/sources/a072a99c87912b48e687236b7e0e4bef')
  .reply(200, {}, { date: 'Mon, 04 Jan 2016 23:11:27 GMT',
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
