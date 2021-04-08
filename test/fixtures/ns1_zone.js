var nock = require('nock')

nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .put('/v1/zones/testdomain.test', {"zone":"testdomain.test","ttl":3600,"nx_ttl":60})
  .reply(200, {"nx_ttl":60,"retry":7200,"zone":"testdomain.test","network_pools":["vagrant"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"ttl":60,"tier":1,"type":"NS","id":"568afc23830f780493f5f051"}],"meta":{},"link":null,"ttl":3600,"id":"568afc23830f780493f5f04e","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"vagrant"}, { date: 'Mon, 04 Jan 2016 23:11:31 GMT',
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
  .get('/v1/zones')
  .reply(200, [{"nx_ttl":60,"retry":7200,"zone":"testdomain.test","network_pools":["vagrant"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"meta":{},"link":null,"ttl":3600,"id":"568afc23830f780493f5f04e","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"vagrant"}], { date: 'Mon, 04 Jan 2016 23:11:31 GMT',
  'content-type': 'application/json',
  'content-length': '359',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"a12a47a0103482f55fadde4d0976b55928f8e97e"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/zones/testdomain.test')
  .reply(200, {"nx_ttl":60,"retry":7200,"zone":"testdomain.test","network_pools":["vagrant"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"ttl":60,"tier":1,"type":"NS","id":"568afc23830f780493f5f051"}],"meta":{},"link":null,"ttl":3600,"id":"568afc23830f780493f5f04e","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"vagrant"}, { date: 'Mon, 04 Jan 2016 23:11:31 GMT',
  'content-type': 'application/json',
  'content-length': '528',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"d95dcaa6b4c8b0195e2a4710818f97424cced952"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/zones/testdomain.test')
  .reply(200, {"nx_ttl":60,"retry":7200,"zone":"testdomain.test","network_pools":["vagrant"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"ttl":60,"tier":1,"type":"NS","id":"568afc23830f780493f5f051"}],"meta":{},"link":null,"ttl":3600,"id":"568afc23830f780493f5f04e","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"vagrant"}, { date: 'Mon, 04 Jan 2016 23:11:31 GMT',
  'content-type': 'application/json',
  'content-length': '528',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"d95dcaa6b4c8b0195e2a4710818f97424cced952"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .post('/v1/zones/testdomain.test', {"nx_ttl":60,"retry":7200,"zone":"testdomain.test","network_pools":["vagrant"],"primary":{"enabled":false,"secondaries":[]},"refresh":665,"expiry":1209600,"dns_servers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"ttl":60,"tier":1,"type":"NS","id":"568afc23830f780493f5f051"}],"meta":{},"link":null,"ttl":3600,"id":"568afc23830f780493f5f04e","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"vagrant"})
  .reply(200, {"nx_ttl":60,"retry":7200,"zone":"testdomain.test","network_pools":["vagrant"],"primary":{"enabled":false,"secondaries":[]},"refresh":665,"expiry":1209600,"dns_servers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"ttl":60,"tier":1,"type":"NS","id":"568afc23830f780493f5f051"}],"meta":{},"link":null,"ttl":3600,"id":"568afc23830f780493f5f04e","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"vagrant"}, { date: 'Mon, 04 Jan 2016 23:11:31 GMT',
  'content-type': 'application/json',
  'content-length': '526',
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
  .reply(200, {"nx_ttl":60,"retry":7200,"zone":"testdomain.test","network_pools":["vagrant"],"primary":{"enabled":false,"secondaries":[]},"refresh":665,"expiry":1209600,"dns_servers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"ttl":60,"tier":1,"type":"NS","id":"568afc23830f780493f5f051"}],"meta":{},"link":null,"ttl":3600,"id":"568afc23830f780493f5f04e","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"vagrant"}, { date: 'Mon, 04 Jan 2016 23:11:31 GMT',
  'content-type': 'application/json',
  'content-length': '526',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"31fd9d2409dc741c11eceed9e5161a89049c92cd"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/zones/testdomain.test')
  .reply(200, {"nx_ttl":60,"retry":7200,"zone":"testdomain.test","network_pools":["vagrant"],"primary":{"enabled":false,"secondaries":[]},"refresh":665,"expiry":1209600,"dns_servers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"ttl":60,"tier":1,"type":"NS","id":"568afc23830f780493f5f051"}],"meta":{},"link":null,"ttl":3600,"id":"568afc23830f780493f5f04e","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"vagrant"}, { date: 'Mon, 04 Jan 2016 23:11:31 GMT',
  'content-type': 'application/json',
  'content-length': '526',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"31fd9d2409dc741c11eceed9e5161a89049c92cd"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .post('/v1/zones/testdomain.test', {"nx_ttl":60,"retry":7200,"zone":"testdomain.test","network_pools":["vagrant"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"ttl":60,"tier":1,"type":"NS","id":"568afc23830f780493f5f051"}],"meta":{},"link":null,"ttl":3600,"id":"568afc23830f780493f5f04e","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"vagrant"})
  .reply(200, {"nx_ttl":60,"retry":7200,"zone":"testdomain.test","network_pools":["vagrant"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"ttl":60,"tier":1,"type":"NS","id":"568afc23830f780493f5f051"}],"meta":{},"link":null,"ttl":3600,"id":"568afc23830f780493f5f04e","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"vagrant"}, { date: 'Mon, 04 Jan 2016 23:11:31 GMT',
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
  .put('/v1/zones/newtestdomain.test', {"zone":"newtestdomain.test"})
  .reply(200, {"nx_ttl":3600,"retry":7200,"zone":"newtestdomain.test","network_pools":["vagrant"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"records":[{"domain":"newtestdomain.test","short_answers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"ttl":3600,"tier":1,"type":"NS","id":"568afc23830f780493f5f058"}],"meta":{},"link":null,"ttl":3600,"id":"568afc23830f780493f5f055","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"vagrant"}, { date: 'Mon, 04 Jan 2016 23:11:31 GMT',
  'content-type': 'application/json',
  'content-length': '538',
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
  .get('/v1/zones')
  .reply(200, [{"nx_ttl":3600,"retry":7200,"zone":"newtestdomain.test","network_pools":["vagrant"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"meta":{},"link":null,"ttl":3600,"id":"568afc23830f780493f5f055","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"vagrant"},{"nx_ttl":60,"retry":7200,"zone":"testdomain.test","network_pools":["vagrant"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"meta":{},"link":null,"ttl":3600,"id":"568afc23830f780493f5f04e","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"vagrant"}], { date: 'Mon, 04 Jan 2016 23:11:31 GMT',
  'content-type': 'application/json',
  'content-length': '721',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"58329c8b82e2f9598b27b839fa7d54c8616dc118"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .delete('/v1/zones/newtestdomain.test')
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


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/zones')
  .reply(200, [{"nx_ttl":60,"retry":7200,"zone":"testdomain.test","network_pools":["vagrant"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"meta":{},"link":null,"ttl":3600,"id":"568afc23830f780493f5f04e","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"vagrant"}], { date: 'Mon, 04 Jan 2016 23:11:31 GMT',
  'content-type': 'application/json',
  'content-length': '359',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"a12a47a0103482f55fadde4d0976b55928f8e97e"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/services?type=dns')
  .reply(200, [{"network_id":0,"name":"NSONE Global Network","label":"NSONE"}], { date: 'Mon, 04 Jan 2016 23:11:31 GMT',
  'content-type': 'application/json',
  'content-length': '65',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"ba71690ec11dce1edac80c321efa40239d254ac6"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/zones/testdomain.test')
  .reply(200, {"nx_ttl":60,"retry":7200,"zone":"testdomain.test","network_pools":["vagrant"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"ttl":60,"tier":1,"type":"NS","id":"568afc23830f780493f5f051"}],"meta":{},"link":null,"ttl":3600,"id":"568afc23830f780493f5f04e","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"vagrant"}, { date: 'Mon, 04 Jan 2016 23:11:31 GMT',
  'content-type': 'application/json',
  'content-length': '528',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"d95dcaa6b4c8b0195e2a4710818f97424cced952"',
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
  .get('/v1/zones/testdomain.test')
  .reply(200, {"nx_ttl":60,"retry":7200,"zone":"testdomain.test","network_pools":["vagrant"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.vagrant.nsone.net","dns2.vagrant.nsone.net"],"ttl":60,"tier":1,"type":"NS","id":"568afc23830f780493f5f051"}],"meta":{},"link":null,"ttl":3600,"id":"568afc23830f780493f5f04e","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"vagrant"}, { date: 'Mon, 04 Jan 2016 23:11:31 GMT',
  'content-type': 'application/json',
  'content-length': '528',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"d95dcaa6b4c8b0195e2a4710818f97424cced952"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/stats/qps/testdomain.test')
  .reply(200, {"qps":0}, { date: 'Mon, 04 Jan 2016 23:11:32 GMT',
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
  .reply(200, {}, { date: 'Mon, 04 Jan 2016 23:11:32 GMT',
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
