var nock = require('nock')

nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/zones/testdomain.test/testdomain.test/NS')
  .reply(200, {"domain":"testdomain.test","zone":"testdomain.test","use_client_subnet":false,"answers":[{"answer":["dns1.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0542"},{"answer":["dns2.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0543"},{"answer":["dns3.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0544"},{"answer":["dns4.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0545"}],"id":"566f3f069f782d2e420a0546","regions":{},"meta":{},"link":null,"filters":[],"ttl":3600,"tier":1,"type":"NS","networks":[0]}, { date: 'Thu, 17 Dec 2015 19:49:10 GMT',
  'content-type': 'application/json',
  'content-length': '523',
  connection: 'close',
  'x-ratelimit-remaining': '899',
  etag: '"924e4b9982bcb73766132c9c5b2c7e1bb7c47bb8"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/zones/testdomain.test/testdomain.test/NS')
  .reply(200, {"domain":"testdomain.test","zone":"testdomain.test","use_client_subnet":false,"answers":[{"answer":["dns1.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0542"},{"answer":["dns2.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0543"},{"answer":["dns3.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0544"},{"answer":["dns4.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0545"}],"id":"566f3f069f782d2e420a0546","regions":{},"meta":{},"link":null,"filters":[],"ttl":3600,"tier":1,"type":"NS","networks":[0]}, { date: 'Thu, 17 Dec 2015 19:49:10 GMT',
  'content-type': 'application/json',
  'content-length': '523',
  connection: 'close',
  'x-ratelimit-remaining': '898',
  etag: '"924e4b9982bcb73766132c9c5b2c7e1bb7c47bb8"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .post('/v1/zones/testdomain.test/testdomain.test/NS', {"domain":"testdomain.test","zone":"testdomain.test","use_client_subnet":false,"answers":[{"answer":["dns1.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0542"},{"answer":["dns2.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0543"},{"answer":["dns3.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0544"},{"answer":["dns4.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0545"}],"id":"566f3f069f782d2e420a0546","regions":{},"meta":{},"link":null,"filters":[],"ttl":665,"tier":1,"type":"NS","networks":[0]})
  .reply(200, {"domain":"testdomain.test","use_client_subnet":false,"answers":[{"answer":["dns1.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0542"},{"answer":["dns2.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0543"},{"answer":["dns3.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0544"},{"answer":["dns4.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0545"}],"meta":{},"link":null,"filters":[],"ttl":665,"tier":1,"networks":[0],"zone":"testdomain.test","id":"566f3f069f782d2e420a0546","regions":{},"type":"NS"}, { date: 'Thu, 17 Dec 2015 19:49:10 GMT',
  'content-type': 'application/json',
  'content-length': '522',
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
  .get('/v1/zones/testdomain.test/testdomain.test/NS')
  .reply(200, {"domain":"testdomain.test","zone":"testdomain.test","use_client_subnet":false,"answers":[{"answer":["dns1.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0542"},{"answer":["dns2.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0543"},{"answer":["dns3.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0544"},{"answer":["dns4.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0545"}],"id":"566f3f069f782d2e420a0546","regions":{},"meta":{},"link":null,"filters":[],"ttl":665,"tier":1,"type":"NS","networks":[0]}, { date: 'Thu, 17 Dec 2015 19:49:10 GMT',
  'content-type': 'application/json',
  'content-length': '522',
  connection: 'close',
  'x-ratelimit-remaining': '897',
  etag: '"73fa34d9a89a1790e9a37d70d2973e81fd7780ae"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/zones/testdomain.test/testdomain.test/NS')
  .reply(200, {"domain":"testdomain.test","zone":"testdomain.test","use_client_subnet":false,"answers":[{"answer":["dns1.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0542"},{"answer":["dns2.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0543"},{"answer":["dns3.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0544"},{"answer":["dns4.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0545"}],"id":"566f3f069f782d2e420a0546","regions":{},"meta":{},"link":null,"filters":[],"ttl":665,"tier":1,"type":"NS","networks":[0]}, { date: 'Thu, 17 Dec 2015 19:49:10 GMT',
  'content-type': 'application/json',
  'content-length': '522',
  connection: 'close',
  'x-ratelimit-remaining': '896',
  etag: '"73fa34d9a89a1790e9a37d70d2973e81fd7780ae"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .post('/v1/zones/testdomain.test/testdomain.test/NS', {"domain":"testdomain.test","zone":"testdomain.test","use_client_subnet":false,"answers":[{"answer":["dns1.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0542"},{"answer":["dns2.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0543"},{"answer":["dns3.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0544"},{"answer":["dns4.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0545"}],"id":"566f3f069f782d2e420a0546","regions":{},"meta":{},"link":null,"filters":[],"ttl":3600,"tier":1,"type":"NS","networks":[0]})
  .reply(200, {"domain":"testdomain.test","use_client_subnet":false,"answers":[{"answer":["dns1.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0542"},{"answer":["dns2.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0543"},{"answer":["dns3.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0544"},{"answer":["dns4.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0545"}],"meta":{},"link":null,"filters":[],"ttl":3600,"tier":1,"networks":[0],"zone":"testdomain.test","id":"566f3f069f782d2e420a0546","regions":{},"type":"NS"}, { date: 'Thu, 17 Dec 2015 19:49:10 GMT',
  'content-type': 'application/json',
  'content-length': '523',
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
  .put('/v1/zones/testdomain.test/www.testdomain.test/A', {"zone":"testdomain.test","domain":"www.testdomain.test","type":"A","answers":[{"answer":["1.1.1.1"]}]})
  .reply(200, {"domain":"www.testdomain.test","zone":"testdomain.test","use_client_subnet":true,"answers":[{"answer":["1.1.1.1"],"id":"567311b62db15617c112f578"}],"id":"567311b62db15617c112f579","regions":{},"meta":{},"link":null,"filters":[],"ttl":3600,"tier":1,"type":"A","networks":[0]}, { date: 'Thu, 17 Dec 2015 19:49:10 GMT',
  'content-type': 'application/json',
  'content-length': '276',
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
  .delete('/v1/zones/testdomain.test/www.testdomain.test/A')
  .reply(200, {}, { date: 'Thu, 17 Dec 2015 19:49:10 GMT',
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
