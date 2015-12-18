var nock = require('nock')

nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/zones/testdomain.test/testdomain.test/NS')
  .reply(200, {"domain":"testdomain.test","zone":"testdomain.test","use_client_subnet":false,"answers":[{"answer":["dns1.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0542"},{"answer":["dns2.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0543"},{"answer":["dns3.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0544"},{"answer":["dns4.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0545"}],"id":"566f3f069f782d2e420a0546","regions":{},"meta":{},"link":null,"filters":[],"ttl":3600,"tier":1,"type":"NS","networks":[0]}, { date: 'Fri, 18 Dec 2015 00:16:56 GMT',
  'content-type': 'application/json',
  'content-length': '523',
  connection: 'close',
  'x-ratelimit-remaining': '899',
  etag: '"924e4b9982bcb73766132c9c5b2c7e1bb7c47bb8"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/zones/testdomain.test/testdomain.test/NS')
  .reply(200, {"domain":"testdomain.test","zone":"testdomain.test","use_client_subnet":false,"answers":[{"answer":["dns1.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0542"},{"answer":["dns2.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0543"},{"answer":["dns3.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0544"},{"answer":["dns4.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0545"}],"id":"566f3f069f782d2e420a0546","regions":{},"meta":{},"link":null,"filters":[],"ttl":3600,"tier":1,"type":"NS","networks":[0]}, { date: 'Fri, 18 Dec 2015 00:16:56 GMT',
  'content-type': 'application/json',
  'content-length': '523',
  connection: 'close',
  'x-ratelimit-remaining': '898',
  etag: '"924e4b9982bcb73766132c9c5b2c7e1bb7c47bb8"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .post('/v1/zones/testdomain.test/testdomain.test/NS', {"domain":"testdomain.test","zone":"testdomain.test","use_client_subnet":false,"answers":[{"answer":["dns1.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0542"},{"answer":["dns2.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0543"},{"answer":["dns3.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0544"},{"answer":["dns4.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0545"}],"id":"566f3f069f782d2e420a0546","regions":{},"meta":{},"link":null,"filters":[],"ttl":665,"tier":1,"type":"NS","networks":[0]})
  .reply(200, {"domain":"testdomain.test","use_client_subnet":false,"answers":[{"answer":["dns1.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0542"},{"answer":["dns2.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0543"},{"answer":["dns3.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0544"},{"answer":["dns4.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0545"}],"meta":{},"link":null,"filters":[],"ttl":665,"tier":1,"networks":[0],"zone":"testdomain.test","id":"566f3f069f782d2e420a0546","regions":{},"type":"NS"}, { date: 'Fri, 18 Dec 2015 00:16:56 GMT',
  'content-type': 'application/json',
  'content-length': '522',
  connection: 'close',
  'x-ratelimit-remaining': '299',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '300',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/zones/testdomain.test/testdomain.test/NS')
  .reply(200, {"domain":"testdomain.test","zone":"testdomain.test","use_client_subnet":false,"answers":[{"answer":["dns1.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0542"},{"answer":["dns2.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0543"},{"answer":["dns3.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0544"},{"answer":["dns4.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0545"}],"id":"566f3f069f782d2e420a0546","regions":{},"meta":{},"link":null,"filters":[],"ttl":665,"tier":1,"type":"NS","networks":[0]}, { date: 'Fri, 18 Dec 2015 00:16:56 GMT',
  'content-type': 'application/json',
  'content-length': '522',
  connection: 'close',
  'x-ratelimit-remaining': '897',
  etag: '"73fa34d9a89a1790e9a37d70d2973e81fd7780ae"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/zones/testdomain.test/testdomain.test/NS')
  .reply(200, {"domain":"testdomain.test","zone":"testdomain.test","use_client_subnet":false,"answers":[{"answer":["dns1.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0542"},{"answer":["dns2.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0543"},{"answer":["dns3.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0544"},{"answer":["dns4.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0545"}],"id":"566f3f069f782d2e420a0546","regions":{},"meta":{},"link":null,"filters":[],"ttl":665,"tier":1,"type":"NS","networks":[0]}, { date: 'Fri, 18 Dec 2015 00:16:56 GMT',
  'content-type': 'application/json',
  'content-length': '522',
  connection: 'close',
  'x-ratelimit-remaining': '896',
  etag: '"73fa34d9a89a1790e9a37d70d2973e81fd7780ae"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .post('/v1/zones/testdomain.test/testdomain.test/NS', {"domain":"testdomain.test","zone":"testdomain.test","use_client_subnet":false,"answers":[{"answer":["dns1.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0542"},{"answer":["dns2.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0543"},{"answer":["dns3.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0544"},{"answer":["dns4.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0545"}],"id":"566f3f069f782d2e420a0546","regions":{},"meta":{},"link":null,"filters":[],"ttl":3600,"tier":1,"type":"NS","networks":[0]})
  .reply(200, {"domain":"testdomain.test","use_client_subnet":false,"answers":[{"answer":["dns1.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0542"},{"answer":["dns2.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0543"},{"answer":["dns3.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0544"},{"answer":["dns4.p03.nsone.net"],"meta":{},"id":"566f3f069f782d2e420a0545"}],"meta":{},"link":null,"filters":[],"ttl":3600,"tier":1,"networks":[0],"zone":"testdomain.test","id":"566f3f069f782d2e420a0546","regions":{},"type":"NS"}, { date: 'Fri, 18 Dec 2015 00:16:56 GMT',
  'content-type': 'application/json',
  'content-length': '523',
  connection: 'close',
  'x-ratelimit-remaining': '298',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '300',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .put('/v1/zones/testdomain.test/www.testdomain.test/A', {"zone":"testdomain.test","domain":"www.testdomain.test","type":"A","answers":[{"answer":["1.1.1.1"]}]})
  .reply(200, {"domain":"www.testdomain.test","zone":"testdomain.test","use_client_subnet":true,"answers":[{"answer":["1.1.1.1"],"id":"567350789f782d109d702dc5"}],"id":"567350789f782d109d702dc6","regions":{},"meta":{},"link":null,"filters":[],"ttl":3600,"tier":1,"type":"A","networks":[0]}, { date: 'Fri, 18 Dec 2015 00:16:56 GMT',
  'content-type': 'application/json',
  'content-length': '276',
  connection: 'close',
  'x-ratelimit-remaining': '99',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '100',
  'x-ratelimit-period': '200',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .delete('/v1/zones/testdomain.test/www.testdomain.test/A')
  .reply(200, {}, { date: 'Fri, 18 Dec 2015 00:16:56 GMT',
  'content-type': 'application/json',
  'content-length': '3',
  connection: 'close',
  'x-ratelimit-remaining': '99',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '100',
  'x-ratelimit-period': '200',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/metatypes')
  .reply(200, {"low_watermark":{"shortdesc":"Low watermark","category":"traffic_parameters","desc":"This positive number indicates a \"low watermark\" to use\n    for load shedding.  The value you should use depends on the metric\n    you're using to determine load (e.g., loadavg, connections,\n    etc)."},"note":{"shortdesc":"Notes","category":"informational","desc":"Use these freeform notes to indicate any necessary\n    details about the answer or region for operators.  Up to 256\n    characters in length."},"weight":{"shortdesc":"Answer weight","category":"traffic_parameters","desc":"This positive decimal value indicates a weight to assign\n    to an answer or region.  Filters that use weights normalize them,\n    so you may use any positive values, but we recommend values\n    between 0 and 100 for simplicity's sake."},"country":{"shortdesc":"Country/countries","category":"geographical","desc":"Country or countries associated with this answer/region.\n    Countries must be specified as ISO3166 2-character country codes.\n    You may assign multiple countries if desired."},"connections":{"shortdesc":"Active connections","category":"status","desc":"This integer value indicates the number of active\n    connections for an answer or region.  Values must be positive\n    integers."},"up":{"shortdesc":"Up/down","category":"status","desc":"This boolean value indicates \"upness\" of answers or\n    regions.  If true (or 1), the answer/region is \"up\".  If false (or\n    0) it is \"down\"."},"longitude":{"shortdesc":"Longitude","category":"geographical","desc":"Geographic longitude associated with the answer or\n    region, e.g., the longitude of the datacenter where your server\n    resides.  Must be a decimal number between -180 and +180 where\n    negative indicates West and positive indicates East."},"priority":{"shortdesc":"Priority tier value","category":"traffic_parameters","desc":"This integer value indicates the \"priority tier\" of an\n    answer or region.  Lower values indicate higher priority.  Values\n    must be positive integers."},"high_watermark":{"shortdesc":"High watermark","category":"traffic_parameters","desc":"This positive number indicates a \"high watermark\" to use\n    for load shedding.  The value you should use depends on the metric\n    you're using to determine load (e.g., loadavg, connections,\n    etc)."},"loadavg":{"shortdesc":"Load average","category":"status","desc":"This decimal value indicates the \"load average\" for an\n    answer or region.  Values must be positive decimal numbers, and will be\n    rounded to the nearest tenth."},"georegion":{"shortdesc":"Geographic region(s)","category":"geographical","desc":"Geographic region(s) associated with this answer/region,\n    e.g., the rough geographic location of the datacenter where your\n    server resides.  Valid geographic regions are 'US-EAST',\n    'US-CENTRAL', 'US-WEST', 'EUROPE', 'ASIAPAC', 'SOUTH-AMERICA',\n    'AFRICA'.  You may assign multiple regions if desired."},"ip_prefixes":{"shortdesc":"IP Prefix List","category":"network","desc":"IP (v4 and v6) prefixes to associate with the answer or\n    region, in CIDR format (\"a.b.c.d/mask\"), e.g., \"1.2.3.4/24\".  You\n    may include up to 1000 prefixes."},"latitude":{"shortdesc":"Latitude","category":"geographical","desc":"Geographic latitude associated with the answer or\n    region, e.g., the latitude of the datacenter where your server\n    resides.  Must be a decimal number between -180 and +180 where\n    negative indicates South and positive indicates North."},"requests":{"shortdesc":"Active requests","category":"status","desc":"This integer value indicates the number of active\n    requests (HTTP or otherwise) for an answer or region.  Values must\n    be positive integers."},"ca_province":{"shortdesc":"Canadian province(s)","category":"geographical","desc":"Canadian province(s) associated with this answer/region.\n    Provinces must be specified as standard 2-character province\n    codes.  You may assign multiple provinces if desired."},"asn":{"shortdesc":"AS Number(s)","category":"network","desc":"Autonomous System (AS) numbers to associate with the\n    answer or region.  You may include up to 1000 AS numbers."},"us_state":{"shortdesc":"US State(s)","category":"geographical","desc":"US state(s) associated with this answer/region.  States\n    must be specified as standard 2-character state codes.  You may\n    assign multiple states if desired."}}, { date: 'Fri, 18 Dec 2015 00:16:56 GMT',
  'content-type': 'application/json',
  'content-length': '4472',
  connection: 'close',
  'x-ratelimit-remaining': '896',
  etag: '"b52e26a4a0792e8bfae37218abe4c288672b4b2f"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });


nock('https://api.nsone.net:443', {"encodedQueryParams":true})
  .get('/v1/filtertypes')
  .reply(200, {"select_first_region":{"shortdesc":"Return all answers in the same region as the first answer.","tier":2,"inputs":[],"config":{},"desc":"This filter keeps only the answers that are in the same\n        region as the first answer.  This filter is most useful with\n        the output of filters like <span\n        class=\"filtername-2\">STICKY_REGION</span> that group answers\n        together by region."},"netfence_asn":{"shortdesc":"Restrict to answers where ASN of requester ","tier":3,"inputs":["asn"],"config":{"remove_no_asn":{"default":"1","required":false,"validator":"checkbox","shortdesc":"Remove answers without asn list on any match","type":"checkbox","desc":"If any answers have entries in the asn list\n                matching the requester's AS, then eliminate all\n                answers with no asn list; and if no answers match the\n                requester, return answers with no asn list as\n                fallbacks"}},"desc":"This filter eliminates answers where the Autonomous\n    System (AS) of the requester's IP does not match the list of AS\n    numbers associated with the answer.  It examines the\n    <code>asn</code> metadata field to get the allowed ASes for your\n    answers, and the AS of the requester's IP is matched against the\n    AS list to ensure IPs in their AS are allowed to receive the\n    answer.  Optionally, if no <code>asn</code> value is set for an\n    answer, this filter will not eliminate the answer.  For example,\n    if your record has one answer with <code>asn=[2914, 3257]</code>,\n    and another answer with no value for <code>asn</code>, a request\n    from an IP in AS2914 will receive both answers; a request from an\n    IP in AS701 will receive only the second answer.  If instead you\n    want the request from AS2914 to receive only the first answer,\n    enable the \"Remove answers without <code>asn</code> on match\"\n    option.  <i>Do not rely on this filter for security purposes.</i>"},"weighted_sticky":{"shortdesc":"Shuffle answers randomly per-requester based on \"weight\"","tier":2,"inputs":["weight"],"config":{"sticky_by_network":{"default":"0","required":false,"validator":"checkbox","shortdesc":"Apply stickiness by subnet (not individual IP)","type":"checkbox","desc":"All requests in the same /24 (IPv4) or /44 (IPv6) will receive the same output. Useful to help ensure users load balanced across multiple recursors get the same answer."}},"desc":"This filter is a special purpose combination of the\n        behaviors of <span class=\"filtername-2\">STICKY</span> and\n        <span class=\"filtername-2\">WEIGHTED_SHUFFLE</span> that cannot\n        be achieved by combining the individual filters.  Answers are\n        shuffled randomly based on the <code>weight</code> metadata\n        field, but the shuffling is consistently the same for the same\n        requester IP address.  Note that changing the set of answers\n        or their weights results in a reshuffling."},"shuffle":{"shortdesc":"Shuffle answers randomly","tier":2,"inputs":[],"config":{},"desc":"This filter randomly sorts the answers.  You can use it\n        in conjunction with a filter like <span\n        class=\"filtername-2\">SELECT_FIRST_N</span> to return a subset\n        of the available answers at random."},"geotarget_latlong":{"shortdesc":"Sort answers by distance to user using lat/long","tier":3,"inputs":["latitude","longitude"],"config":{},"desc":"This filter sorts answers by distance to the IP address\n        of the requester, using latitude and longitude to compute the\n        distance.  The filter examines the <code>latitude</code> and\n        <code>longitude</code> metadata fields to get the location of\n        your answers, and uses a geo-IP database to determine the\n        location of the requester.  You can use this filter with\n        another one like <span\n        class=\"filtername-2\">SELECT_FIRST_N</span> to send the user to\n        the closest answer.  If you have multiple answers in the same\n        location, you may want to first <span\n        class=\"filtername-2\">SHUFFLE</span> your answers to randomly\n        pick one of the closest ones."},"geotarget_regional":{"shortdesc":"Sort answers by distance to user by geographical region","tier":3,"inputs":["georegion"],"config":{},"desc":"This filter sorts answers by distance to the IP address\n        of the requester, by assigning answers to one or more coarse\n        geographical regions and determining which region the\n        requester is in.  The filter examines the\n        <code>georegion</code> metadata field to get the location of\n        your answers, and uses a geo-IP database to determine the\n        region of the requester.  You need not assign individual\n        answers for every region: if the requester is in a region\n        without a regional answer, they are given the closest existing\n        regional answer.  For example, if there are answers only in\n        <code>US-EAST</code> and <code>ASIAPAC</code>, but the\n        requester is in <code>US-CENTRAL</code>, they will receive the\n        <code>US-EAST</code> answer.  You can use this filter with\n        another one like <span\n        class=\"filtername-2\">SELECT_FIRST_N</span> to send the user to\n        the closest answer.  If you have multiple answers in the same\n        location, you may want to first <span\n        class=\"filtername-2\">SHUFFLE</span> your answers to randomly\n        pick one of the closest ones."},"up":{"shortdesc":"Removes \"down\" answers","tier":2,"inputs":["up"],"config":{},"desc":"This filter eliminates all answers where the <code>up</code> metadata field is not <code>true</code> (or <code>\"1\"</code>)."},"select_first_n":{"shortdesc":"Return the first \"N\" answers","tier":2,"inputs":[],"config":{"N":{"default":"1","required":false,"validator":"number","shortdesc":"Number of answers","type":"number","desc":"Number of answers to keep"}},"desc":"This filter eliminates all but the first <code>N</code>\n        answers from the list.  Use this with filters like <span\n        class=\"filtername-2\">SHUFFLE</span> or <span\n        class=\"filtername-2\">WEIGHTED_SHUFFLE</span> to implement\n        round robin or weighted round robin."},"shed_load":{"shortdesc":"Shed traffic if load is too high","tier":3,"inputs":["low_watermark","high_watermark","loadavg","connections","requests"],"config":{"metric":{"default":"loadavg","required":true,"validator":"text","shortdesc":"Load metric","type":"text","desc":"Metadata field to use with low/high watermark to determine load to shed"}},"desc":"This filter \"sheds\" traffic to answers based on load,\n    using one of several load metrics.  You must set values for\n    <code>low_watermark</code>, <code>high_watermark</code>, and the\n    configured load metric, for each answer you intend to subject to\n    load shedding.  Normally, you will configure a data feed to\n    regularly update the load metrics associated with your answers.\n    This filter will do nothing if load is below the configured \"low\n    watermark\".  If load is above the configured \"high watermark\" for\n    an answer, the answer will be eliminated.  If load is between the\n    low and high watermarks, the answer will be eliminated with\n    probability that increases as the load approaches the high\n    watermark.  The result is that an answer will be returned\n    relatively fewer times (as a percentage of requests) as load\n    increases."},"sticky_region":{"shortdesc":"Make regions \"sticky\"","tier":2,"inputs":[],"config":{"sticky_by_network":{"default":"0","required":false,"validator":"checkbox","shortdesc":"Apply stickiness by subnet (not individual IP)","type":"checkbox","desc":"All requests in the same /24 (IPv4) or /44 (IPv6) will receive the same output. Useful to help ensure users load balanced across multiple recursors get the same answer."}},"desc":"This filter first sorts regions uniquely depending on\n        the IP address of the requester, and then groups all answers\n        together by region.  The same requester always gets the same\n        ordering of regions, but answers within each region may be in\n        any order.  You can use this filter with another one like\n        <span class=\"filtername-2\">SELECT_FIRST_REGION</span> to\n        always give a user answers from the same region.  Note that\n        this filter does <i>not</i> do any geotargeting or GSLB: it\n        sorts regions randomly but consistently for each user.\n        Answers with no region defined are considered to be in the\n        same (empty) region."},"sticky":{"shortdesc":"Make answers \"sticky\"","tier":2,"inputs":[],"config":{"sticky_by_network":{"default":"0","required":false,"validator":"checkbox","shortdesc":"Apply stickiness by subnet (not individual IP)","type":"checkbox","desc":"All requests in the same /24 (IPv4) or /44 (IPv6) will receive the same output. Useful to help ensure users load balanced across multiple recursors get the same answer."}},"desc":"This filter sorts answers uniquely depending on the IP\n        address of the requester.  The same requester always gets the\n        same ordering of answers.  You can use this filter with\n        another one like <span\n        class=\"filtername-2\">SELECT_FIRST_N</span> to always give a\n        user the same answer.  Need to combine this with weighting\n        behavior?  Use <span\n        class=\"filtername-2\">WEIGHTED_STICKY</span>."},"netfence_prefix":{"shortdesc":"Restrict to answers where requester IP matches prefix list","tier":3,"inputs":["ip_prefixes"],"config":{"remove_no_ip_prefixes":{"default":"1","required":false,"validator":"checkbox","shortdesc":"Remove answers without ip_prefixes on any match","type":"checkbox","desc":"If any answers have ip_prefixes matching the\n                requester, then eliminate all answers with no\n                ip_prefixes; and if no answers match the requester,\n                return answers with no ip_prefixes as fallbacks"}},"desc":"This filter eliminates answers where the requester's IP\n    does not match the IP prefix list associated with the answer.  It\n    examines the <code>ip_prefixes</code> metadata field to get the\n    allowed prefix(es) for your answers, and the requester's IP is\n    matched against the prefix lists to ensure their IP is allowed to\n    receive the answer.  Optionally, if no <code>ip_prefixes</code>\n    value is set for an answer, this filter will not eliminate the\n    answer.  For example, if your record has one answer with\n    <code>ip_prefixes=[1.2.3.0/24, 2.3.4.0/24]</code>, and another\n    answer with no value for <code>ip_prefixes</code>, a request from\n    <code>1.2.3.4</code> will receive both answers; a request from\n    <code>5.6.7.8</code> will receive only the second answer.  If\n    instead you want the request from <code>1.2.3.4</code> to receive\n    only the first answer, enable the \"Remove answers without\n    <code>ip_prefixes</code> on match\" option.  <i>Do not rely on this\n    filter for security purposes.</i>"},"weighted_shuffle":{"shortdesc":"Shuffle answers randomly based on their \"weight\"","tier":2,"inputs":["weight"],"config":{},"desc":"This filter examines the <code>weight</code> metadata\n        field for all available answers, and reorders the answers by\n        picking them randomly based on their weights until all answers\n        have been randomly reordered.  Answers with higher weight will\n        be \"first\" more often.  You can use this filter in conjunction\n        with a filter like <span\n        class=\"filtername-2\">SELECT_FIRST_N</span> to return one or\n        more answers with probability proportional to their weights.\n        Need to combine this with \"sticky\" behavior?  Use <span\n        class=\"filtername-2\">WEIGHTED_STICKY</span>."},"geotarget_country":{"shortdesc":"Sort answers by distance to requester by country, US\n        state, and/or Canadian province","tier":3,"inputs":["country","us_state","ca_province"],"config":{},"desc":"This filter sorts answers by distance to the IP address\n        of the requester, by assigning answers to one or more\n        countries, US states, and/or Canadian provinces, and\n        determining which country (and state/province if US or Canada)\n        the user is in.  The filter examines the <code>country</code>,\n        <code>us_state</code>, and <code>ca_province</code> metadata\n        fields to get locations for your answers, and uses a geo-IP\n        database to determine the location of the requester.  You need\n        not assign individual answers for every country, state, and\n        province: if the requester is in a location without an\n        explicitly specified answer, they are given the closest\n        existing answer based on geographical distance.  For example,\n        if you set <code>country</code> to <code>JP, HK</code> (Japan\n        and Hong Kong) for one of your answers, and\n        <code>country</code> to <code>US, CA</code> (USA and Canada)\n        for the other, a user in Taiwan will be directed to the former\n        since Taiwan is close to Hong Kong.  You can use this filter\n        with another one like <span\n        class=\"filtername-2\">SELECT_FIRST_N</span> to send the user to\n        the closest answer.  If you have multiple answers in the same\n        location, you may want to first <span\n        class=\"filtername-2\">SHUFFLE</span> your answers to randomly\n        pick one of the closest ones."},"geofence_regional":{"shortdesc":"Restrict to answers in same geographical region as requester","tier":3,"inputs":["georegion"],"config":{"remove_no_georegion":{"default":"1","required":false,"validator":"checkbox","shortdesc":"Remove answers without georegion on any match","type":"checkbox","desc":"If any answers have a georegion matching the\n                requester, then eliminate all answers with no\n                georegion; and if no answers match the requester,\n                return answers with no georegion as fallbacks"}},"desc":"This filter eliminates answers in different geographical\n        regions than the requester.  It examines the\n        <code>georegion</code> metadata field to get the allowed\n        region(s) for your answers, and uses a geo-IP database to\n        determine the region of the requester.  If a\n        <code>georegion</code> value is set for an answer, and the\n        requester is not in one of the specified geographic regions,\n        the answer will not be returned.  Optionally, if no\n        <code>georegion</code> value is set for an answer, this filter\n        will not eliminate the answer.  For example, if your record\n        has one answer with a <code>georegion=[US-EAST,\n        EUROPE]</code>, and another answer with no value for\n        <code>georegion</code>, a requester in <code>US-EAST</code>\n        will receive both answers; a requester in <code>ASIAPAC</code>\n        will receive only the second answer.  If instead you want the\n        requester in <code>US-EAST</code> to receive only the first\n        answer, enable the \"Remove answers without\n        <code>georegion</code> on match\" option."},"geofence_country":{"shortdesc":"Restrict to answers in same country, US state, or\n        Canadian province as requester","tier":3,"inputs":["country","us_state","ca_province"],"config":{"remove_no_location":{"default":"1","required":false,"validator":"checkbox","shortdesc":"Remove answers without location on any match","type":"checkbox","desc":"If any answers have a location matching the\n                requester, then eliminate all answers with no location\n                metadata set; and if no answers match the requester,\n                return answers with no location as fallbacks"}},"desc":"This filter eliminates answers in different\n        country/state/province than the requester.  It examines the\n        <code>country</code>, <code>us_state</code>, and\n        <code>ca_province</code> metadata fields to get the allowed\n        locations for your answers, and uses a geo-IP database to\n        determine the location of the requester.  If any location\n        related metadata values are set for an answer, and the\n        requester is not in one of the specified locations, the answer\n        will not be returned.  Optionally, if no location values are\n        set for an answer, this filter will not eliminate the answer.\n        If you want to fence specific US states or CA provinces, you\n        should not add US or CA to the <code>country</code> list for\n        an answer."},"priority":{"shortdesc":"Failover according to prioritized answer tiers","tier":2,"inputs":["priority"],"config":{},"desc":"This filter examines the <code>priority</code> metadata field, and finds the <i>lowest</i> value of <code>priority</code> from among all answers. It then returns all the answers that have exactly that <code>priority</code> value. Use this to implement failover in conjunction with filters like <span class=\"filtername-2\">UP</span>."}}, { date: 'Fri, 18 Dec 2015 00:16:56 GMT',
  'content-type': 'application/json',
  'content-length': '17164',
  connection: 'close',
  'x-ratelimit-remaining': '895',
  etag: '"1592a03d86a40c2a429cc724e7403ae4781a3759"',
  'x-ratelimit-by': 'customer',
  server: 'NSONE API v1',
  'x-ratelimit-limit': '900',
  'x-ratelimit-period': '300',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  expires: '0' });
