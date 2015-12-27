var nock = require('nock')

nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .put('/v1/data/sources/', {"config":{"webhook_token":"15PSVFCXA377TGUY0FJA7T9VZY"},"name":"Rackspace Example","sourcetype":"rackspace"})
  .reply(200, {"status":"ok","name":"Rackspace Example","feeds":[],"config":{"webhook_token":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"0ed85d1bfbf9498cd71e0a622b960817","sourcetype":"rackspace"}, { date: 'Sun, 27 Dec 2015 03:40:03 GMT',
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
  .put('/v1/data/feeds/0ed85d1bfbf9498cd71e0a622b960817', {"config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"name":"server.example.com alert"})
  .reply(200, {"name":"server.example.com alert","data":{},"id":"567f5d93830f78046b18da34","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]}, { date: 'Sun, 27 Dec 2015 03:40:03 GMT',
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
  .get('/v1/data/feeds/0ed85d1bfbf9498cd71e0a622b960817')
  .reply(200, [{"name":"server.example.com alert","data":{},"id":"567f5d93830f78046b18da34","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]}], { date: 'Sun, 27 Dec 2015 03:40:04 GMT',
  'content-type': 'application/json',
  'content-length': '166',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"463bf0698f90417270d2f0099981b73de15327ec"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/data/feeds/0ed85d1bfbf9498cd71e0a622b960817/567f5d93830f78046b18da34')
  .reply(200, {"name":"server.example.com alert","data":{},"id":"567f5d93830f78046b18da34","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]}, { date: 'Sun, 27 Dec 2015 03:40:04 GMT',
  'content-type': 'application/json',
  'content-length': '164',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"02d5f22e4f6ee03a1566dd72cd591ddaae74df9b"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/data/feeds/0ed85d1bfbf9498cd71e0a622b960817/567f5d93830f78046b18da34')
  .reply(200, {"name":"server.example.com alert","data":{},"id":"567f5d93830f78046b18da34","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]}, { date: 'Sun, 27 Dec 2015 03:40:04 GMT',
  'content-type': 'application/json',
  'content-length': '164',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"02d5f22e4f6ee03a1566dd72cd591ddaae74df9b"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .post('/v1/data/feeds/0ed85d1bfbf9498cd71e0a622b960817/567f5d93830f78046b18da34', {"name":"test update","data":{},"id":"567f5d93830f78046b18da34","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]})
  .reply(200, {"name":"test update","data":{},"id":"567f5d93830f78046b18da34","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]}, { date: 'Sun, 27 Dec 2015 03:40:04 GMT',
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
  .get('/v1/data/feeds/0ed85d1bfbf9498cd71e0a622b960817/567f5d93830f78046b18da34')
  .reply(200, {"name":"test update","data":{},"id":"567f5d93830f78046b18da34","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]}, { date: 'Sun, 27 Dec 2015 03:40:04 GMT',
  'content-type': 'application/json',
  'content-length': '151',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"cd38704a411d699cd5f732ded156bf0815050d5e"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .post('/v1/data/feeds/0ed85d1bfbf9498cd71e0a622b960817/567f5d93830f78046b18da34', {"name":"server.example.com alert","data":{},"id":"567f5d93830f78046b18da34","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]})
  .reply(200, {"name":"server.example.com alert","data":{},"id":"567f5d93830f78046b18da34","config":{"alarm_id":"a1AAAAA","entity_id":"enAAAAA"},"networks":[],"destinations":[]}, { date: 'Sun, 27 Dec 2015 03:40:04 GMT',
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
  .delete('/v1/data/feeds/0ed85d1bfbf9498cd71e0a622b960817/567f5d93830f78046b18da34')
  .reply(200, {}, { date: 'Sun, 27 Dec 2015 03:40:04 GMT',
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
  .delete('/v1/data/sources/0ed85d1bfbf9498cd71e0a622b960817')
  .reply(200, {}, { date: 'Sun, 27 Dec 2015 03:40:04 GMT',
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
