var nock = require('nock')

nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .put('/v1/lists', {"name":"My Notification List","notify_list":[{"config":{"email":"email+notify@gmail.com"},"type":"email"}]})
  .reply(200, {"notify_list":[{"type":"email","config":{"email":"email+notify@gmail.com"}}],"name":"My Notification List","id":"56857bcf830f78046b18e1af"}, { date: 'Thu, 31 Dec 2015 19:02:39 GMT',
  'content-type': 'application/json',
  'content-length': '141',
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
  .get('/v1/lists/56857bcf830f78046b18e1af')
  .reply(200, {"notify_list":[{"config":{"email":"email+notify@gmail.com"},"type":"email"}],"name":"My Notification List","id":"56857bcf830f78046b18e1af"}, { date: 'Thu, 31 Dec 2015 19:02:39 GMT',
  'content-type': 'application/json',
  'content-length': '141',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"17455e49f2af7e92b5cedf18c9f61b229b5f18b5"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/lists/56857bcf830f78046b18e1af')
  .reply(200, {"notify_list":[{"config":{"email":"email+notify@gmail.com"},"type":"email"}],"name":"My Notification List","id":"56857bcf830f78046b18e1af"}, { date: 'Thu, 31 Dec 2015 19:02:40 GMT',
  'content-type': 'application/json',
  'content-length': '141',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"17455e49f2af7e92b5cedf18c9f61b229b5f18b5"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .post('/v1/lists/56857bcf830f78046b18e1af', {"notify_list":[{"config":{"email":"email+notify@gmail.com"},"type":"email"}],"name":"test update","id":"56857bcf830f78046b18e1af"})
  .reply(200, {"notify_list":[{"type":"email","config":{"email":"email+notify@gmail.com"}}],"name":"test update","id":"56857bcf830f78046b18e1af"}, { date: 'Thu, 31 Dec 2015 19:02:40 GMT',
  'content-type': 'application/json',
  'content-length': '132',
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
  .get('/v1/lists/56857bcf830f78046b18e1af')
  .reply(200, {"notify_list":[{"config":{"email":"email+notify@gmail.com"},"type":"email"}],"name":"test update","id":"56857bcf830f78046b18e1af"}, { date: 'Thu, 31 Dec 2015 19:02:40 GMT',
  'content-type': 'application/json',
  'content-length': '132',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"06449fd2ac2db30300eb839ad43cf9da07e6a91e"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/lists/56857bcf830f78046b18e1af')
  .reply(200, {"notify_list":[{"config":{"email":"email+notify@gmail.com"},"type":"email"}],"name":"test update","id":"56857bcf830f78046b18e1af"}, { date: 'Thu, 31 Dec 2015 19:02:40 GMT',
  'content-type': 'application/json',
  'content-length': '132',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"06449fd2ac2db30300eb839ad43cf9da07e6a91e"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .post('/v1/lists/56857bcf830f78046b18e1af', {"notify_list":[{"config":{"email":"email+notify@gmail.com"},"type":"email"}],"name":"My Notification List","id":"56857bcf830f78046b18e1af"})
  .reply(200, {"notify_list":[{"type":"email","config":{"email":"email+notify@gmail.com"}}],"name":"My Notification List","id":"56857bcf830f78046b18e1af"}, { date: 'Thu, 31 Dec 2015 19:02:40 GMT',
  'content-type': 'application/json',
  'content-length': '141',
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
  .put('/v1/lists', {"name":"My Other Notification List","notify_list":[{"config":{"email":"email+notify@gmail.com"},"type":"email"}]})
  .reply(200, {"notify_list":[{"type":"email","config":{"email":"email+notify@gmail.com"}}],"name":"My Other Notification List","id":"56857bd0830f78042a475b19"}, { date: 'Thu, 31 Dec 2015 19:02:40 GMT',
  'content-type': 'application/json',
  'content-length': '147',
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
  .delete('/v1/lists/56857bd0830f78042a475b19')
  .reply(200, {}, { date: 'Thu, 31 Dec 2015 19:02:40 GMT',
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
  .get('/v1/notifytypes')
  .reply(200, {"pagerduty":{"shortdesc":"PagerDuty","config":{"service_key":{"shortdesc":"PagerDuty integration key","desc":"GUID (service key) of a PagerDuty Generic API service","required":true,"type":"string","validator":"text"}},"desc":"Send notifications to PagerDuty API"},"slack":{"shortdesc":"Slack","config":{"username":{"shortdesc":"Slack user","desc":"Slack user","required":false,"type":"string","validator":"text"},"url":{"shortdesc":"URL","desc":"Slack incoming webhook URL","required":true,"type":"string","validator":"url"},"channel":{"shortdesc":"Slack channel","desc":"Slack channel name","required":false,"type":"string","validator":"text"}},"desc":"Send notifications to Slack api"},"webhook":{"shortdesc":"Webhook","config":{"url":{"shortdesc":"Webhook URL","desc":"URL to which notification details will be sent, with a POST request","required":true,"type":"string","validator":"url"}},"desc":"Send HTTP(s) POST notification to a URL."},"datafeed":{"shortdesc":"NSONE Data Feed","config":{"sourceid":{"shortdesc":"NSONE Data Source","desc":"NSONE Data Source to receive notifications","required":true,"type":"datasource","validator":"datasource"}},"desc":"Push notification to an NSONE Monitoring Data Source to\n    update all Data Feeds connected to the Source.  This notifier only\n    pushes \"up/down\" status to the Data Feeds.  Unless you have\n    configured a Feed to act on updates from specific monitoring\n    regions, only \"global\" status will be pushed to your Feeds."},"user":{"shortdesc":"User","config":{"user":{"shortdesc":"Username","desc":"User to notify","required":true,"type":"string","validator":"username"}},"desc":"Send notification to a user according to their notification preferences."},"email":{"shortdesc":"Email","config":{"email":{"shortdesc":"Email address","desc":"Email address to send notification","required":true,"type":"string","validator":"email"}},"desc":"Send notification to an email address."}}, { date: 'Thu, 31 Dec 2015 19:02:40 GMT',
  'content-type': 'application/json',
  'content-length': '1950',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"549c05679f35a52f3603d709e7e6e91448b311f2"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .delete('/v1/lists/56857bcf830f78046b18e1af')
  .reply(200, {}, { date: 'Thu, 31 Dec 2015 19:02:40 GMT',
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
