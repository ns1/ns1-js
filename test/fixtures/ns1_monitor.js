var nock = require('nock')

nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .put('/v1/lists', {"name":"My Notification List","notify_list":[{"config":{"email":"email+notify@gmail.com"},"type":"email"}]})
  .reply(200, {"notify_list":[{"type":"email","config":{"email":"email+notify@gmail.com"}}],"name":"My Notification List","id":"568ad89b830f780493f5ef78"}, { date: 'Mon, 04 Jan 2016 20:39:55 GMT',
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
  .put('/v1/monitoring/jobs', {"notify_regional":false,"notify_failback":true,"notify_repeat":0,"notify_delay":1000000,"rules":[{"value":"200 OK","comparison":"contains","key":"output"},{"value":200,"comparison":"<=","key":"connect"}],"config":{"ssl":"1","send":"HEAD / HTTP/1.0\r\n\r\n","port":443,"host":"1.2.3.4"},"job_type":"tcp","name":"myotherhost.com:443 monitor","active":true,"rapid_recheck":true,"region_scope":"fixed","regions":["master"],"frequency":30000000,"policy":"quorum","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!","notify_list":"568ad89b830f780493f5ef78"})
  .reply(200, {"notify_list":"568ad89b830f780493f5ef78","notify_delay":1000000,"job_type":"tcp","frequency":30000000,"rapid_recheck":true,"region_scope":"fixed","id":"568ad89c830f780423017076","notify_repeat":0,"notify_regional":false,"regions":["master"],"policy":"quorum","config":{"ssl":"1","host":"1.2.3.4","port":443,"send":"HEAD / HTTP/1.0\r\n\r\n"},"status":{"global":{"status":"pending","since":1451939995}},"notify_failback":true,"rules":[{"comparison":"contains","key":"output","value":"200 OK"},{"comparison":"<=","key":"connect","value":200}],"active":true,"name":"myotherhost.com:443 monitor","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!"}, { date: 'Mon, 04 Jan 2016 20:39:56 GMT',
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
  .get('/v1/monitoring/jobs/568ad89c830f780423017076')
  .reply(200, {"notify_list":"568ad89b830f780493f5ef78","notify_delay":1000000,"job_type":"tcp","frequency":30000000,"rapid_recheck":true,"region_scope":"fixed","id":"568ad89c830f780423017076","notify_repeat":0,"notify_regional":false,"regions":["master"],"policy":"quorum","config":{"ssl":"1","host":"1.2.3.4","port":443,"send":"HEAD / HTTP/1.0\r\n\r\n"},"status":{"global":{"status":"pending","since":1451939995}},"notify_failback":true,"rules":[{"comparison":"contains","value":"200 OK","key":"output"},{"comparison":"<=","value":200,"key":"connect"}],"active":true,"name":"myotherhost.com:443 monitor","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!"}, { date: 'Mon, 04 Jan 2016 20:39:56 GMT',
  'content-type': 'application/json',
  'content-length': '685',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"81b40020c11e12255faa91fd45037fa79d887b91"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/monitoring/jobs/568ad89c830f780423017076')
  .reply(200, {"notify_list":"568ad89b830f780493f5ef78","notify_delay":1000000,"job_type":"tcp","frequency":30000000,"rapid_recheck":true,"region_scope":"fixed","id":"568ad89c830f780423017076","notify_repeat":0,"notify_regional":false,"regions":["master"],"policy":"quorum","config":{"ssl":"1","host":"1.2.3.4","port":443,"send":"HEAD / HTTP/1.0\r\n\r\n"},"status":{"global":{"status":"pending","since":1451939995}},"notify_failback":true,"rules":[{"comparison":"contains","value":"200 OK","key":"output"},{"comparison":"<=","value":200,"key":"connect"}],"active":true,"name":"myotherhost.com:443 monitor","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!"}, { date: 'Mon, 04 Jan 2016 20:39:56 GMT',
  'content-type': 'application/json',
  'content-length': '685',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"81b40020c11e12255faa91fd45037fa79d887b91"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .post('/v1/monitoring/jobs/568ad89c830f780423017076', {"notify_list":"568ad89b830f780493f5ef78","notify_delay":1000000,"job_type":"tcp","frequency":30000000,"rapid_recheck":true,"region_scope":"fixed","id":"568ad89c830f780423017076","notify_repeat":0,"notify_regional":false,"regions":["master"],"policy":"quorum","config":{"ssl":"1","host":"1.2.3.4","port":443,"send":"HEAD / HTTP/1.0\r\n\r\n"},"status":{"global":{"status":"pending","since":1451939995}},"notify_failback":true,"rules":[{"comparison":"contains","value":"200 OK","key":"output"},{"comparison":"<=","value":200,"key":"connect"}],"active":true,"name":"test update","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!"})
  .reply(200, {"notify_list":"568ad89b830f780493f5ef78","notify_delay":1000000,"job_type":"tcp","frequency":30000000,"rapid_recheck":true,"region_scope":"fixed","id":"568ad89c830f780423017076","notify_repeat":0,"notify_regional":false,"regions":["master"],"policy":"quorum","config":{"ssl":"1","host":"1.2.3.4","port":443,"send":"HEAD / HTTP/1.0\r\n\r\n"},"status":{"global":{"status":"pending","since":1451939995}},"notify_failback":true,"rules":[{"comparison":"contains","key":"output","value":"200 OK"},{"comparison":"<=","key":"connect","value":200}],"active":true,"name":"test update","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!"}, { date: 'Mon, 04 Jan 2016 20:39:56 GMT',
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
  .get('/v1/monitoring/jobs/568ad89c830f780423017076')
  .reply(200, {"notify_list":"568ad89b830f780493f5ef78","notify_delay":1000000,"job_type":"tcp","frequency":30000000,"rapid_recheck":true,"region_scope":"fixed","id":"568ad89c830f780423017076","notify_repeat":0,"notify_regional":false,"regions":["master"],"policy":"quorum","config":{"ssl":"1","host":"1.2.3.4","port":443,"send":"HEAD / HTTP/1.0\r\n\r\n"},"status":{"global":{"status":"pending","since":1451939995}},"notify_failback":true,"rules":[{"comparison":"contains","value":"200 OK","key":"output"},{"comparison":"<=","value":200,"key":"connect"}],"active":true,"name":"test update","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!"}, { date: 'Mon, 04 Jan 2016 20:39:56 GMT',
  'content-type': 'application/json',
  'content-length': '669',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"91287f60146f43ae02644dc6f4e040126720fcee"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/monitoring/jobs/568ad89c830f780423017076')
  .reply(200, {"notify_list":"568ad89b830f780493f5ef78","notify_delay":1000000,"job_type":"tcp","frequency":30000000,"rapid_recheck":true,"region_scope":"fixed","id":"568ad89c830f780423017076","notify_repeat":0,"notify_regional":false,"regions":["master"],"policy":"quorum","config":{"ssl":"1","host":"1.2.3.4","port":443,"send":"HEAD / HTTP/1.0\r\n\r\n"},"status":{"global":{"status":"pending","since":1451939995}},"notify_failback":true,"rules":[{"comparison":"contains","value":"200 OK","key":"output"},{"comparison":"<=","value":200,"key":"connect"}],"active":true,"name":"test update","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!"}, { date: 'Mon, 04 Jan 2016 20:39:56 GMT',
  'content-type': 'application/json',
  'content-length': '669',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"91287f60146f43ae02644dc6f4e040126720fcee"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .post('/v1/monitoring/jobs/568ad89c830f780423017076', {"notify_list":"568ad89b830f780493f5ef78","notify_delay":1000000,"job_type":"tcp","frequency":30000000,"rapid_recheck":true,"region_scope":"fixed","id":"568ad89c830f780423017076","notify_repeat":0,"notify_regional":false,"regions":["master"],"policy":"quorum","config":{"ssl":"1","host":"1.2.3.4","port":443,"send":"HEAD / HTTP/1.0\r\n\r\n"},"status":{"global":{"status":"pending","since":1451939995}},"notify_failback":true,"rules":[{"comparison":"contains","value":"200 OK","key":"output"},{"comparison":"<=","value":200,"key":"connect"}],"active":true,"name":"myotherhost.com:443 monitor","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!"})
  .reply(200, {"notify_list":"568ad89b830f780493f5ef78","notify_delay":1000000,"job_type":"tcp","frequency":30000000,"rapid_recheck":true,"region_scope":"fixed","id":"568ad89c830f780423017076","notify_repeat":0,"notify_regional":false,"regions":["master"],"policy":"quorum","config":{"ssl":"1","host":"1.2.3.4","port":443,"send":"HEAD / HTTP/1.0\r\n\r\n"},"status":{"global":{"status":"pending","since":1451939995}},"notify_failback":true,"rules":[{"comparison":"contains","key":"output","value":"200 OK"},{"comparison":"<=","key":"connect","value":200}],"active":true,"name":"myotherhost.com:443 monitor","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!"}, { date: 'Mon, 04 Jan 2016 20:39:56 GMT',
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
  .put('/v1/monitoring/jobs', {"notify_regional":false,"notify_failback":true,"notify_repeat":0,"notify_delay":1000000,"rules":[{"value":"200 OK","comparison":"contains","key":"output"},{"value":200,"comparison":"<=","key":"connect"}],"config":{"ssl":"1","send":"HEAD / HTTP/1.0\r\n\r\n","port":443,"host":"1.2.3.4"},"job_type":"tcp","name":"myotherhost.com:443 monitor","active":true,"rapid_recheck":true,"region_scope":"fixed","regions":["master"],"frequency":30000000,"policy":"quorum","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!","notify_list":"568ad89b830f780493f5ef78"})
  .reply(200, {"notify_list":"568ad89b830f780493f5ef78","notify_delay":1000000,"job_type":"tcp","frequency":30000000,"rapid_recheck":true,"region_scope":"fixed","id":"568ad89d830f780493f5ef7b","notify_repeat":0,"notify_regional":false,"regions":["master"],"policy":"quorum","config":{"ssl":"1","host":"1.2.3.4","port":443,"send":"HEAD / HTTP/1.0\r\n\r\n"},"status":{"global":{"status":"pending","since":1451939996}},"notify_failback":true,"rules":[{"comparison":"contains","key":"output","value":"200 OK"},{"comparison":"<=","key":"connect","value":200}],"active":true,"name":"myotherhost.com:443 monitor","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!"}, { date: 'Mon, 04 Jan 2016 20:39:57 GMT',
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
  .delete('/v1/monitoring/jobs/568ad89d830f780493f5ef7b')
  .reply(200, {}, { date: 'Mon, 04 Jan 2016 20:39:57 GMT',
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
  .get('/v1/monitoring/jobs/568ad89c830f780423017076')
  .reply(200, {"notify_list":"568ad89b830f780493f5ef78","notify_delay":1000000,"job_type":"tcp","frequency":30000000,"rapid_recheck":true,"region_scope":"fixed","id":"568ad89c830f780423017076","notify_repeat":0,"notify_regional":false,"regions":["master"],"policy":"quorum","config":{"ssl":"1","host":"1.2.3.4","port":443,"send":"HEAD / HTTP/1.0\r\n\r\n"},"status":{"global":{"status":"pending","since":1451939995}},"notify_failback":true,"rules":[{"comparison":"contains","value":"200 OK","key":"output"},{"comparison":"<=","value":200,"key":"connect"}],"active":true,"name":"myotherhost.com:443 monitor","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!"}, { date: 'Mon, 04 Jan 2016 20:39:57 GMT',
  'content-type': 'application/json',
  'content-length': '685',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"81b40020c11e12255faa91fd45037fa79d887b91"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/monitoring/history/568ad89c830f780423017076')
  .query({"period":"30d"})
  .reply(200, [{"status":"pending","region":"global","since":1451939995,"job":"568ad89c830f780423017076","until":null}], { date: 'Mon, 04 Jan 2016 20:39:57 GMT',
  'content-type': 'application/json',
  'content-length': '106',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"3710d48a1b3e18f3754d048e612d412cb91c44a1"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/monitoring/jobs/568ad89c830f780423017076')
  .reply(200, {"notify_list":"568ad89b830f780493f5ef78","notify_delay":1000000,"job_type":"tcp","frequency":30000000,"rapid_recheck":true,"region_scope":"fixed","id":"568ad89c830f780423017076","notify_repeat":0,"notify_regional":false,"regions":["master"],"policy":"quorum","config":{"ssl":"1","host":"1.2.3.4","port":443,"send":"HEAD / HTTP/1.0\r\n\r\n"},"status":{"global":{"status":"pending","since":1451939995}},"notify_failback":true,"rules":[{"comparison":"contains","value":"200 OK","key":"output"},{"comparison":"<=","value":200,"key":"connect"}],"active":true,"name":"myotherhost.com:443 monitor","notes":"If this monitor is down then the webserver on myhost.com:443 is down or too slow!"}, { date: 'Mon, 04 Jan 2016 20:39:57 GMT',
  'content-type': 'application/json',
  'content-length': '685',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"81b40020c11e12255faa91fd45037fa79d887b91"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/monitoring/metrics/568ad89c830f780423017076')
  .reply(200, [], { date: 'Mon, 04 Jan 2016 20:39:57 GMT',
  'content-type': 'application/json',
  'content-length': '3',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"cd0d4cc32346750408f7d4f5e78ec9a6e5b79a0d"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/monitoring/jobtypes')
  .reply(200, {"ping":{"shortdesc":"Ping (ICMP)","config":{"count":{"default":4,"required":false,"validator":"number","shortdesc":"Number of packets to send","type":"number","desc":"Number of ICMP echo packets to send.  More take longer, but provide better RTT and packet loss statistics."},"host":{"shortdesc":"IP address or hostname to ping","desc":"IP address or hostname to test using ICMP echo packets.","required":true,"type":"string","validator":"text"},"interval":{"default":0,"required":false,"validator":"number","shortdesc":"Time between packets","type":"number","desc":"Minimum time (in ms) to wait between sending each ICMP packet.  If less than the response time for an echo request, we will send the next packet immediately upon receiving a response."},"timeout":{"default":2000,"required":false,"validator":"number","shortdesc":"Ping timeout","type":"number","desc":"Timeout (in ms) before we mark host failed."}},"results":{"rtt":{"comparators":["<",">","<=",">=","==","!="],"metric":true,"validator":"number","shortdesc":"Round trip time","type":"number","desc":"Average round trip time (in ms) of returned pings."},"loss":{"comparators":["<",">","<=",">=","==","!="],"metric":true,"validator":"number","shortdesc":"Percent packet loss","type":"number","desc":"Percentage of ICMP echo packets with no response (timed out)."}},"desc":"Ping a host using ICMP packets."},"dns":{"shortdesc":"DNS","config":{"response_timeout":{"default":2000,"required":false,"validator":"number","shortdesc":"Response timeout","type":"number","desc":"Timeout (in ms) after sending query to wait for output."},"host":{"shortdesc":"Nameserver IP or hostname","desc":"IP address or hostname of the nameserver to query, e.g. 8.8.8.8.","required":true,"type":"string","validator":"text"},"type":{"default":"A","required":false,"validator":"rectype","shortdesc":"Query type","type":"string","desc":"DNS record type to query."},"port":{"default":53,"required":false,"validator":"number","shortdesc":"DNS port","type":"number","desc":"DNS port to query on host."},"domain":{"shortdesc":"Query domain","desc":"The domain name to query.","required":true,"type":"string","validator":"text"}},"results":{"rtt":{"comparators":["<",">","<=",">=","==","!="],"metric":true,"validator":"number","shortdesc":"Response time","type":"number","desc":"Average response time (in ms) of DNS responses."},"num_records":{"comparators":["<",">","<=",">=","==","!="],"metric":false,"validator":"number","shortdesc":"Number of records","type":"number","desc":"Number of records in the ANSWER section of the DNS response."},"rdata":{"comparators":["contains"],"metric":false,"validator":"string","shortdesc":"Record RDATA","type":"string","desc":"RDATA of records in the DNS response."}},"desc":"Do a DNS lookup against a nameserver host."},"tcp":{"shortdesc":"TCP","config":{"response_timeout":{"default":1000,"required":false,"validator":"number","shortdesc":"Response timeout","type":"number","desc":"Timeout (in ms) after connecting to wait for output."},"send":{"default":null,"required":false,"validator":"text","shortdesc":"String to send","type":"string","desc":"A string to send to the host upon connecting. String escapes (e.g. \"\\n\") are allowed."},"connect_timeout":{"default":2000,"required":false,"validator":"number","shortdesc":"Connect timeout","type":"number","desc":"Timeout (in ms) before we give up trying to connect."},"ssl":{"default":false,"required":false,"validator":"checkbox","shortdesc":"Connect with SSL","type":"checkbox","desc":"Attempt to negotiate an SSL connection before sending/receiving protocol data."},"host":{"shortdesc":"IP address or hostname","desc":"IP address or hostname to connect to.","required":true,"type":"string","validator":"text"},"port":{"shortdesc":"TCP port","desc":"TCP port to connect to on host.","required":true,"type":"number","validator":"number"}},"results":{"output":{"comparators":["contains"],"metric":false,"validator":"string","shortdesc":"Output (if any)","type":"string","desc":"Output received from the connection, if any."},"connect":{"comparators":["<",">","<=",">=","==","!="],"metric":true,"validator":"number","shortdesc":"Time to connect","type":"number","desc":"Time (in ms) for the connection to open."}},"desc":"Connect to a TCP port on a host."}}, { date: 'Mon, 04 Jan 2016 20:39:57 GMT',
  'content-type': 'application/json',
  'content-length': '4286',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"8249214077abfbd42d1bf7b0d2378c4e0be9202f"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/monitoring/regions')
  .reply(200, [{"subnets":["192.168.50.200/32"],"code":"master","name":"Master"},{"subnets":["192.168.50.201/32"],"code":"satellite","name":"Satellite"}], { date: 'Mon, 04 Jan 2016 20:39:57 GMT',
  'content-type': 'application/json',
  'content-length': '140',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"3e76a0545cea8f2fdbe057eb032fdc14e9c38e2e"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .delete('/v1/monitoring/jobs/568ad89c830f780423017076')
  .reply(200, {}, { date: 'Mon, 04 Jan 2016 20:39:57 GMT',
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
  .delete('/v1/lists/568ad89b830f780493f5ef78')
  .reply(200, {}, { date: 'Mon, 04 Jan 2016 20:39:57 GMT',
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
