var nock = require('nock')

nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .put('/v1/zones/testdomain.test', {"zone":"testdomain.test","ttl":3600,"nx_ttl":60})
  .reply(200, {"nx_ttl":60,"retry":7200,"zone":"testdomain.test","network_pools":["vagrant"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"ttl":60,"tier":1,"type":"NS","id":"568afc22830f780493f5f04b"}],"meta":{},"link":null,"ttl":3600,"id":"568afc22830f780493f5f048","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"vagrant"}, { date: 'Mon, 04 Jan 2016 23:11:30 GMT',
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
  .get('/v1/stats/qps/')
  .reply(200, {"qps":0}, { date: 'Mon, 04 Jan 2016 23:11:31 GMT',
  'content-type': 'application/json',
  'content-length': '12',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"13289691c72f42f08b17ba4046cd7902f9a41b02"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/stats/qps/testdomain.test')
  .reply(200, {"qps":0}, { date: 'Mon, 04 Jan 2016 23:11:31 GMT',
  'content-type': 'application/json',
  'content-length': '12',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"13289691c72f42f08b17ba4046cd7902f9a41b02"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/stats/usage/')
  .reply(200, [{"jobs":0,"graph":[],"period":"24h","zones":1,"records":1,"queries":0,"feeds":0}], { date: 'Mon, 04 Jan 2016 23:11:31 GMT',
  'content-type': 'application/json',
  'content-length': '91',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"b600882e3cd3ec550270daafd814e4b5d8409e3b"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/stats/usage/testdomain.test')
  .reply(200, [{"records":1,"graph":[],"period":"24h","zone":"testdomain.test","queries":0}], { date: 'Mon, 04 Jan 2016 23:11:31 GMT',
  'content-type': 'application/json',
  'content-length': '81',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"41d325db5f278720425e0259fc9db832f2978601"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .delete('/v1/zones/testdomain.test')
  .reply(200, {}, { date: 'Mon, 04 Jan 2016 23:11:31 GMT',
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
