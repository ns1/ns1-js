var nock = require('nock')

nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/zones')
  .reply(200, [{"nx_ttl":3600,"retry":7200,"zone":"testdomain.test","network_pools":["p03"],"primary":{"enabled":true,"secondaries":[{"ip":"1.1.1.1","port":53,"notify":false}]},"refresh":665,"expiry":1209600,"dns_servers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"meta":{},"link":null,"ttl":3600,"id":"566f3f069f782d2e420a0541","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p03"}], { date: 'Fri, 18 Dec 2015 00:16:56 GMT',
  'content-type': 'application/json',
  'content-length': '425',
  connection: 'close',
  'x-ratelimit-remaining': '895',
  etag: '"fda14fbf7da39e9fe4269c92424370ebbc2cd078"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/zones/testdomain.test')
  .reply(200, {"nx_ttl":3600,"retry":7200,"zone":"testdomain.test","network_pools":["p03"],"primary":{"enabled":true,"secondaries":[{"ip":"1.1.1.1","port":53,"notify":false}]},"refresh":665,"expiry":1209600,"dns_servers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"link":null,"ttl":3600,"tier":1,"type":"NS","id":"566f3f069f782d2e420a0546"}],"meta":{},"link":null,"ttl":3600,"id":"566f3f069f782d2e420a0541","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p03"}, { date: 'Fri, 18 Dec 2015 00:16:56 GMT',
  'content-type': 'application/json',
  'content-length': '642',
  connection: 'close',
  'x-ratelimit-remaining': '894',
  etag: '"a995456eb747b780e66ac4495c1a8134d633471c"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/zones/testdomain.test')
  .reply(200, {"nx_ttl":3600,"retry":7200,"zone":"testdomain.test","network_pools":["p03"],"primary":{"enabled":true,"secondaries":[{"ip":"1.1.1.1","port":53,"notify":false}]},"refresh":665,"expiry":1209600,"dns_servers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"link":null,"ttl":3600,"tier":1,"type":"NS","id":"566f3f069f782d2e420a0546"}],"meta":{},"link":null,"ttl":3600,"id":"566f3f069f782d2e420a0541","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p03"}, { date: 'Fri, 18 Dec 2015 00:16:56 GMT',
  'content-type': 'application/json',
  'content-length': '642',
  connection: 'close',
  'x-ratelimit-remaining': '893',
  etag: '"a995456eb747b780e66ac4495c1a8134d633471c"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .post('/v1/zones/testdomain.test', {"nx_ttl":3600,"retry":7200,"zone":"testdomain.test","network_pools":["p03"],"primary":{"enabled":true,"secondaries":[{"ip":"1.1.1.1","port":53,"notify":false}]},"refresh":665,"expiry":1209600,"dns_servers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"link":null,"ttl":3600,"tier":1,"type":"NS","id":"566f3f069f782d2e420a0546"}],"meta":{},"link":null,"ttl":3600,"id":"566f3f069f782d2e420a0541","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p03"})
  .reply(200, {"nx_ttl":3600,"retry":7200,"zone":"testdomain.test","network_pools":["p03"],"primary":{"enabled":true,"secondaries":[{"ip":"1.1.1.1","port":53,"notify":false}]},"refresh":665,"expiry":1209600,"dns_servers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"link":null,"ttl":3600,"tier":1,"type":"NS","id":"566f3f069f782d2e420a0546"}],"meta":{},"link":null,"ttl":3600,"id":"566f3f069f782d2e420a0541","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p03"}, { date: 'Fri, 18 Dec 2015 00:16:56 GMT',
  'content-type': 'application/json',
  'content-length': '642',
  connection: 'close',
  'x-ratelimit-remaining': '297',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '300',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/zones/testdomain.test')
  .reply(200, {"nx_ttl":3600,"retry":7200,"zone":"testdomain.test","network_pools":["p03"],"primary":{"enabled":true,"secondaries":[{"ip":"1.1.1.1","port":53,"notify":false}]},"refresh":665,"expiry":1209600,"dns_servers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"link":null,"ttl":3600,"tier":1,"type":"NS","id":"566f3f069f782d2e420a0546"}],"meta":{},"link":null,"ttl":3600,"id":"566f3f069f782d2e420a0541","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p03"}, { date: 'Fri, 18 Dec 2015 00:16:57 GMT',
  'content-type': 'application/json',
  'content-length': '642',
  connection: 'close',
  'x-ratelimit-remaining': '892',
  etag: '"a995456eb747b780e66ac4495c1a8134d633471c"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/zones/testdomain.test')
  .reply(200, {"nx_ttl":3600,"retry":7200,"zone":"testdomain.test","network_pools":["p03"],"primary":{"enabled":true,"secondaries":[{"ip":"1.1.1.1","port":53,"notify":false}]},"refresh":665,"expiry":1209600,"dns_servers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"link":null,"ttl":3600,"tier":1,"type":"NS","id":"566f3f069f782d2e420a0546"}],"meta":{},"link":null,"ttl":3600,"id":"566f3f069f782d2e420a0541","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p03"}, { date: 'Fri, 18 Dec 2015 00:16:57 GMT',
  'content-type': 'application/json',
  'content-length': '642',
  connection: 'close',
  'x-ratelimit-remaining': '891',
  etag: '"a995456eb747b780e66ac4495c1a8134d633471c"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .post('/v1/zones/testdomain.test', {"nx_ttl":3600,"retry":7200,"zone":"testdomain.test","network_pools":["p03"],"primary":{"enabled":true,"secondaries":[{"ip":"1.1.1.1","port":53,"notify":false}]},"refresh":665,"expiry":1209600,"dns_servers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"link":null,"ttl":3600,"tier":1,"type":"NS","id":"566f3f069f782d2e420a0546"}],"meta":{},"link":null,"ttl":3600,"id":"566f3f069f782d2e420a0541","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p03"})
  .reply(200, {"nx_ttl":3600,"retry":7200,"zone":"testdomain.test","network_pools":["p03"],"primary":{"enabled":true,"secondaries":[{"ip":"1.1.1.1","port":53,"notify":false}]},"refresh":665,"expiry":1209600,"dns_servers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"link":null,"ttl":3600,"tier":1,"type":"NS","id":"566f3f069f782d2e420a0546"}],"meta":{},"link":null,"ttl":3600,"id":"566f3f069f782d2e420a0541","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p03"}, { date: 'Fri, 18 Dec 2015 00:16:57 GMT',
  'content-type': 'application/json',
  'content-length': '642',
  connection: 'close',
  'x-ratelimit-remaining': '296',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '300',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .put('/v1/zones/newtestdomain.test', {"zone":"newtestdomain.test"})
  .reply(200, {"nx_ttl":3600,"retry":7200,"zone":"newtestdomain.test","network_pools":["p04"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.p04.nsone.net","dns2.p04.nsone.net","dns3.p04.nsone.net","dns4.p04.nsone.net"],"records":[{"domain":"newtestdomain.test","short_answers":["dns1.p04.nsone.net","dns2.p04.nsone.net","dns3.p04.nsone.net","dns4.p04.nsone.net"],"ttl":3600,"tier":1,"type":"NS","id":"567350799f782d109d702dd1"}],"meta":{},"link":null,"ttl":3600,"id":"567350799f782d109d702dcc","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p04"}, { date: 'Fri, 18 Dec 2015 00:16:57 GMT',
  'content-type': 'application/json',
  'content-length': '598',
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
  .get('/v1/zones')
  .reply(200, [{"nx_ttl":3600,"retry":7200,"zone":"newtestdomain.test","network_pools":["p04"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.p04.nsone.net","dns2.p04.nsone.net","dns3.p04.nsone.net","dns4.p04.nsone.net"],"meta":{},"link":null,"ttl":3600,"id":"567350799f782d109d702dcc","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p04"},{"nx_ttl":3600,"retry":7200,"zone":"testdomain.test","network_pools":["p03"],"primary":{"enabled":true,"secondaries":[{"ip":"1.1.1.1","port":53,"notify":false}]},"refresh":665,"expiry":1209600,"dns_servers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"meta":{},"link":null,"ttl":3600,"id":"566f3f069f782d2e420a0541","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p03"}], { date: 'Fri, 18 Dec 2015 00:16:57 GMT',
  'content-type': 'application/json',
  'content-length': '813',
  connection: 'close',
  'x-ratelimit-remaining': '891',
  etag: '"6fee29e870a773c01768a30653a282f84aa950bb"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .delete('/v1/zones/newtestdomain.test')
  .reply(200, {}, { date: 'Fri, 18 Dec 2015 00:16:57 GMT',
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


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/zones')
  .reply(200, [{"nx_ttl":3600,"retry":7200,"zone":"testdomain.test","network_pools":["p03"],"primary":{"enabled":true,"secondaries":[{"ip":"1.1.1.1","port":53,"notify":false}]},"refresh":665,"expiry":1209600,"dns_servers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"meta":{},"link":null,"ttl":3600,"id":"566f3f069f782d2e420a0541","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p03"}], { date: 'Fri, 18 Dec 2015 00:16:57 GMT',
  'content-type': 'application/json',
  'content-length': '425',
  connection: 'close',
  'x-ratelimit-remaining': '890',
  etag: '"fda14fbf7da39e9fe4269c92424370ebbc2cd078"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });
