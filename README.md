# NS1 JS API

Node based for the time being. Will use browserify to wrap all the code into a client side module later on.

For now, it just uses my (Sankho's) API key and account to test pinging zones via a method call `NS1.Zone.list()` contained in the file `script.js`.

### Trying it out:

`$ npm install`
`$ npm test`

Should return a JSON blob from the server w/ my zones for a domain hireanonymously.com (a dead startup idea).
