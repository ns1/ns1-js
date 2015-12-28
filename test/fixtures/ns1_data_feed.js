var nock = require('nock')

nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .put('/v1/data/sources/', {"config":{"webhook_token":"15PSVFCXA377TGUY0FJA7T9VZY"},"name":"Rackspace Example","sourcetype":"rackspace"})
  .reply(200, {"status":"ok","name":"Rackspace Example","feeds":[],"config":{"webhook_token":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"5e8013177658baeb1914d9346edecc27","sourcetype":"rackspace"}, { date: 'Mon, 28 Dec 2015 21:04:00 GMT',
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
  .put('/v1/data/feeds/5e8013177658baeb1914d9346edecc27', {"config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"name":"server.example.com alert"})
  .reply(200, {"name":"server.example.com alert","data":{},"id":"5681a3c0830f78042a475938","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]}, { date: 'Mon, 28 Dec 2015 21:04:00 GMT',
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
  .get('/v1/data/feeds/5e8013177658baeb1914d9346edecc27/5681a3c0830f78042a475938')
  .reply(200, {"name":"server.example.com alert","data":{},"id":"5681a3c0830f78042a475938","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]}, { date: 'Mon, 28 Dec 2015 21:04:00 GMT',
  'content-type': 'application/json',
  'content-length': '164',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"082a8d6f7db24ae2a088e27ce5f1da7ac11f8c85"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/data/feeds/5e8013177658baeb1914d9346edecc27/5681a3c0830f78042a475938')
  .reply(200, {"name":"server.example.com alert","data":{},"id":"5681a3c0830f78042a475938","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]}, { date: 'Mon, 28 Dec 2015 21:04:00 GMT',
  'content-type': 'application/json',
  'content-length': '164',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"082a8d6f7db24ae2a088e27ce5f1da7ac11f8c85"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .post('/v1/data/feeds/5e8013177658baeb1914d9346edecc27/5681a3c0830f78042a475938', {"name":"test update","data":{},"id":"5681a3c0830f78042a475938","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]})
  .reply(200, {"name":"test update","data":{},"id":"5681a3c0830f78042a475938","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]}, { date: 'Mon, 28 Dec 2015 21:04:00 GMT',
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
  .get('/v1/data/feeds/5e8013177658baeb1914d9346edecc27/5681a3c0830f78042a475938')
  .reply(200, {"name":"test update","data":{},"id":"5681a3c0830f78042a475938","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]}, { date: 'Mon, 28 Dec 2015 21:04:00 GMT',
  'content-type': 'application/json',
  'content-length': '151',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"6e03c3cb7ee57f866ec77dfe817477fb5d17cfeb"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/data/feeds/5e8013177658baeb1914d9346edecc27/5681a3c0830f78042a475938')
  .reply(200, {"name":"test update","data":{},"id":"5681a3c0830f78042a475938","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]}, { date: 'Mon, 28 Dec 2015 21:04:00 GMT',
  'content-type': 'application/json',
  'content-length': '151',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"6e03c3cb7ee57f866ec77dfe817477fb5d17cfeb"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .post('/v1/data/feeds/5e8013177658baeb1914d9346edecc27/5681a3c0830f78042a475938', {"name":"server.example.com alert","data":{},"id":"5681a3c0830f78042a475938","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]})
  .reply(200, {"name":"server.example.com alert","data":{},"id":"5681a3c0830f78042a475938","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]}, { date: 'Mon, 28 Dec 2015 21:04:00 GMT',
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
  .put('/v1/data/feeds/5e8013177658baeb1914d9346edecc27', {"config":{"alarm_id":"b1BABAB","entity_id":"enABABA"},"name":"server.example.com alert 2"})
  .reply(200, {"name":"server.example.com alert 2","data":{},"id":"5681a3c0830f78046b18df81","config":{"alarm_id":"b1BABAB","entity_id":"enABABA"},"networks":[],"destinations":[]}, { date: 'Mon, 28 Dec 2015 21:04:00 GMT',
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
  .delete('/v1/data/feeds/5e8013177658baeb1914d9346edecc27/5681a3c0830f78046b18df81')
  .reply(200, {}, { date: 'Mon, 28 Dec 2015 21:04:00 GMT',
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
  .delete('/v1/data/feeds/5e8013177658baeb1914d9346edecc27/5681a3c0830f78042a475938')
  .reply(200, {}, { date: 'Mon, 28 Dec 2015 21:04:00 GMT',
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
  .delete('/v1/data/sources/5e8013177658baeb1914d9346edecc27')
  .reply(200, {}, { date: 'Mon, 28 Dec 2015 21:04:00 GMT',
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
