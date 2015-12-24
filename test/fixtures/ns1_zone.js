var nock = require('nock')

nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .put('/v1/zones/testdomain.test', {"zone":"testdomain.test","ttl":3600,"nx_ttl":60})
  .reply(200, {"nx_ttl":60,"retry":7200,"zone":"testdomain.test","network_pools":["p02"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.p02.nsone.net","dns2.p02.nsone.net","dns3.p02.nsone.net","dns4.p02.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.p02.nsone.net","dns2.p02.nsone.net","dns3.p02.nsone.net","dns4.p02.nsone.net"],"ttl":60,"tier":1,"type":"NS","id":"567b89f49f782d225195bc1f"}],"meta":{},"link":null,"ttl":3600,"id":"567b89f49f782d225195bc1a","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p02"}, { date: 'Thu, 24 Dec 2015 06:00:20 GMT',
  'content-type': 'application/json',
  'content-length': '588',
  connection: 'close',
  'x-ratelimit-remaining': '95',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '100',
  'x-ratelimit-period': '200',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/zones')
  .reply(200, [{"nx_ttl":60,"retry":7200,"zone":"testdomain.test","network_pools":["p02"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.p02.nsone.net","dns2.p02.nsone.net","dns3.p02.nsone.net","dns4.p02.nsone.net"],"meta":{},"link":null,"ttl":3600,"id":"567b89f49f782d225195bc1a","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p02"}], { date: 'Thu, 24 Dec 2015 06:00:20 GMT',
  'content-type': 'application/json',
  'content-length': '385',
  connection: 'close',
  'x-ratelimit-remaining': '889',
  etag: '"bb0bfd451eaaf2f0ca7f71dec7bfa2cbb40665e6"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/zones/testdomain.test')
  .reply(200, {"nx_ttl":60,"retry":7200,"zone":"testdomain.test","network_pools":["p02"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.p02.nsone.net","dns2.p02.nsone.net","dns3.p02.nsone.net","dns4.p02.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.p02.nsone.net","dns2.p02.nsone.net","dns3.p02.nsone.net","dns4.p02.nsone.net"],"ttl":60,"tier":1,"type":"NS","id":"567b89f49f782d225195bc1f"}],"meta":{},"link":null,"ttl":3600,"id":"567b89f49f782d225195bc1a","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p02"}, { date: 'Thu, 24 Dec 2015 06:00:20 GMT',
  'content-type': 'application/json',
  'content-length': '588',
  connection: 'close',
  'x-ratelimit-remaining': '888',
  etag: '"7341577168007c78d9878dd62803f2913e068569"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/zones/testdomain.test')
  .reply(200, {"nx_ttl":60,"retry":7200,"zone":"testdomain.test","network_pools":["p02"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.p02.nsone.net","dns2.p02.nsone.net","dns3.p02.nsone.net","dns4.p02.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.p02.nsone.net","dns2.p02.nsone.net","dns3.p02.nsone.net","dns4.p02.nsone.net"],"ttl":60,"tier":1,"type":"NS","id":"567b89f49f782d225195bc1f"}],"meta":{},"link":null,"ttl":3600,"id":"567b89f49f782d225195bc1a","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p02"}, { date: 'Thu, 24 Dec 2015 06:00:20 GMT',
  'content-type': 'application/json',
  'content-length': '588',
  connection: 'close',
  'x-ratelimit-remaining': '887',
  etag: '"7341577168007c78d9878dd62803f2913e068569"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .post('/v1/zones/testdomain.test', {"nx_ttl":60,"retry":7200,"zone":"testdomain.test","network_pools":["p02"],"primary":{"enabled":false,"secondaries":[]},"refresh":665,"expiry":1209600,"dns_servers":["dns1.p02.nsone.net","dns2.p02.nsone.net","dns3.p02.nsone.net","dns4.p02.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.p02.nsone.net","dns2.p02.nsone.net","dns3.p02.nsone.net","dns4.p02.nsone.net"],"ttl":60,"tier":1,"type":"NS","id":"567b89f49f782d225195bc1f"}],"meta":{},"link":null,"ttl":3600,"id":"567b89f49f782d225195bc1a","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p02"})
  .reply(200, {"nx_ttl":60,"retry":7200,"zone":"testdomain.test","network_pools":["p02"],"primary":{"enabled":false,"secondaries":[]},"refresh":665,"expiry":1209600,"dns_servers":["dns1.p02.nsone.net","dns2.p02.nsone.net","dns3.p02.nsone.net","dns4.p02.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.p02.nsone.net","dns2.p02.nsone.net","dns3.p02.nsone.net","dns4.p02.nsone.net"],"ttl":60,"tier":1,"type":"NS","id":"567b89f49f782d225195bc1f"}],"meta":{},"link":null,"ttl":3600,"id":"567b89f49f782d225195bc1a","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p02"}, { date: 'Thu, 24 Dec 2015 06:00:20 GMT',
  'content-type': 'application/json',
  'content-length': '586',
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
  .reply(200, {"nx_ttl":60,"retry":7200,"zone":"testdomain.test","network_pools":["p02"],"primary":{"enabled":false,"secondaries":[]},"refresh":665,"expiry":1209600,"dns_servers":["dns1.p02.nsone.net","dns2.p02.nsone.net","dns3.p02.nsone.net","dns4.p02.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.p02.nsone.net","dns2.p02.nsone.net","dns3.p02.nsone.net","dns4.p02.nsone.net"],"ttl":60,"tier":1,"type":"NS","id":"567b89f49f782d225195bc1f"}],"meta":{},"link":null,"ttl":3600,"id":"567b89f49f782d225195bc1a","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p02"}, { date: 'Thu, 24 Dec 2015 06:00:20 GMT',
  'content-type': 'application/json',
  'content-length': '586',
  connection: 'close',
  'x-ratelimit-remaining': '887',
  etag: '"3674d994c2cc02513947c75c94d43f00400bef41"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/zones/testdomain.test')
  .reply(200, {"nx_ttl":60,"retry":7200,"zone":"testdomain.test","network_pools":["p02"],"primary":{"enabled":false,"secondaries":[]},"refresh":665,"expiry":1209600,"dns_servers":["dns1.p02.nsone.net","dns2.p02.nsone.net","dns3.p02.nsone.net","dns4.p02.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.p02.nsone.net","dns2.p02.nsone.net","dns3.p02.nsone.net","dns4.p02.nsone.net"],"ttl":60,"tier":1,"type":"NS","id":"567b89f49f782d225195bc1f"}],"meta":{},"link":null,"ttl":3600,"id":"567b89f49f782d225195bc1a","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p02"}, { date: 'Thu, 24 Dec 2015 06:00:20 GMT',
  'content-type': 'application/json',
  'content-length': '586',
  connection: 'close',
  'x-ratelimit-remaining': '886',
  etag: '"3674d994c2cc02513947c75c94d43f00400bef41"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .post('/v1/zones/testdomain.test', {"nx_ttl":60,"retry":7200,"zone":"testdomain.test","network_pools":["p02"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.p02.nsone.net","dns2.p02.nsone.net","dns3.p02.nsone.net","dns4.p02.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.p02.nsone.net","dns2.p02.nsone.net","dns3.p02.nsone.net","dns4.p02.nsone.net"],"ttl":60,"tier":1,"type":"NS","id":"567b89f49f782d225195bc1f"}],"meta":{},"link":null,"ttl":3600,"id":"567b89f49f782d225195bc1a","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p02"})
  .reply(200, {"nx_ttl":60,"retry":7200,"zone":"testdomain.test","network_pools":["p02"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.p02.nsone.net","dns2.p02.nsone.net","dns3.p02.nsone.net","dns4.p02.nsone.net"],"records":[{"domain":"testdomain.test","short_answers":["dns1.p02.nsone.net","dns2.p02.nsone.net","dns3.p02.nsone.net","dns4.p02.nsone.net"],"ttl":60,"tier":1,"type":"NS","id":"567b89f49f782d225195bc1f"}],"meta":{},"link":null,"ttl":3600,"id":"567b89f49f782d225195bc1a","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p02"}, { date: 'Thu, 24 Dec 2015 06:00:21 GMT',
  'content-type': 'application/json',
  'content-length': '588',
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
  .reply(200, {"nx_ttl":3600,"retry":7200,"zone":"newtestdomain.test","network_pools":["p03"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"records":[{"domain":"newtestdomain.test","short_answers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"ttl":3600,"tier":1,"type":"NS","id":"567b89f59f782d225195bc29"}],"meta":{},"link":null,"ttl":3600,"id":"567b89f59f782d225195bc24","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p03"}, { date: 'Thu, 24 Dec 2015 06:00:21 GMT',
  'content-type': 'application/json',
  'content-length': '598',
  connection: 'close',
  'x-ratelimit-remaining': '94',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '100',
  'x-ratelimit-period': '200',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/zones')
  .reply(200, [{"nx_ttl":3600,"retry":7200,"zone":"newtestdomain.test","network_pools":["p03"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.p03.nsone.net","dns2.p03.nsone.net","dns3.p03.nsone.net","dns4.p03.nsone.net"],"meta":{},"link":null,"ttl":3600,"id":"567b89f59f782d225195bc24","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p03"},{"nx_ttl":60,"retry":7200,"zone":"testdomain.test","network_pools":["p02"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.p02.nsone.net","dns2.p02.nsone.net","dns3.p02.nsone.net","dns4.p02.nsone.net"],"meta":{},"link":null,"ttl":3600,"id":"567b89f49f782d225195bc1a","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p02"}], { date: 'Thu, 24 Dec 2015 06:00:21 GMT',
  'content-type': 'application/json',
  'content-length': '773',
  connection: 'close',
  'x-ratelimit-remaining': '886',
  etag: '"b5942d1a80102cefec2bf8b1a4a9c7f02046804d"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .delete('/v1/zones/newtestdomain.test')
  .reply(200, {}, { date: 'Thu, 24 Dec 2015 06:00:21 GMT',
  'content-type': 'application/json',
  'content-length': '3',
  connection: 'close',
  'x-ratelimit-remaining': '95',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '100',
  'x-ratelimit-period': '200',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/zones')
  .reply(200, [{"nx_ttl":60,"retry":7200,"zone":"testdomain.test","network_pools":["p02"],"primary":{"enabled":false,"secondaries":[]},"refresh":43200,"expiry":1209600,"dns_servers":["dns1.p02.nsone.net","dns2.p02.nsone.net","dns3.p02.nsone.net","dns4.p02.nsone.net"],"meta":{},"link":null,"ttl":3600,"id":"567b89f49f782d225195bc1a","hostmaster":"hostmaster@nsone.net","networks":[0],"pool":"p02"}], { date: 'Thu, 24 Dec 2015 06:00:21 GMT',
  'content-type': 'application/json',
  'content-length': '385',
  connection: 'close',
  'x-ratelimit-remaining': '885',
  etag: '"bb0bfd451eaaf2f0ca7f71dec7bfa2cbb40665e6"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/networks')
  .reply(200, [{"network_id":0,"name":"NSONE Global Network","label":"NSONE"}], { date: 'Thu, 24 Dec 2015 06:00:21 GMT',
  'content-type': 'application/json',
  'content-length': '65',
  connection: 'close',
  'x-ratelimit-remaining': '885',
  etag: '"ba71690ec11dce1edac80c321efa40239d254ac6"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .delete('/v1/zones/testdomain.test')
  .reply(200, {}, { date: 'Thu, 24 Dec 2015 06:00:21 GMT',
  'content-type': 'application/json',
  'content-length': '3',
  connection: 'close',
  'x-ratelimit-remaining': '94',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '100',
  'x-ratelimit-period': '200',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });
