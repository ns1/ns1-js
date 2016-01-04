var nock = require('nock')

nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .put('/v1/zones/testdomain.test', {"zone":"testdomain.test","ttl":3600,"nx_ttl":60})
  .reply(200, {"nx_ttl":60,"retry":7200,"zone":"testdomain.test","network_pools":["vagrant"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"ttl":60,"tier":1,"type":"NS","id":"568afc22830f780493f5f045"}],"meta":{},"link":null,"ttl":3600,"id":"568afc22830f780493f5f042","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"vagrant"}, { date: 'Mon, 04 Jan 2016 23:11:30 GMT',
  'content-type': 'application/json',
  'content-length': '528',
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
  .get('/v1/search')
  .query({"q":"testdomain.test"})
  .reply(200, [{"zone":"testdomain.test"},{"domain":"testdomain.test","type":"NS","zone":"testdomain.test"}], { date: 'Mon, 04 Jan 2016 23:11:30 GMT',
  'content-type': 'application/json',
  'content-length': '95',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"5c81171c5076801c07dc158b0d6ba6756e547cea"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/search')
  .query({"q":"testdomain.test","type":"record"})
  .reply(200, [{"domain":"testdomain.test","type":"NS","zone":"testdomain.test"}], { date: 'Mon, 04 Jan 2016 23:11:30 GMT',
  'content-type': 'application/json',
  'content-length': '68',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"ad4154dd0f63cda0dcf47143e4757f7a63d42bab"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/search')
  .query({"q":"testdomain.test","type":"zone"})
  .reply(200, [{"zone":"testdomain.test"}], { date: 'Mon, 04 Jan 2016 23:11:30 GMT',
  'content-type': 'application/json',
  'content-length': '29',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"a221d7eada2cfe16b8a2545e86e00e2f9e0949b7"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/search')
  .query({"q":"testdomain.test","max":"1"})
  .reply(200, [{"zone":"testdomain.test"}], { date: 'Mon, 04 Jan 2016 23:11:30 GMT',
  'content-type': 'application/json',
  'content-length': '29',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"a221d7eada2cfe16b8a2545e86e00e2f9e0949b7"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .delete('/v1/zones/testdomain.test')
  .reply(200, {}, { date: 'Mon, 04 Jan 2016 23:11:30 GMT',
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
