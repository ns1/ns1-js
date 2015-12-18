var nock = require('nock')

nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/search')
  .query({"q":"testdomain.test"})
  .reply(200, [{"zone":"testdomain.test"},{"domain":"testdomain.test","type":"NS","zone":"testdomain.test"}], { date: 'Fri, 18 Dec 2015 18:08:53 GMT',
  'content-type': 'application/json',
  'content-length': '95',
  connection: 'close',
  'x-ratelimit-remaining': '899',
  etag: '"5c81171c5076801c07dc158b0d6ba6756e547cea"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/search')
  .query({"q":"testdomain.test","type":"record"})
  .reply(200, [{"domain":"testdomain.test","type":"NS","zone":"testdomain.test"}], { date: 'Fri, 18 Dec 2015 18:08:53 GMT',
  'content-type': 'application/json',
  'content-length': '68',
  connection: 'close',
  'x-ratelimit-remaining': '898',
  etag: '"ad4154dd0f63cda0dcf47143e4757f7a63d42bab"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/search')
  .query({"q":"testdomain.test","type":"zone"})
  .reply(200, [{"zone":"testdomain.test"}], { date: 'Fri, 18 Dec 2015 18:08:53 GMT',
  'content-type': 'application/json',
  'content-length': '29',
  connection: 'close',
  'x-ratelimit-remaining': '897',
  etag: '"a221d7eada2cfe16b8a2545e86e00e2f9e0949b7"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/search')
  .query({"q":"testdomain.test","max":"1"})
  .reply(200, [{"zone":"testdomain.test"}], { date: 'Fri, 18 Dec 2015 18:08:53 GMT',
  'content-type': 'application/json',
  'content-length': '29',
  connection: 'close',
  'x-ratelimit-remaining': '896',
  etag: '"a221d7eada2cfe16b8a2545e86e00e2f9e0949b7"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });
