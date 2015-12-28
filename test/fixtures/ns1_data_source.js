var nock = require('nock')

nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .put('/v1/data/sources/', {"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"name":"Monitor.us Example","sourcetype":"monitor_us"})
  .reply(200, {"status":"pending","name":"Monitor.us Example","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"d00dbd4f7ce6c6fc9f016ee99ebb88f7","sourcetype":"monitor_us"}, { date: 'Mon, 28 Dec 2015 21:04:00 GMT',
  'content-type': 'application/json',
  'content-length': '218',
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
  .get('/v1/data/sources')
  .reply(200, [{"status":"pending","name":"Monitor.us Example","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"d00dbd4f7ce6c6fc9f016ee99ebb88f7","sourcetype":"monitor_us"}], { date: 'Mon, 28 Dec 2015 21:04:00 GMT',
  'content-type': 'application/json',
  'content-length': '220',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"77dcdb17772349a028f4a0a3c3b44e78ed91a88f"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/data/sources/d00dbd4f7ce6c6fc9f016ee99ebb88f7')
  .reply(200, {"status":"pending","name":"Monitor.us Example","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"d00dbd4f7ce6c6fc9f016ee99ebb88f7","sourcetype":"monitor_us"}, { date: 'Mon, 28 Dec 2015 21:04:00 GMT',
  'content-type': 'application/json',
  'content-length': '218',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"34f52a7238b756c409e53aee12239cc669f886ea"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/data/sources/d00dbd4f7ce6c6fc9f016ee99ebb88f7')
  .reply(200, {"status":"pending","name":"Monitor.us Example","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"d00dbd4f7ce6c6fc9f016ee99ebb88f7","sourcetype":"monitor_us"}, { date: 'Mon, 28 Dec 2015 21:04:00 GMT',
  'content-type': 'application/json',
  'content-length': '218',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"34f52a7238b756c409e53aee12239cc669f886ea"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .post('/v1/data/sources/d00dbd4f7ce6c6fc9f016ee99ebb88f7', {"status":"pending","name":"test update","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"d00dbd4f7ce6c6fc9f016ee99ebb88f7","sourcetype":"monitor_us"})
  .reply(200, {"status":"pending","name":"test update","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"d00dbd4f7ce6c6fc9f016ee99ebb88f7","sourcetype":"monitor_us"}, { date: 'Mon, 28 Dec 2015 21:04:00 GMT',
  'content-type': 'application/json',
  'content-length': '211',
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
  .get('/v1/data/sources/d00dbd4f7ce6c6fc9f016ee99ebb88f7')
  .reply(200, {"status":"pending","name":"test update","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"d00dbd4f7ce6c6fc9f016ee99ebb88f7","sourcetype":"monitor_us"}, { date: 'Mon, 28 Dec 2015 21:04:00 GMT',
  'content-type': 'application/json',
  'content-length': '211',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"beb001ee775247b499e18f2dfbfd4124a51c60d3"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/data/sources/d00dbd4f7ce6c6fc9f016ee99ebb88f7')
  .reply(200, {"status":"pending","name":"test update","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"d00dbd4f7ce6c6fc9f016ee99ebb88f7","sourcetype":"monitor_us"}, { date: 'Mon, 28 Dec 2015 21:04:00 GMT',
  'content-type': 'application/json',
  'content-length': '211',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"beb001ee775247b499e18f2dfbfd4124a51c60d3"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .post('/v1/data/sources/d00dbd4f7ce6c6fc9f016ee99ebb88f7', {"status":"pending","name":"Monitor.us Example","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"d00dbd4f7ce6c6fc9f016ee99ebb88f7","sourcetype":"monitor_us"})
  .reply(200, {"status":"pending","name":"Monitor.us Example","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"d00dbd4f7ce6c6fc9f016ee99ebb88f7","sourcetype":"monitor_us"}, { date: 'Mon, 28 Dec 2015 21:04:00 GMT',
  'content-type': 'application/json',
  'content-length': '218',
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
  .put('/v1/data/sources', {"config":{"secret_key":"47CAGRFTA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXR377TXAY0FJA7T9VZY"},"name":"Monitor.us Example 2","sourcetype":"monitor_us"})
  .reply(200, {"status":"pending","name":"Monitor.us Example 2","feeds":[],"config":{"secret_key":"47CAGRFTA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXR377TXAY0FJA7T9VZY"},"id":"0c7dd15aaaadce4b0bab2989d9c8555c","sourcetype":"monitor_us"}, { date: 'Mon, 28 Dec 2015 21:04:00 GMT',
  'content-type': 'application/json',
  'content-length': '220',
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
  .get('/v1/data/sources')
  .reply(200, [{"status":"pending","name":"Monitor.us Example 2","feeds":[],"config":{"secret_key":"47CAGRFTA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXR377TXAY0FJA7T9VZY"},"id":"0c7dd15aaaadce4b0bab2989d9c8555c","sourcetype":"monitor_us"},{"status":"pending","name":"Monitor.us Example","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"d00dbd4f7ce6c6fc9f016ee99ebb88f7","sourcetype":"monitor_us"}], { date: 'Mon, 28 Dec 2015 21:04:00 GMT',
  'content-type': 'application/json',
  'content-length': '440',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"1778d2e44021d98b6d61a21d2b209899c87715bc"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .delete('/v1/data/sources/0c7dd15aaaadce4b0bab2989d9c8555c')
  .reply(200, {}, { date: 'Mon, 28 Dec 2015 21:04:00 GMT',
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
  .get('/v1/data/sources')
  .reply(200, [{"status":"pending","name":"Monitor.us Example","feeds":[],"config":{"secret_key":"47AOG8ATA1QNUC3H3UH2DRBXYZ","api_key":"15PSVFCXA377TGUY0FJA7T9VZY"},"id":"d00dbd4f7ce6c6fc9f016ee99ebb88f7","sourcetype":"monitor_us"}], { date: 'Mon, 28 Dec 2015 21:04:00 GMT',
  'content-type': 'application/json',
  'content-length': '220',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"77dcdb17772349a028f4a0a3c3b44e78ed91a88f"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/data/sourcetypes')
  .reply(200, {"nsone_v1":{"shortdesc":"NSONE Data Feed API v1","feed_config":{"label":{"default":null,"required":true,"validator":"text","shortdesc":"Label","type":"text","desc":"Short/simple label for the service this feed is\n              for, like a server name, facility name, etc."}},"config":{},"compatible_meta":["low_watermark","priority","note","weight","pulse","country","up","longitude","connections","high_watermark","loadavg","us_state","ip_prefixes","latitude","pulsar","requests","ca_province","asn","georegion"],"desc":"The native NSONE data source, our own API.  Requires\n    normal NSONE API authentication via the <code>X-NSONE-Key</code>\n    header when sending requests to the Feed URL.  The body of your\n    data feed request must be a JSON object containing <b>either</b>\n    simple key/value pairs as in any normal record/region/answer\n    metadata table, e.g. <code>{\"up\": \"1\"}</code>, in which case the\n    updated values will be applied to <b>all</b> data feeds associated\n    with this data source; <b>or</b>, an object where keys match the\n    <code>label</code> for data feeds from this source, and values are\n    metadata update tables.  Data feeds from this source may update\n    any metadata field."},"monitor_us":{"shortdesc":"Monitor.us Alert Notification","feed_config":{"test_name":{"default":null,"required":true,"validator":"text","shortdesc":"Test Name","type":"text","desc":"The name of the test in Monitor.us that corresponds to this feed"}},"config":{"secret_key":{"default":null,"required":true,"validator":"text","shortdesc":"Monitor.us Secret Key","type":"text","desc":"Your Monitor.us Secret Key (in your Monitor.us dashboard, click Tools, API, API Key)"},"api_key":{"default":null,"required":true,"validator":"text","shortdesc":"Monitor.us API Key","type":"text","desc":"Your Monitor.us API Key (in your Monitor.us dashboard, click Tools, API, API Key)"}},"compatible_meta":["up"],"desc":"Monitor.us is a monitoring solution.  To use this data source,\n    first create a new \"URL\" contact in your Monitor.us account with the NSONE\n    Feed URL.  When creating data feeds, set the \"Test Name\" field to\n    the name of the test in Monitor.us.  Make sure you set the \"Notify when\n    back up\" rule in Monitor.us for all your connected tests.  Data feeds from\n    this source update the <code>up</code> metadata field."},"rackspace":{"shortdesc":"Rackspace Alarm Notification","feed_config":{"check_id":{"default":null,"required":false,"validator":"text","shortdesc":"Check ID","type":"text","desc":"The check id from Cloud Monitoring for this data feed"},"alarm_id":{"default":null,"required":false,"validator":"text","shortdesc":"Alarm ID","type":"text","desc":"The alarm id from Cloud Monitoring for this data feed"},"entity_id":{"default":null,"required":true,"validator":"text","shortdesc":"Entity ID","type":"text","desc":"The entity id from Cloud Monitoring for this data feed"}},"config":{"webhook_token":{"default":null,"required":false,"validator":"text","shortdesc":"Rackspace Webhook Token","type":"text","desc":"The value of X-Rackspace-Webhook-Token, which you can set in your Cloud Monitoring Account Settings"}},"compatible_meta":["up"],"desc":"Rackspace Cloud Monitoring is a monitoring solution.  To\n    use this data source, you must create a new Notification in your\n    Cloud Monitoring account of type \"webhook\" with your NSONE Feed\n    URL.  You may optionally specify a\n    <code>X-Rackspace-Webhook-Token</code> value which we will\n    validate in all notifications; if unspecified we will not do\n    validation.  When creating data feeds, set the entity id field to\n    the id of the Cloud Monitoring entity.  You may optionally specify\n    check id and/or alarm id, and only notifications matching those\n    fields will apply to the feed.  Data feeds from this source update\n    the <code>up</code> metadata field."},"newrelic_webhook":{"shortdesc":"New Relic Alerts","feed_config":{"resource_name":{"default":null,"required":true,"validator":"text","shortdesc":"Resource name","type":"text","desc":"The name of the resource being alerted on.  I.e., a server or application name."}},"config":{"account_id":{"default":null,"required":true,"validator":"number","shortdesc":"Account ID","type":"number","desc":"Your master account ID.  This is NOT your user ID.  This value appears in New Relic URLs as newrelic.com/accounts/YOUR_ACCOUNT_ID."}},"compatible_meta":["up"],"desc":"New Relic can alert you when your applications and/or servers\n    experience downtime.  To configure NSONE to receive these alerts you need\n    to create a Webhook alerting channel in New Relic's portal.  Use the Feed\n    URL generated for this NSONE data source as the New Relic Webhook target.\n    When configuring your New Relic alerting polices for servers and\n    applications, be sure to enable <b>downtime alerts</b>; NSONE ignores all\n    other alert conditions like CPU, memory, and so on.  At this time, we\n    support only New Relic version 2 alerts.  We will add support for\n    version 3 alerts once that product emerges from beta.  Data feeds from\n    this source update the <code>up</code> metadata field. "},"cloudwatch":{"shortdesc":"Cloudwatch Alarm Notification","feed_config":{"alarm_name":{"default":null,"required":true,"validator":"text","shortdesc":"Alarm Name","type":"text","desc":"The name of the Cloudwatch Alarm that corresponds to this feed"}},"config":{},"compatible_meta":["up"],"desc":"Amazon Cloudwatch is a monitoring solution for Amazon\n    Web Services.  You must configure your Cloudwatch alarms to\n    publish messages to a Simple Notification Service (SNS) topic for\n    your NSONE Feed.  First, in the SNS console, create a topic for\n    your alarms; then create an HTTPS subscription for the topic with\n    your NSONE Feed URL.  Do not associate your Data Source with more\n    than one topic in SNS (you can always create another Data Source).\n    Ensure your Cloudwatch alarms send notifications to this SNS topic\n    and specify the Alarm Name of a Cloudwatch alarm when creating a\n    new Data Feed.  Data feeds from this source update the\n    <code>up</code> metadata field."},"catchpoint":{"shortdesc":"Catchpoint Alert Notifications","feed_config":{"test_id":{"default":null,"required":true,"validator":"number","shortdesc":"Catchpoint test id","type":"number","desc":"The test id from Catchpoint for this data feed"},"fail_on_warning":{"default":"0","required":false,"validator":"checkbox","shortdesc":"Fail on \"Warning\"","type":"checkbox","desc":"Catchpoint sends Critical, Warning, and\n            Improved alerts. If checked, Warning alerts will be\n            treated as failures; otherwise they will be treated as\n            recoveries."}},"config":{},"compatible_meta":["up"],"desc":"Catchpoint is a monitoring solution.  To use this data\n    source, activate the \"Alerts API\" in your Catchpoint account\n    settings, set the API URL to the NSONE Feed URL, and set the\n    Format to JSON.  Then configure your Catchpoint tests to send\n    alerts.  When creating NSONE data feeds, set the test id field to\n    the numerical id shown on the test's page in Catchpoint.\n    Catchpoint sends \"Critical\", \"Warning\", and \"Improved\" alerts;\n    optionally you can treat Warning alerts as failures."},"monitis":{"shortdesc":"Monitis Alert Notification","feed_config":{"test_name":{"default":null,"required":true,"validator":"text","shortdesc":"Test Name","type":"text","desc":"The name of the test in Monitis that corresponds to this feed"}},"config":{"secret_key":{"default":null,"required":true,"validator":"text","shortdesc":"Monitis Secret Key","type":"text","desc":"Your Monitis Secret Key (in your Monitis dashboard, click Account, API Key)"},"api_key":{"default":null,"required":true,"validator":"text","shortdesc":"Monitis API Key","type":"text","desc":"Your Monitis API Key (in your Monitis dashboard, click Account, API Key)"}},"compatible_meta":["up"],"desc":"Monitis is a monitoring solution.  To use this data source,\n    first create a new \"URL\" contact in your Monitis account with the NSONE\n    Feed URL.  When creating data feeds, set the \"Test Name\" field to\n    the name of the test in Monitis.  Make sure you set the \"Notify when\n    back up\" rule in Monitis for all your connected tests.  Data feeds from\n    this source update the <code>up</code> metadata field."},"webcheck":{"shortdesc":"Webcheck Alert Notification","feed_config":{"check_id":{"default":null,"required":true,"validator":"number","shortdesc":"Webcheck check id","type":"number","desc":"The check id from Webcheck for this data feed"}},"config":{},"compatible_meta":["up"],"desc":"Webcheck is a monitoring solution.  To use this data\n    source, first create a new \"HTTP Callback\" contact in your\n    Webcheck account with the NSONE Feed URL, <code>POST</code> as the\n    HTTP Type, <code>application/json</code> as the Content Type, and\n    the following snippet in the POST Data field:\n    <code>{\"check_id\":&lt;%check_id%&gt;,\n    \"check_state\":&lt;%check_state%&gt;}</code>.  When creating data\n    feeds, set the check id field to the id of the check in Webcheck.\n    Data feeds from this source update the <code>up</code> metadata\n    field."},"pingdom":{"shortdesc":"Pingdom BeepManager Alert","feed_config":{"check_id":{"default":null,"required":true,"validator":"number","shortdesc":"Pingdom check id","type":"number","desc":"The check id from Pingdom for this data feed"}},"config":{},"compatible_meta":["up"],"desc":"Pingdom is a monitoring solution.  To use this data\n    source, you must create a new Alerting Endpoint of type\n    \"URL/WEBHOOK\" with the NSONE Feed URL, using the \"New Message\n    Format\", and create an Alert Policy that notifies the new Alerting\n    Endpoint.  We recommend no delay in sending notifications.  When\n    creating data feeds, set the \"check id\" field to the id of the\n    Pingdom check (which you can find in the URL of the check's page\n    in Pingdom, or using Pingdom's API)."},"nsone_monitoring":{"shortdesc":"NSONE Monitoring","feed_config":{"jobid":{"default":null,"required":true,"validator":"job","shortdesc":"Monitor","type":"text","desc":"The NSONE Monitor that will update this feed"}},"config":{},"compatible_meta":["up"],"desc":"Receive updates from NSONE Monitoring checks when global\n    status changes occur.  Data feeds from this source update the\n    <code>up</code> metadata field."},"boundary":{"shortdesc":"Boundary Alert","feed_config":{"alert":{"default":null,"required":true,"validator":"text","shortdesc":"Boundary alert name","type":"string","desc":"The unique alert name from Boundary for this data feed"}},"config":{},"compatible_meta":["up"],"desc":"Boundary is a monitoring solution.  To use this data\n    source, you must have a Boundary account. In the Configuration\n    drop down at the top (gear icon), click on Alerts and then Create a new\n    alert. Make sure you give the alert a unique name among all other\n    alerts, then set your traffic threshold and other alert details. In the\n    Notifications section, add a \"Web Hook\" notification using the NSONE\n    Feed URL. When creating data feeds, set the \"alert name\" field to the\n    exact name of the alert you created.\n    "},"a10":{"shortdesc":"A10 Virtual Server Heartbeat","feed_config":{"vip_name":{"default":null,"required":true,"validator":"text","shortdesc":"VIP Name","type":"text","desc":"The name of the AX Virtual Server for this data feed"}},"config":{},"compatible_meta":["up","connections","requests"],"desc":"A10 Networks AX ADCs can push heartbeat data about a\n    Virtual Server (VIP) to NSONE for global traffic management.  To\n    use this data source, you must enable and configure the NSONE\n    aFlex script on your AX appliance(s) to send heartbeat data to the\n    NSONE Feed URL for the data source.  When creating data feeds, set\n    the VIP Name field to the name of your VIP in the AX.  Data feeds\n    from this source update several metadata fields: <code>up</code>,\n    <code>connections</code>, and <code>requests</code>."}}, { date: 'Mon, 28 Dec 2015 21:04:00 GMT',
  'content-type': 'application/json',
  'content-length': '12194',
  connection: 'close',
  'x-ratelimit-remaining': '999',
  etag: '"1b3267df52390fe1aaae8c41a002f2772b14d017"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '1000',
  'x-ratelimit-period': '1',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://portal.vagrant.nsone.net:443', {"encodedQueryParams":true})
  .delete('/v1/data/sources/d00dbd4f7ce6c6fc9f016ee99ebb88f7')
  .reply(200, {}, { date: 'Mon, 28 Dec 2015 21:04:00 GMT',
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
