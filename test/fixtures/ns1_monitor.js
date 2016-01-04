var nock = require('nock')

nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .put('/v1/lists', {"name":"My Notification List","notify_list":[{"config":{"email":"email+notify@gmail.com"},"type":"email"}]})
  .reply(200, {"notify_list":[{"type":"email","config":{"email":"email+notify@gmail.com"}}],"name":"My Notification List","id":"568aaa8a830f780423016f65"}, { date: 'Mon, 04 Jan 2016 17:23:22 GMT',
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
  .put('/v1/monitoring/jobs', {"notify_regional":false,"notify_failback":true,"notify_repeat":0,"notify_delay":1000000,"rules":[{"value":"200 OK","comparison":"contains","key":"output"},{"value":200,"comparison":"<=","key":"connect"}],"config":{"ssl":"1","send":"HEAD / HTTP/1.0\r\n\r\n","port":443,"host":"1.2.3.4"},"job_type":"tcp","name":"myotherhost.com:443 monitor","active":true,"rapid_recheck":true,"region_scope":"fixed","regions":["master"],"frequency":30000000,"policy":"quorum","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!","notify_list":"568aaa8a830f780423016f65"})
  .reply(200, {"notify_list":"568aaa8a830f780423016f65","notify_delay":1000000,"job_type":"tcp","frequency":30000000,"rapid_recheck":true,"region_scope":"fixed","id":"568aaa8a830f780493f5ee7f","notify_repeat":0,"notify_regional":false,"regions":["master"],"policy":"quorum","config":{"ssl":"1","host":"1.2.3.4","port":443,"send":"HEAD / HTTP/1.0\r\n\r\n"},"status":{"global":{"status":"pending","since":1451928202}},"notify_failback":true,"rules":[{"comparison":"contains","key":"output","value":"200 OK"},{"comparison":"<=","key":"connect","value":200}],"active":true,"name":"myotherhost.com:443 monitor","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!"}, { date: 'Mon, 04 Jan 2016 17:23:22 GMT',
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
  .get('/v1/monitoring/jobs/568aaa8a830f780493f5ee7f')
  .reply(200, {"notify_list":"568aaa8a830f780423016f65","notify_delay":1000000,"job_type":"tcp","frequency":30000000,"rapid_recheck":true,"region_scope":"fixed","id":"568aaa8a830f780493f5ee7f","notify_repeat":0,"notify_regional":false,"regions":["master"],"policy":"quorum","config":{"ssl":"1","host":"1.2.3.4","port":443,"send":"HEAD / HTTP/1.0\r\n\r\n"},"status":{"global":{"status":"pending","since":1451928202}},"notify_failback":true,"rules":[{"comparison":"contains","value":"200 OK","key":"output"},{"comparison":"<=","value":200,"key":"connect"}],"active":true,"name":"myotherhost.com:443 monitor","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!"}, { date: 'Mon, 04 Jan 2016 17:23:22 GMT',
  'content-type': 'application/json',
  'content-length': '685',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"5fd6fd3cbcdb065a6099b808affcec4ae09b68e3"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/monitoring/jobs/568aaa8a830f780493f5ee7f')
  .reply(200, {"notify_list":"568aaa8a830f780423016f65","notify_delay":1000000,"job_type":"tcp","frequency":30000000,"rapid_recheck":true,"region_scope":"fixed","id":"568aaa8a830f780493f5ee7f","notify_repeat":0,"notify_regional":false,"regions":["master"],"policy":"quorum","config":{"ssl":"1","host":"1.2.3.4","port":443,"send":"HEAD / HTTP/1.0\r\n\r\n"},"status":{"global":{"status":"pending","since":1451928202}},"notify_failback":true,"rules":[{"comparison":"contains","value":"200 OK","key":"output"},{"comparison":"<=","value":200,"key":"connect"}],"active":true,"name":"myotherhost.com:443 monitor","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!"}, { date: 'Mon, 04 Jan 2016 17:23:22 GMT',
  'content-type': 'application/json',
  'content-length': '685',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"5fd6fd3cbcdb065a6099b808affcec4ae09b68e3"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .post('/v1/monitoring/jobs/568aaa8a830f780493f5ee7f', {"notify_list":"568aaa8a830f780423016f65","notify_delay":1000000,"job_type":"tcp","frequency":30000000,"rapid_recheck":true,"region_scope":"fixed","id":"568aaa8a830f780493f5ee7f","notify_repeat":0,"notify_regional":false,"regions":["master"],"policy":"quorum","config":{"ssl":"1","host":"1.2.3.4","port":443,"send":"HEAD / HTTP/1.0\r\n\r\n"},"status":{"global":{"status":"pending","since":1451928202}},"notify_failback":true,"rules":[{"comparison":"contains","value":"200 OK","key":"output"},{"comparison":"<=","value":200,"key":"connect"}],"active":true,"name":"test update","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!"})
  .reply(200, {"notify_list":"568aaa8a830f780423016f65","notify_delay":1000000,"job_type":"tcp","frequency":30000000,"rapid_recheck":true,"region_scope":"fixed","id":"568aaa8a830f780493f5ee7f","notify_repeat":0,"notify_regional":false,"regions":["master"],"policy":"quorum","config":{"ssl":"1","host":"1.2.3.4","port":443,"send":"HEAD / HTTP/1.0\r\n\r\n"},"status":{"global":{"status":"pending","since":1451928202}},"notify_failback":true,"rules":[{"comparison":"contains","key":"output","value":"200 OK"},{"comparison":"<=","key":"connect","value":200}],"active":true,"name":"test update","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!"}, { date: 'Mon, 04 Jan 2016 17:23:23 GMT',
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
  .get('/v1/monitoring/jobs/568aaa8a830f780493f5ee7f')
  .reply(200, {"notify_list":"568aaa8a830f780423016f65","notify_delay":1000000,"job_type":"tcp","frequency":30000000,"rapid_recheck":true,"region_scope":"fixed","id":"568aaa8a830f780493f5ee7f","notify_repeat":0,"notify_regional":false,"regions":["master"],"policy":"quorum","config":{"ssl":"1","host":"1.2.3.4","port":443,"send":"HEAD / HTTP/1.0\r\n\r\n"},"status":{"global":{"status":"pending","since":1451928202}},"notify_failback":true,"rules":[{"comparison":"contains","value":"200 OK","key":"output"},{"comparison":"<=","value":200,"key":"connect"}],"active":true,"name":"test update","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!"}, { date: 'Mon, 04 Jan 2016 17:23:23 GMT',
  'content-type': 'application/json',
  'content-length': '669',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"fabcc425f72ce135ec3ccb479ce01818304539b1"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/monitoring/jobs/568aaa8a830f780493f5ee7f')
  .reply(200, {"notify_list":"568aaa8a830f780423016f65","notify_delay":1000000,"job_type":"tcp","frequency":30000000,"rapid_recheck":true,"region_scope":"fixed","id":"568aaa8a830f780493f5ee7f","notify_repeat":0,"notify_regional":false,"regions":["master"],"policy":"quorum","config":{"ssl":"1","host":"1.2.3.4","port":443,"send":"HEAD / HTTP/1.0\r\n\r\n"},"status":{"global":{"status":"pending","since":1451928202}},"notify_failback":true,"rules":[{"comparison":"contains","value":"200 OK","key":"output"},{"comparison":"<=","value":200,"key":"connect"}],"active":true,"name":"test update","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!"}, { date: 'Mon, 04 Jan 2016 17:23:23 GMT',
  'content-type': 'application/json',
  'content-length': '669',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"fabcc425f72ce135ec3ccb479ce01818304539b1"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .post('/v1/monitoring/jobs/568aaa8a830f780493f5ee7f', {"notify_list":"568aaa8a830f780423016f65","notify_delay":1000000,"job_type":"tcp","frequency":30000000,"rapid_recheck":true,"region_scope":"fixed","id":"568aaa8a830f780493f5ee7f","notify_repeat":0,"notify_regional":false,"regions":["master"],"policy":"quorum","config":{"ssl":"1","host":"1.2.3.4","port":443,"send":"HEAD / HTTP/1.0\r\n\r\n"},"status":{"global":{"status":"pending","since":1451928202}},"notify_failback":true,"rules":[{"comparison":"contains","value":"200 OK","key":"output"},{"comparison":"<=","value":200,"key":"connect"}],"active":true,"name":"myotherhost.com:443 monitor","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!"})
  .reply(200, {"notify_list":"568aaa8a830f780423016f65","notify_delay":1000000,"job_type":"tcp","frequency":30000000,"rapid_recheck":true,"region_scope":"fixed","id":"568aaa8a830f780493f5ee7f","notify_repeat":0,"notify_regional":false,"regions":["master"],"policy":"quorum","config":{"ssl":"1","host":"1.2.3.4","port":443,"send":"HEAD / HTTP/1.0\r\n\r\n"},"status":{"global":{"status":"pending","since":1451928202}},"notify_failback":true,"rules":[{"comparison":"contains","key":"output","value":"200 OK"},{"comparison":"<=","key":"connect","value":200}],"active":true,"name":"myotherhost.com:443 monitor","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!"}, { date: 'Mon, 04 Jan 2016 17:23:23 GMT',
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
  .put('/v1/monitoring/jobs', {"notify_regional":false,"notify_failback":true,"notify_repeat":0,"notify_delay":1000000,"rules":[{"value":"200 OK","comparison":"contains","key":"output"},{"value":200,"comparison":"<=","key":"connect"}],"config":{"ssl":"1","send":"HEAD / HTTP/1.0\r\n\r\n","port":443,"host":"1.2.3.4"},"job_type":"tcp","name":"myotherhost.com:443 monitor","active":true,"rapid_recheck":true,"region_scope":"fixed","regions":["master"],"frequency":30000000,"policy":"quorum","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!","notify_list":"568aaa8a830f780423016f65"})
  .reply(200, {"notify_list":"568aaa8a830f780423016f65","notify_delay":1000000,"job_type":"tcp","frequency":30000000,"rapid_recheck":true,"region_scope":"fixed","id":"568aaa8b830f780423016f68","notify_repeat":0,"notify_regional":false,"regions":["master"],"policy":"quorum","config":{"ssl":"1","host":"1.2.3.4","port":443,"send":"HEAD / HTTP/1.0\r\n\r\n"},"status":{"global":{"status":"pending","since":1451928203}},"notify_failback":true,"rules":[{"comparison":"contains","key":"output","value":"200 OK"},{"comparison":"<=","key":"connect","value":200}],"active":true,"name":"myotherhost.com:443 monitor","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!"}, { date: 'Mon, 04 Jan 2016 17:23:23 GMT',
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
  .delete('/v1/monitoring/jobs/568aaa8b830f780423016f68')
  .reply(200, {}, { date: 'Mon, 04 Jan 2016 17:23:23 GMT',
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
  .get('/v1/monitoring/jobs/568aaa8a830f780493f5ee7f')
  .reply(200, {"notify_list":"568aaa8a830f780423016f65","notify_delay":1000000,"job_type":"tcp","frequency":30000000,"rapid_recheck":true,"region_scope":"fixed","id":"568aaa8a830f780493f5ee7f","notify_repeat":0,"notify_regional":false,"regions":["master"],"policy":"quorum","config":{"ssl":"1","host":"1.2.3.4","port":443,"send":"HEAD / HTTP/1.0\r\n\r\n"},"status":{"global":{"status":"pending","since":1451928202}},"notify_failback":true,"rules":[{"comparison":"contains","value":"200 OK","key":"output"},{"comparison":"<=","value":200,"key":"connect"}],"active":true,"name":"myotherhost.com:443 monitor","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!"}, { date: 'Mon, 04 Jan 2016 17:23:23 GMT',
  'content-type': 'application/json',
  'content-length': '685',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"5fd6fd3cbcdb065a6099b808affcec4ae09b68e3"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/monitoring/history/568aaa8a830f780493f5ee7f')
  .reply(200, [{"status":"pending","region":"global","since":1451928202,"job":"568aaa8a830f780493f5ee7f","until":null}], { date: 'Mon, 04 Jan 2016 17:23:23 GMT',
  'content-type': 'application/json',
  'content-length': '106',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"459b299019cdc1dd3d4dc8ac25eeef01b1ea99d2"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .delete('/v1/monitoring/jobs/568aaa8a830f780493f5ee7f')
  .reply(200, {}, { date: 'Mon, 04 Jan 2016 17:23:23 GMT',
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
  .delete('/v1/lists/568aaa8a830f780423016f65')
  .reply(200, {}, { date: 'Mon, 04 Jan 2016 17:23:23 GMT',
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
