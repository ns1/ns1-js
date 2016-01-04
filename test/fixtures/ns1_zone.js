var nock = require('nock')

nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .put('/v1/zones/testdomain.test', {"zone":"testdomain.test","ttl":3600,"nx_ttl":60})
  .reply(200, {"nx_ttl":60,"retry":7200,"zone":"testdomain.test","network_pools":["vagrant"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"ttl":60,"tier":1,"type":"NS","id":"568af384830f7804230170db"}],"meta":{},"link":null,"ttl":3600,"id":"568af384830f7804230170d8","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"vagrant"}, { date: 'Mon, 04 Jan 2016 22:34:44 GMT',
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
  .get('/v1/zones/testdomain.test')
  .reply(200, {"nx_ttl":60,"retry":7200,"zone":"testdomain.test","network_pools":["vagrant"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"ttl":60,"tier":1,"type":"NS","id":"568af384830f7804230170db"}],"meta":{},"link":null,"ttl":3600,"id":"568af384830f7804230170d8","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"vagrant"}, { date: 'Mon, 04 Jan 2016 22:34:44 GMT',
  'content-type': 'application/json',
  'content-length': '528',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"3e11408935272185191b76771072ab1d19d01c69"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/stats/qps/testdomain.test')
  .reply(200, {"qps":0}, { date: 'Mon, 04 Jan 2016 22:34:44 GMT',
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
  .delete('/v1/zones/testdomain.test')
  .reply(200, {}, { date: 'Mon, 04 Jan 2016 22:34:45 GMT',
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
