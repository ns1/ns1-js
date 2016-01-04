var nock = require('nock')

nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .put('/v1/lists', {"name":"My Notification List","notify_list":[{"config":{"email":"email+notify@gmail.com"},"type":"email"}]})
  .reply(200, {"notify_list":[{"type":"email","config":{"email":"email+notify@gmail.com"}}],"name":"My Notification List","id":"568aa7a2830f780423016ecc"}, { date: 'Mon, 04 Jan 2016 17:10:58 GMT',
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
  .put('/v1/monitoring/jobs', {"notify_regional":false,"notify_failback":true,"notify_repeat":0,"notify_delay":1000000,"rules":[{"value":"200 OK","comparison":"contains","key":"output"},{"value":200,"comparison":"<=","key":"connect"}],"config":{"ssl":"1","send":"HEAD / HTTP/1.0\r\n\r\n","port":443,"host":"1.2.3.4"},"job_type":"tcp","name":"myotherhost.com:443 monitor","active":true,"rapid_recheck":true,"region_scope":"fixed","regions":["master"],"frequency":30000000,"policy":"quorum","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!","notify_list":"568aa7a2830f780423016ecc"})
  .reply(200, {"notify_list":"568aa7a2830f780423016ecc","notify_delay":1000000,"job_type":"tcp","frequency":30000000,"rapid_recheck":true,"region_scope":"fixed","id":"568aa7a2830f780493f5edc5","notify_repeat":0,"notify_regional":false,"regions":["master"],"policy":"quorum","config":{"ssl":"1","host":"1.2.3.4","port":443,"send":"HEAD / HTTP/1.0\r\n\r\n"},"status":{"global":{"status":"pending","since":1451927458}},"notify_failback":true,"rules":[{"comparison":"contains","key":"output","value":"200 OK"},{"comparison":"<=","key":"connect","value":200}],"active":true,"name":"myotherhost.com:443 monitor","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!"}, { date: 'Mon, 04 Jan 2016 17:10:58 GMT',
  'content-type': 'application/json',
  'content-length': '685',
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
  .get('/v1/monitoring/jobs/568aa7a2830f780493f5edc5')
  .reply(200, {"notify_list":"568aa7a2830f780423016ecc","notify_delay":1000000,"job_type":"tcp","frequency":30000000,"rapid_recheck":true,"region_scope":"fixed","id":"568aa7a2830f780493f5edc5","notify_repeat":0,"notify_regional":false,"regions":["master"],"policy":"quorum","config":{"ssl":"1","host":"1.2.3.4","port":443,"send":"HEAD / HTTP/1.0\r\n\r\n"},"status":{"global":{"status":"pending","since":1451927458}},"notify_failback":true,"rules":[{"comparison":"contains","value":"200 OK","key":"output"},{"comparison":"<=","value":200,"key":"connect"}],"active":true,"name":"myotherhost.com:443 monitor","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!"}, { date: 'Mon, 04 Jan 2016 17:10:58 GMT',
  'content-type': 'application/json',
  'content-length': '685',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"45fd19814d061476ba485490bf28a65532b32691"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/monitoring/jobs/568aa7a2830f780493f5edc5')
  .reply(200, {"notify_list":"568aa7a2830f780423016ecc","notify_delay":1000000,"job_type":"tcp","frequency":30000000,"rapid_recheck":true,"region_scope":"fixed","id":"568aa7a2830f780493f5edc5","notify_repeat":0,"notify_regional":false,"regions":["master"],"policy":"quorum","config":{"ssl":"1","host":"1.2.3.4","port":443,"send":"HEAD / HTTP/1.0\r\n\r\n"},"status":{"global":{"status":"pending","since":1451927458}},"notify_failback":true,"rules":[{"comparison":"contains","value":"200 OK","key":"output"},{"comparison":"<=","value":200,"key":"connect"}],"active":true,"name":"myotherhost.com:443 monitor","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!"}, { date: 'Mon, 04 Jan 2016 17:10:58 GMT',
  'content-type': 'application/json',
  'content-length': '685',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"45fd19814d061476ba485490bf28a65532b32691"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .post('/v1/monitoring/jobs/568aa7a2830f780493f5edc5', {"notify_list":"568aa7a2830f780423016ecc","notify_delay":1000000,"job_type":"tcp","frequency":30000000,"rapid_recheck":true,"region_scope":"fixed","id":"568aa7a2830f780493f5edc5","notify_repeat":0,"notify_regional":false,"regions":["master"],"policy":"quorum","config":{"ssl":"1","host":"1.2.3.4","port":443,"send":"HEAD / HTTP/1.0\r\n\r\n"},"status":{"global":{"status":"pending","since":1451927458}},"notify_failback":true,"rules":[{"comparison":"contains","value":"200 OK","key":"output"},{"comparison":"<=","value":200,"key":"connect"}],"active":true,"name":"test update","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!"})
  .reply(200, {"notify_list":"568aa7a2830f780423016ecc","notify_delay":1000000,"job_type":"tcp","frequency":30000000,"rapid_recheck":true,"region_scope":"fixed","id":"568aa7a2830f780493f5edc5","notify_repeat":0,"notify_regional":false,"regions":["master"],"policy":"quorum","config":{"ssl":"1","host":"1.2.3.4","port":443,"send":"HEAD / HTTP/1.0\r\n\r\n"},"status":{"global":{"status":"pending","since":1451927458}},"notify_failback":true,"rules":[{"comparison":"contains","key":"output","value":"200 OK"},{"comparison":"<=","key":"connect","value":200}],"active":true,"name":"test update","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!"}, { date: 'Mon, 04 Jan 2016 17:10:59 GMT',
  'content-type': 'application/json',
  'content-length': '669',
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
  .get('/v1/monitoring/jobs/568aa7a2830f780493f5edc5')
  .reply(200, {"notify_list":"568aa7a2830f780423016ecc","notify_delay":1000000,"job_type":"tcp","frequency":30000000,"rapid_recheck":true,"region_scope":"fixed","id":"568aa7a2830f780493f5edc5","notify_repeat":0,"notify_regional":false,"regions":["master"],"policy":"quorum","config":{"ssl":"1","host":"1.2.3.4","port":443,"send":"HEAD / HTTP/1.0\r\n\r\n"},"status":{"global":{"status":"pending","since":1451927458}},"notify_failback":true,"rules":[{"comparison":"contains","value":"200 OK","key":"output"},{"comparison":"<=","value":200,"key":"connect"}],"active":true,"name":"test update","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!"}, { date: 'Mon, 04 Jan 2016 17:10:59 GMT',
  'content-type': 'application/json',
  'content-length': '669',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"88b887b177eb59ef138367dcac6fcc7eda43e4b5"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/monitoring/jobs/568aa7a2830f780493f5edc5')
  .reply(200, {"notify_list":"568aa7a2830f780423016ecc","notify_delay":1000000,"job_type":"tcp","frequency":30000000,"rapid_recheck":true,"region_scope":"fixed","id":"568aa7a2830f780493f5edc5","notify_repeat":0,"notify_regional":false,"regions":["master"],"policy":"quorum","config":{"ssl":"1","host":"1.2.3.4","port":443,"send":"HEAD / HTTP/1.0\r\n\r\n"},"status":{"global":{"status":"pending","since":1451927458}},"notify_failback":true,"rules":[{"comparison":"contains","value":"200 OK","key":"output"},{"comparison":"<=","value":200,"key":"connect"}],"active":true,"name":"test update","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!"}, { date: 'Mon, 04 Jan 2016 17:10:59 GMT',
  'content-type': 'application/json',
  'content-length': '669',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"88b887b177eb59ef138367dcac6fcc7eda43e4b5"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .post('/v1/monitoring/jobs/568aa7a2830f780493f5edc5', {"notify_list":"568aa7a2830f780423016ecc","notify_delay":1000000,"job_type":"tcp","frequency":30000000,"rapid_recheck":true,"region_scope":"fixed","id":"568aa7a2830f780493f5edc5","notify_repeat":0,"notify_regional":false,"regions":["master"],"policy":"quorum","config":{"ssl":"1","host":"1.2.3.4","port":443,"send":"HEAD / HTTP/1.0\r\n\r\n"},"status":{"global":{"status":"pending","since":1451927458}},"notify_failback":true,"rules":[{"comparison":"contains","value":"200 OK","key":"output"},{"comparison":"<=","value":200,"key":"connect"}],"active":true,"name":"myotherhost.com:443 monitor","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!"})
  .reply(200, {"notify_list":"568aa7a2830f780423016ecc","notify_delay":1000000,"job_type":"tcp","frequency":30000000,"rapid_recheck":true,"region_scope":"fixed","id":"568aa7a2830f780493f5edc5","notify_repeat":0,"notify_regional":false,"regions":["master"],"policy":"quorum","config":{"ssl":"1","host":"1.2.3.4","port":443,"send":"HEAD / HTTP/1.0\r\n\r\n"},"status":{"global":{"status":"pending","since":1451927458}},"notify_failback":true,"rules":[{"comparison":"contains","key":"output","value":"200 OK"},{"comparison":"<=","key":"connect","value":200}],"active":true,"name":"myotherhost.com:443 monitor","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!"}, { date: 'Mon, 04 Jan 2016 17:10:59 GMT',
  'content-type': 'application/json',
  'content-length': '685',
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
  .put('/v1/monitoring/jobs', {"notify_regional":false,"notify_failback":true,"notify_repeat":0,"notify_delay":1000000,"rules":[{"value":"200 OK","comparison":"contains","key":"output"},{"value":200,"comparison":"<=","key":"connect"}],"config":{"ssl":"1","send":"HEAD / HTTP/1.0\r\n\r\n","port":443,"host":"1.2.3.4"},"job_type":"tcp","name":"myotherhost.com:443 monitor","active":true,"rapid_recheck":true,"region_scope":"fixed","regions":["master"],"frequency":30000000,"policy":"quorum","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!","notify_list":"568aa7a2830f780423016ecc"})
  .reply(200, {"notify_list":"568aa7a2830f780423016ecc","notify_delay":1000000,"job_type":"tcp","frequency":30000000,"rapid_recheck":true,"region_scope":"fixed","id":"568aa7a4830f780423016ecf","notify_repeat":0,"notify_regional":false,"regions":["master"],"policy":"quorum","config":{"ssl":"1","host":"1.2.3.4","port":443,"send":"HEAD / HTTP/1.0\r\n\r\n"},"status":{"global":{"status":"pending","since":1451927459}},"notify_failback":true,"rules":[{"comparison":"contains","key":"output","value":"200 OK"},{"comparison":"<=","key":"connect","value":200}],"active":true,"name":"myotherhost.com:443 monitor","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!"}, { date: 'Mon, 04 Jan 2016 17:11:00 GMT',
  'content-type': 'application/json',
  'content-length': '685',
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
  .delete('/v1/monitoring/jobs/568aa7a4830f780423016ecf')
  .reply(200, {}, { date: 'Mon, 04 Jan 2016 17:11:00 GMT',
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
  .delete('/v1/monitoring/jobs/568aa7a2830f780493f5edc5')
  .reply(200, {}, { date: 'Mon, 04 Jan 2016 17:11:00 GMT',
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
  .delete('/v1/lists/568aa7a2830f780423016ecc')
  .reply(200, {}, { date: 'Mon, 04 Jan 2016 17:11:00 GMT',
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
