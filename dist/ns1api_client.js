(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.NS1API = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

/**
 * Expose `Emitter`.
 */

module.exports = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks[event] = this._callbacks[event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  var self = this;
  this._callbacks = this._callbacks || {};

  function on() {
    self.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks[event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks[event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks[event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks[event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],2:[function(require,module,exports){
/* global define */

(function (root, pluralize) {
  /* istanbul ignore else */
  if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
    // Node.
    module.exports = pluralize();
  } else if (typeof define === 'function' && define.amd) {
    // AMD, registers as an anonymous module.
    define(function () {
      return pluralize();
    });
  } else {
    // Browser global.
    root.pluralize = pluralize();
  }
})(this, function () {
  // Rule storage - pluralize and singularize need to be run sequentially,
  // while other rules can be optimized using an object for instant lookups.
  var pluralRules = [];
  var singularRules = [];
  var uncountables = {};
  var irregularPlurals = {};
  var irregularSingles = {};

  /**
   * Title case a string.
   *
   * @param  {string} str
   * @return {string}
   */
  function toTitleCase (str) {
    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
  }

  /**
   * Sanitize a pluralization rule to a usable regular expression.
   *
   * @param  {(RegExp|string)} rule
   * @return {RegExp}
   */
  function sanitizeRule (rule) {
    if (typeof rule === 'string') {
      return new RegExp('^' + rule + '$', 'i');
    }

    return rule;
  }

  /**
   * Pass in a word token to produce a function that can replicate the case on
   * another word.
   *
   * @param  {string}   word
   * @param  {string}   token
   * @return {Function}
   */
  function restoreCase (word, token) {
    // Upper cased words. E.g. "HELLO".
    if (word === word.toUpperCase()) {
      return token.toUpperCase();
    }

    // Title cased words. E.g. "Title".
    if (word[0] === word[0].toUpperCase()) {
      return toTitleCase(token);
    }

    // Lower cased words. E.g. "test".
    return token.toLowerCase();
  }

  /**
   * Interpolate a regexp string.
   *
   * @param  {string} str
   * @param  {Array}  args
   * @return {string}
   */
  function interpolate (str, args) {
    return str.replace(/\$(\d{1,2})/g, function (match, index) {
      return args[index] || '';
    });
  }

  /**
   * Sanitize a word by passing in the word and sanitization rules.
   *
   * @param  {String}   token
   * @param  {String}   word
   * @param  {Array}    collection
   * @return {String}
   */
  function sanitizeWord (token, word, collection) {
    // Empty string or doesn't need fixing.
    if (!token.length || uncountables.hasOwnProperty(token)) {
      return word;
    }

    var len = collection.length;

    // Iterate over the sanitization rules and use the first one to match.
    while (len--) {
      var rule = collection[len];

      // If the rule passes, return the replacement.
      if (rule[0].test(word)) {
        return word.replace(rule[0], function (match, index, word) {
          var result = interpolate(rule[1], arguments);

          if (match === '') {
            return restoreCase(word[index - 1], result);
          }

          return restoreCase(match, result);
        });
      }
    }

    return word;
  }

  /**
   * Replace a word with the updated word.
   *
   * @param  {Object}   replaceMap
   * @param  {Object}   keepMap
   * @param  {Array}    rules
   * @return {Function}
   */
  function replaceWord (replaceMap, keepMap, rules) {
    return function (word) {
      // Get the correct token and case restoration functions.
      var token = word.toLowerCase();

      // Check against the keep object map.
      if (keepMap.hasOwnProperty(token)) {
        return restoreCase(word, token);
      }

      // Check against the replacement map for a direct word replacement.
      if (replaceMap.hasOwnProperty(token)) {
        return restoreCase(word, replaceMap[token]);
      }

      // Run all the rules against the word.
      return sanitizeWord(token, word, rules);
    };
  }

  /**
   * Pluralize or singularize a word based on the passed in count.
   *
   * @param  {String}  word
   * @param  {Number}  count
   * @param  {Boolean} inclusive
   * @return {String}
   */
  function pluralize (word, count, inclusive) {
    var pluralized = count === 1
      ? pluralize.singular(word) : pluralize.plural(word);

    return (inclusive ? count + ' ' : '') + pluralized;
  }

  /**
   * Pluralize a word.
   *
   * @type {Function}
   */
  pluralize.plural = replaceWord(
    irregularSingles, irregularPlurals, pluralRules
  );

  /**
   * Singularize a word.
   *
   * @type {Function}
   */
  pluralize.singular = replaceWord(
    irregularPlurals, irregularSingles, singularRules
  );

  /**
   * Add a pluralization rule to the collection.
   *
   * @param {(string|RegExp)} rule
   * @param {string}          replacement
   */
  pluralize.addPluralRule = function (rule, replacement) {
    pluralRules.push([sanitizeRule(rule), replacement]);
  };

  /**
   * Add a singularization rule to the collection.
   *
   * @param {(string|RegExp)} rule
   * @param {string}          replacement
   */
  pluralize.addSingularRule = function (rule, replacement) {
    singularRules.push([sanitizeRule(rule), replacement]);
  };

  /**
   * Add an uncountable word rule.
   *
   * @param {(string|RegExp)} word
   */
  pluralize.addUncountableRule = function (word) {
    if (typeof word === 'string') {
      uncountables[word.toLowerCase()] = true;
      return;
    }

    // Set singular and plural references for the word.
    pluralize.addPluralRule(word, '$0');
    pluralize.addSingularRule(word, '$0');
  };

  /**
   * Add an irregular word definition.
   *
   * @param {String} single
   * @param {String} plural
   */
  pluralize.addIrregularRule = function (single, plural) {
    plural = plural.toLowerCase();
    single = single.toLowerCase();

    irregularSingles[single] = plural;
    irregularPlurals[plural] = single;
  };

  /**
   * Irregular rules.
   */
  [
    // Pronouns.
    ['I', 'we'],
    ['me', 'us'],
    ['he', 'they'],
    ['she', 'they'],
    ['them', 'them'],
    ['myself', 'ourselves'],
    ['yourself', 'yourselves'],
    ['itself', 'themselves'],
    ['herself', 'themselves'],
    ['himself', 'themselves'],
    ['themself', 'themselves'],
    ['is', 'are'],
    ['this', 'these'],
    ['that', 'those'],
    // Words ending in with a consonant and `o`.
    ['echo', 'echoes'],
    ['dingo', 'dingoes'],
    ['volcano', 'volcanoes'],
    ['tornado', 'tornadoes'],
    ['torpedo', 'torpedoes'],
    // Ends with `us`.
    ['genus', 'genera'],
    ['viscus', 'viscera'],
    // Ends with `ma`.
    ['stigma', 'stigmata'],
    ['stoma', 'stomata'],
    ['dogma', 'dogmata'],
    ['lemma', 'lemmata'],
    ['schema', 'schemata'],
    ['anathema', 'anathemata'],
    // Other irregular rules.
    ['ox', 'oxen'],
    ['axe', 'axes'],
    ['die', 'dice'],
    ['yes', 'yeses'],
    ['foot', 'feet'],
    ['eave', 'eaves'],
    ['goose', 'geese'],
    ['tooth', 'teeth'],
    ['quiz', 'quizzes'],
    ['human', 'humans'],
    ['proof', 'proofs'],
    ['carve', 'carves'],
    ['valve', 'valves'],
    ['thief', 'thieves'],
    ['genie', 'genies'],
    ['groove', 'grooves'],
    ['pickaxe', 'pickaxes'],
    ['whiskey', 'whiskies']
  ].forEach(function (rule) {
    return pluralize.addIrregularRule(rule[0], rule[1]);
  });

  /**
   * Pluralization rules.
   */
  [
    [/s?$/i, 's'],
    [/([^aeiou]ese)$/i, '$1'],
    [/(ax|test)is$/i, '$1es'],
    [/(alias|[^aou]us|tlas|gas|ris)$/i, '$1es'],
    [/(e[mn]u)s?$/i, '$1s'],
    [/([^l]ias|[aeiou]las|[emjzr]as|[iu]am)$/i, '$1'],
    [/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1i'],
    [/(alumn|alg|vertebr)(?:a|ae)$/i, '$1ae'],
    [/(seraph|cherub)(?:im)?$/i, '$1im'],
    [/(her|at|gr)o$/i, '$1oes'],
    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, '$1a'],
    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, '$1a'],
    [/sis$/i, 'ses'],
    [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, '$1$2ves'],
    [/([^aeiouy]|qu)y$/i, '$1ies'],
    [/([^ch][ieo][ln])ey$/i, '$1ies'],
    [/(x|ch|ss|sh|zz)$/i, '$1es'],
    [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, '$1ices'],
    [/(m|l)(?:ice|ouse)$/i, '$1ice'],
    [/(pe)(?:rson|ople)$/i, '$1ople'],
    [/(child)(?:ren)?$/i, '$1ren'],
    [/eaux$/i, '$0'],
    [/m[ae]n$/i, 'men'],
    ['thou', 'you']
  ].forEach(function (rule) {
    return pluralize.addPluralRule(rule[0], rule[1]);
  });

  /**
   * Singularization rules.
   */
  [
    [/s$/i, ''],
    [/(ss)$/i, '$1'],
    [/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(?:sis|ses)$/i, '$1sis'],
    [/(^analy)(?:sis|ses)$/i, '$1sis'],
    [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, '$1fe'],
    [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, '$1f'],
    [/([^aeiouy]|qu)ies$/i, '$1y'],
    [/(^[pl]|zomb|^(?:neck)?t|[aeo][lt]|cut)ies$/i, '$1ie'],
    [/(\b(?:mon|smil))ies$/i, '$1ey'],
    [/(m|l)ice$/i, '$1ouse'],
    [/(seraph|cherub)im$/i, '$1'],
    [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|tlas|gas|(?:her|at|gr)o|ris)(?:es)?$/i, '$1'],
    [/(e[mn]u)s?$/i, '$1'],
    [/(movie|twelve)s$/i, '$1'],
    [/(cris|test|diagnos)(?:is|es)$/i, '$1is'],
    [/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1us'],
    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, '$1um'],
    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, '$1on'],
    [/(alumn|alg|vertebr)ae$/i, '$1a'],
    [/(cod|mur|sil|vert|ind)ices$/i, '$1ex'],
    [/(matr|append)ices$/i, '$1ix'],
    [/(pe)(rson|ople)$/i, '$1rson'],
    [/(child)ren$/i, '$1'],
    [/(eau)x?$/i, '$1'],
    [/men$/i, 'man']
  ].forEach(function (rule) {
    return pluralize.addSingularRule(rule[0], rule[1]);
  });

  /**
   * Uncountable rules.
   */
  [
    // Singular words with no plurals.
    'advice',
    'agenda',
    'bison',
    'bream',
    'buffalo',
    'carp',
    'chassis',
    'cod',
    'cooperation',
    'corps',
    'digestion',
    'debris',
    'diabetes',
    'energy',
    'equipment',
    'elk',
    'excretion',
    'expertise',
    'flounder',
    'gallows',
    'garbage',
    'graffiti',
    'headquarters',
    'health',
    'herpes',
    'highjinks',
    'homework',
    'information',
    'jeans',
    'justice',
    'kudos',
    'labour',
    'machinery',
    'mackerel',
    'media',
    'mews',
    'moose',
    'news',
    'pike',
    'plankton',
    'pliers',
    'pollution',
    'premises',
    'rain',
    'rice',
    'salmon',
    'scissors',
    'series',
    'sewage',
    'shambles',
    'shrimp',
    'species',
    'staff',
    'swine',
    'trout',
    'tuna',
    'whiting',
    'wildebeest',
    'wildlife',
    'you',
    // Regexes.
    /pox$/i, // "chickpox", "smallpox"
    /ois$/i,
    /deer$/i, // "deer", "reindeer"
    /fish$/i, // "fish", "blowfish", "angelfish"
    /sheep$/i,
    /measles$/i,
    /[^aeiou]ese$/i // "chinese", "japanese"
  ].forEach(pluralize.addUncountableRule);

  return pluralize;
});

},{}],3:[function(require,module,exports){

/**
 * Reduce `arr` with `fn`.
 *
 * @param {Array} arr
 * @param {Function} fn
 * @param {Mixed} initial
 *
 * TODO: combatible error handling?
 */

module.exports = function(arr, fn, initial){  
  var idx = 0;
  var len = arr.length;
  var curr = arguments.length == 3
    ? initial
    : arr[idx++];

  while (idx < len) {
    curr = fn.call(null, curr, arr[idx], ++idx, arr);
  }
  
  return curr;
};
},{}],4:[function(require,module,exports){
/**
 * Module dependencies.
 */

var Emitter = require('emitter');
var reduce = require('reduce');

/**
 * Root reference for iframes.
 */

var root;
if (typeof window !== 'undefined') { // Browser window
  root = window;
} else if (typeof self !== 'undefined') { // Web Worker
  root = self;
} else { // Other environments
  root = this;
}

/**
 * Noop.
 */

function noop(){};

/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * TODO: future proof, move to compoent land
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isHost(obj) {
  var str = {}.toString.call(obj);

  switch (str) {
    case '[object File]':
    case '[object Blob]':
    case '[object FormData]':
      return true;
    default:
      return false;
  }
}

/**
 * Determine XHR.
 */

request.getXHR = function () {
  if (root.XMLHttpRequest
      && (!root.location || 'file:' != root.location.protocol
          || !root.ActiveXObject)) {
    return new XMLHttpRequest;
  } else {
    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
  }
  return false;
};

/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */

var trim = ''.trim
  ? function(s) { return s.trim(); }
  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isObject(obj) {
  return obj === Object(obj);
}

/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];
  for (var key in obj) {
    if (null != obj[key]) {
      pushEncodedKeyValuePair(pairs, key, obj[key]);
        }
      }
  return pairs.join('&');
}

/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */

function pushEncodedKeyValuePair(pairs, key, val) {
  if (Array.isArray(val)) {
    return val.forEach(function(v) {
      pushEncodedKeyValuePair(pairs, key, v);
    });
  }
  pairs.push(encodeURIComponent(key)
    + '=' + encodeURIComponent(val));
}

/**
 * Expose serialization method.
 */

 request.serializeObject = serialize;

 /**
  * Parse the given x-www-form-urlencoded `str`.
  *
  * @param {String} str
  * @return {Object}
  * @api private
  */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var parts;
  var pair;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    parts = pair.split('=');
    obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
  }

  return obj;
}

/**
 * Expose parser.
 */

request.parseString = parseString;

/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'application/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  'form': 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};

/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

 request.serialize = {
   'application/x-www-form-urlencoded': serialize,
   'application/json': JSON.stringify
 };

 /**
  * Default parsers.
  *
  *     superagent.parse['application/xml'] = function(str){
  *       return { object parsed from str };
  *     };
  *
  */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};

/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  lines.pop(); // trailing CRLF

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');
    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}

/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function type(str){
  return str.split(/ *; */).shift();
};

/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function params(str){
  return reduce(str.split(/ *; */), function(obj, str){
    var parts = str.split(/ *= */)
      , key = parts.shift()
      , val = parts.shift();

    if (key && val) obj[key] = val;
    return obj;
  }, {});
};

/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */

function Response(req, options) {
  options = options || {};
  this.req = req;
  this.xhr = this.req.xhr;
  // responseText is accessible only if responseType is '' or 'text' and on older browsers
  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
     ? this.xhr.responseText
     : null;
  this.statusText = this.req.xhr.statusText;
  this.setStatusProperties(this.xhr.status);
  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.
  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
  this.setHeaderProperties(this.header);
  this.body = this.req.method != 'HEAD'
    ? this.parseBody(this.text ? this.text : this.xhr.response)
    : null;
}

/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

Response.prototype.get = function(field){
  return this.header[field.toLowerCase()];
};

/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */

Response.prototype.setHeaderProperties = function(header){
  // content-type
  var ct = this.header['content-type'] || '';
  this.type = type(ct);

  // params
  var obj = params(ct);
  for (var key in obj) this[key] = obj[key];
};

/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype.parseBody = function(str){
  var parse = request.parse[this.type];
  return parse && str && (str.length || str instanceof Object)
    ? parse(str)
    : null;
};

/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */

Response.prototype.setStatusProperties = function(status){
  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
  if (status === 1223) {
    status = 204;
  }

  var type = status / 100 | 0;

  // status / class
  this.status = this.statusCode = status;
  this.statusType = type;

  // basics
  this.info = 1 == type;
  this.ok = 2 == type;
  this.clientError = 4 == type;
  this.serverError = 5 == type;
  this.error = (4 == type || 5 == type)
    ? this.toError()
    : false;

  // sugar
  this.accepted = 202 == status;
  this.noContent = 204 == status;
  this.badRequest = 400 == status;
  this.unauthorized = 401 == status;
  this.notAcceptable = 406 == status;
  this.notFound = 404 == status;
  this.forbidden = 403 == status;
};

/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

Response.prototype.toError = function(){
  var req = this.req;
  var method = req.method;
  var url = req.url;

  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;

  return err;
};

/**
 * Expose `Response`.
 */

request.Response = Response;

/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  Emitter.call(this);
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {};
  this._header = {};
  this.on('end', function(){
    var err = null;
    var res = null;

    try {
      res = new Response(self);
    } catch(e) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = e;
      return self.callback(err);
    }

    self.emit('response', res);

    if (err) {
      return self.callback(err, res);
    }

    if (res.status >= 200 && res.status < 300) {
      return self.callback(err, res);
    }

    var new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
    new_err.original = err;
    new_err.response = res;
    new_err.status = res.status;

    self.callback(new_err, res);
  });
}

/**
 * Mixin `Emitter`.
 */

Emitter(Request.prototype);

/**
 * Allow for extension
 */

Request.prototype.use = function(fn) {
  fn(this);
  return this;
}

/**
 * Set timeout to `ms`.
 *
 * @param {Number} ms
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.timeout = function(ms){
  this._timeout = ms;
  return this;
};

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.clearTimeout = function(){
  this._timeout = 0;
  clearTimeout(this._timer);
  return this;
};

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */

Request.prototype.abort = function(){
  if (this.aborted) return;
  this.aborted = true;
  this.xhr.abort();
  this.clearTimeout();
  this.emit('abort');
  return this;
};

/**
 * Set header `field` to `val`, or multiple fields with one object.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.set = function(field, val){
  if (isObject(field)) {
    for (var key in field) {
      this.set(key, field[key]);
    }
    return this;
  }
  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};

/**
 * Remove header `field`.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.unset = function(field){
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};

/**
 * Get case-insensitive header `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api private
 */

Request.prototype.getHeader = function(field){
  return this._header[field.toLowerCase()];
};

/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function(type){
  this.set('Content-Type', request.types[type] || type);
  return this;
};

/**
 * Force given parser
 *
 * Sets the body parser no matter type.
 *
 * @param {Function}
 * @api public
 */

Request.prototype.parse = function(fn){
  this._parser = fn;
  return this;
};

/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.accept = function(type){
  this.set('Accept', request.types[type] || type);
  return this;
};

/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} pass
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth = function(user, pass){
  var str = btoa(user + ':' + pass);
  this.set('Authorization', 'Basic ' + str);
  return this;
};

/**
* Add query-string `val`.
*
* Examples:
*
*   request.get('/shoes')
*     .query('size=10')
*     .query({ color: 'blue' })
*
* @param {Object|String} val
* @return {Request} for chaining
* @api public
*/

Request.prototype.query = function(val){
  if ('string' != typeof val) val = serialize(val);
  if (val) this._query.push(val);
  return this;
};

/**
 * Write the field `name` and `val` for "multipart/form-data"
 * request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 * ```
 *
 * @param {String} name
 * @param {String|Blob|File} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.field = function(name, val){
  if (!this._formData) this._formData = new root.FormData();
  this._formData.append(name, val);
  return this;
};

/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `filename`.
 *
 * ``` js
 * request.post('/upload')
 *   .attach(new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String} filename
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach = function(field, file, filename){
  if (!this._formData) this._formData = new root.FormData();
  this._formData.append(field, file, filename);
  return this;
};

/**
 * Send `data`, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // querystring
 *       request.get('/search')
 *         .end(callback)
 *
 *       // multiple data "writes"
 *       request.get('/search')
 *         .send({ search: 'query' })
 *         .send({ range: '1..5' })
 *         .send({ order: 'desc' })
 *         .end(callback)
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
  *      request.post('/user')
  *        .send('name=tobi')
  *        .send('species=ferret')
  *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.send = function(data){
  var obj = isObject(data);
  var type = this.getHeader('Content-Type');

  // merge
  if (obj && isObject(this._data)) {
    for (var key in data) {
      this._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    if (!type) this.type('form');
    type = this.getHeader('Content-Type');
    if ('application/x-www-form-urlencoded' == type) {
      this._data = this._data
        ? this._data + '&' + data
        : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!obj || isHost(data)) return this;
  if (!type) this.type('json');
  return this;
};

/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

Request.prototype.callback = function(err, res){
  var fn = this._callback;
  this.clearTimeout();
  fn(err, res);
};

/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */

Request.prototype.crossDomainError = function(){
  var err = new Error('Origin is not allowed by Access-Control-Allow-Origin');
  err.crossDomain = true;
  this.callback(err);
};

/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

Request.prototype.timeoutError = function(){
  var timeout = this._timeout;
  var err = new Error('timeout of ' + timeout + 'ms exceeded');
  err.timeout = timeout;
  this.callback(err);
};

/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */

Request.prototype.withCredentials = function(){
  this._withCredentials = true;
  return this;
};

/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.end = function(fn){
  var self = this;
  var xhr = this.xhr = request.getXHR();
  var query = this._query.join('&');
  var timeout = this._timeout;
  var data = this._formData || this._data;

  // store callback
  this._callback = fn || noop;

  // state change
  xhr.onreadystatechange = function(){
    if (4 != xhr.readyState) return;

    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"
    var status;
    try { status = xhr.status } catch(e) { status = 0; }

    if (0 == status) {
      if (self.timedout) return self.timeoutError();
      if (self.aborted) return;
      return self.crossDomainError();
    }
    self.emit('end');
  };

  // progress
  var handleProgress = function(e){
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;
    }
    self.emit('progress', e);
  };
  if (this.hasListeners('progress')) {
    xhr.onprogress = handleProgress;
  }
  try {
    if (xhr.upload && this.hasListeners('progress')) {
      xhr.upload.onprogress = handleProgress;
    }
  } catch(e) {
    // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
    // Reported here:
    // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
  }

  // timeout
  if (timeout && !this._timer) {
    this._timer = setTimeout(function(){
      self.timedout = true;
      self.abort();
    }, timeout);
  }

  // querystring
  if (query) {
    query = request.serializeObject(query);
    this.url += ~this.url.indexOf('?')
      ? '&' + query
      : '?' + query;
  }

  // initiate request
  xhr.open(this.method, this.url, true);

  // CORS
  if (this._withCredentials) xhr.withCredentials = true;

  // body
  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !isHost(data)) {
    // serialize stuff
    var contentType = this.getHeader('Content-Type');
    var serialize = this._parser || request.serialize[contentType ? contentType.split(';')[0] : ''];
    if (serialize) data = serialize(data);
  }

  // set header fields
  for (var field in this.header) {
    if (null == this.header[field]) continue;
    xhr.setRequestHeader(field, this.header[field]);
  }

  // send stuff
  this.emit('request', this);

  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
  // We need null here if data is undefined
  xhr.send(typeof data !== 'undefined' ? data : null);
  return this;
};

/**
 * Faux promise support
 *
 * @param {Function} fulfill
 * @param {Function} reject
 * @return {Request}
 */

Request.prototype.then = function (fulfill, reject) {
  return this.end(function(err, res) {
    err ? reject(err) : fulfill(res);
  });
}

/**
 * Expose `Request`.
 */

request.Request = Request;

/**
 * Issue a request:
 *
 * Examples:
 *
 *    request('GET', '/users').end(callback)
 *    request('/users').end(callback)
 *    request('/users', callback)
 *
 * @param {String} method
 * @param {String|Function} url or callback
 * @return {Request}
 * @api public
 */

function request(method, url) {
  // callback
  if ('function' == typeof url) {
    return new Request('GET', method).end(url);
  }

  // url first
  if (1 == arguments.length) {
    return new Request('GET', method);
  }

  return new Request(method, url);
}

/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.get = function(url, data, fn){
  var req = request('GET', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.head = function(url, data, fn){
  var req = request('HEAD', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * DELETE `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

function del(url, fn){
  var req = request('DELETE', url);
  if (fn) req.end(fn);
  return req;
};

request.del = del;
request.delete = del;

/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} data
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.patch = function(url, data, fn){
  var req = request('PATCH', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} data
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.post = function(url, data, fn){
  var req = request('POST', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.put = function(url, data, fn){
  var req = request('PUT', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * Expose `request`.
 */

module.exports = request;

},{"emitter":1,"reduce":3}],5:[function(require,module,exports){
module.exports={
  "name": "ns1",
  "version": "0.1.10",
  "description": "NS1.com JS API",
  "main": "lib/index.js",
  "scripts": {
    "test": "NS1_JS_TEST_API_KEY=x NS1_JS_TEST_API_URL='https://portal.vagrant.nsone.net/v1' NODE_TLS_REJECT_UNAUTHORIZED=0 babel-node ./node_modules/.bin/babel-istanbul cover ./node_modules/mocha/bin/_mocha -- --full-trace test/**/*_test.js",
    "test-and-record": "NS1_NOCK_RECORD=true npm run test",
    "create-browser-script": "browserify src/index.js -s NS1API -o dist/ns1api_client.js -t [ babelify --presets [ es2015 ] ]",
    "build": "babel src --presets es2015 --out-dir lib",
    "doc": "rm -rf docs/ && jsdoc src/**.js README.md -d docs",
    "gh-pages": "npm run doc && git branch -D gh-pages; git checkout --orphan gh-pages && find . -maxdepth 1 ! -name 'docs' ! -name '.*' | xargs rm -rf && mv docs/* . && git add --all . && git commit -am 'documentation' && git push origin gh-pages --force && git checkout develop"
  },
  "repository": {
    "type": "git",
    "url": "git@github.com:ns1/ns1-js.git"
  },
  "author": "",
  "license": "MIT",
  "homepage": "https://github.com/ns1/ns1-js",
  "dependencies": {
    "babel": "6.3.13",
    "babel-cli": "6.3.17",
    "babel-istanbul": "0.5.9",
    "babel-preset-es2015": "6.3.13",
    "babelify": "7.2.0",
    "browserify": "12.0.1",
    "nock": "3.4.0",
    "pluralize": "1.2.1",
    "superagent": "1.5.0"
  },
  "devDependencies": {
    "chai": "3.4.1",
    "change-case": "2.3.0",
    "mocha": "2.3.4",
    "jsdoc": "3.4.0",
    "babel-plugin-transform-es2015-destructuring": "6.3.15"
  }
}

},{}],6:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var superagent = require('superagent');

var api_key = void 0,
    api_url = 'https://api.nsone.net/v1/',
    errorCb = void 0,
    successCb = void 0,
    startCb = void 0;

/** 
 * Class representing all HTTP requests to the NS1 API. Uses the superagent
 * lib to be cross compatible w/ Node.js and Browser based environment.
 * @memberof NS1
 */

var NS1Request = function () {

  /**
   * Creates a request and returns a promise object for that request.
   * @param {String} method - The HTTP verb to use in this request e.g. get, post, etc. Must be lower case.
   * @param {String} uri    - The URI to query against the base API URL
   * @param {Object} query  - Any parameters to be sent in the query string for GET requests or in the req body for others
   * @param {Object/FormData} files  - Key / value mapped object containing file paths for uploads, or a FormData object if on the browser.
   * @return {Promise} an ES2015 promise w/ then and catch methods for continuation handling.
   */
  function NS1Request(method, uri, query, files) {
    _classCallCheck(this, NS1Request);

    if (uri[0] === '/') {
      uri = uri.substring(1);
    }

    this.method = method;
    this.uri = uri;
    this.is_json_response = true; // flag to adjust later on when dealing with binary file responses

    this.request = superagent[method].apply(superagent, ['' + api_url + uri]).set('X-NSONE-Key', api_key).set('X-NSONE-Js-Api', require('../package.json').version);

    apply_data.call(this, query, files);
    return create_promise.call(this);
  }

  /**
   * Returns the current API key being used by the class.
   * @return {String} The API key
   */


  _createClass(NS1Request, null, [{
    key: 'get_api_key',
    value: function get_api_key() {
      return api_key;
    }

    /**
     * Sets the API key used by the class.
     * @param {String} key - The API key supplied by the user
     * @param {Function} start - function reference to be called whenever a request is made.
     * @param {Function} error - function reference to be called when a request has an error.
     * @param {Function} success - function reference to be called whenever a request completes successfully.
     */

  }, {
    key: 'set_api_key',
    value: function set_api_key(key, start, error, success) {
      api_key = key;
      errorCb = error ? error : undefined;
      startCb = start ? start : undefined;
      successCb = success ? success : undefined;
    }

    /**
     * Returns the current API url base being used.
     * @return {String} The API url
     */

  }, {
    key: 'get_api_url',
    value: function get_api_url() {
      return api_url;
    }

    /**
     * Sets the API url used by the class.
     * @param {String} root - The URL to set as the base for API calls
     */

  }, {
    key: 'set_api_url',
    value: function set_api_url(root) {
      if (root[root.length - 1] !== '/') {
        root = root + '/';
      }
      api_url = root;
    }
  }]);

  return NS1Request;
}();

/**
 * Applies data to the this.request superagent object. Works with query params or
 * file attachments.
 *
 * @param {Object} query  - Any parameters to be sent in the query string for GET requests or in the req body for others
 * @param {Object/FormData} files  - Key / value mapped object containing file paths for uploads, or a FormData object if it's coming from the browser
 * @private
 */


function apply_data(query, files) {
  var _this = this;

  if (startCb) {
    startCb();
  }
  if (query !== undefined) {
    if (this.method === 'get') {
      this.request = this.request.query(query);
    } else {
      this.request = this.request.send(query);
    }
  }

  if (files !== undefined) {
    if (files instanceof FormData) {
      this.request = this.request.send(files);
    } else {
      Object.keys(files).forEach(function (key) {
        _this.request = _this.request.attach(key, files[key]);
      });
    }
  }
}

/**
 * Creates an ES2015 Promise which parses the message internally as JSON and
 * returns it as the resolve() method's sole argument.
 *
 * @return {Promise}
 * @private
 */
function create_promise() {
  var _this2 = this;

  return new Promise(function (resolve, reject) {
    _this2.request.end(function (err, response) {
      if (err) {
        reject(handle_error.call(_this2, err, response));
      } else {
        if (successCb) {
          successCb(response);
        }
      }

      if (_this2.is_json_response && _this2.method != 'del' && response.text !== '') {
        try {
          var parsed = JSON.parse(response.text);
        } catch (parse_err) {
          return reject(new NS1Error('NS1 API Response couldn\'t parse as JSON: ' + parse_err));
        }
      } else {
        // TODO: Determine if there's a need to filter/reject empty response bodies on 200's
      }
      return resolve(parsed || true);
    });
  });
}

/**
 * Handles error messaging. Some errors will come back as JSON w/ the error details
 * in the message field of the returning object. Other times JSOn won't be able to parse.
 * This should return an appropriate JS Error object w/ the right message.
 *
 * @param {Error} err
 * @param {String} response
 * @return {Error}
 * @private
 */
function handle_error(err, response) {
  if (errorCb) {
    errorCb(err, response);
  }
  if (response && response.text) {
    var final_message = void 0;
    try {
      final_message = JSON.parse(response.text).message;
    } catch (e) {
      final_message = response.text;
    }
    return new NS1Error('NS1 API Request Failed on \n ' + this.method.toUpperCase() + ' ' + api_url + this.uri + ' \n ' + final_message + ' \n', final_message);
  } else {
    return new NS1Error('NS1 API Request Failed on \n ' + this.method.toUpperCase() + ' ' + api_url + this.uri + ' \n ' + err.message + ' \n', err.message);
  }
}

var NS1Error = function (_Error) {
  _inherits(NS1Error, _Error);

  function NS1Error(message, raw) {
    _classCallCheck(this, NS1Error);

    var _this3 = _possibleConstructorReturn(this, (NS1Error.__proto__ || Object.getPrototypeOf(NS1Error)).call(this, message));

    _this3.raw = raw;
    return _this3;
  }

  return NS1Error;
}(Error);

module.exports = NS1Request;

},{"../package.json":5,"superagent":4}],7:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NS1Request = require('../NS1_request'),
    RestResource = require('../rest_resource');

var ApiKey = function (_RestResource) {
  _inherits(ApiKey, _RestResource);

  function ApiKey() {
    _classCallCheck(this, ApiKey);

    return _possibleConstructorReturn(this, (ApiKey.__proto__ || Object.getPrototypeOf(ApiKey)).apply(this, arguments));
  }

  _createClass(ApiKey, [{
    key: 'get_resource_path',
    value: function get_resource_path() {
      return this.constructor.get_base_path() + '/' + this.attributes.id;
    }
  }, {
    key: 'create_resource_path',
    value: function create_resource_path() {
      return this.constructor.get_base_path();
    }
  }], [{
    key: 'get_base_path',
    value: function get_base_path() {
      return 'account/apikeys';
    }
  }]);

  return ApiKey;
}(RestResource);

module.exports = ApiKey;

},{"../NS1_request":6,"../rest_resource":18}],8:[function(require,module,exports){
"use strict";

var NS1Request = require('../NS1_request'),
    PaymentMethod = require('./payment_method'),
    User = require('./user'),
    ApiKey = require('./api_key'),
    Team = require('./team');

var Account = {

  PaymentMethod: PaymentMethod,
  User: User,
  ApiKey: ApiKey,
  Team: Team,

  settings: function settings(changes) {
    return post_changes_or_get_results.call(this, '/account/settings', changes);
  },
  usage_warnings: function usage_warnings(changes) {
    return post_changes_or_get_results.call(this, '/account/usagewarnings', changes);
  },
  plan_types: function plan_types() {
    return new NS1Request('get', '/account/plantypes');
  },
  plan: function plan(changes) {
    return post_changes_or_get_results.call(this, '/account/plan', changes);
  },
  invoice: function invoice(id) {
    if (id) {
      return new NS1Request('get', '/account/invoices/' + id);
    } else {
      return new NS1Request('get', '/account/invoices');
    }
  },
  invoices: function invoices() {
    return this.invoice();
  },
  bill_at_a_glance: function bill_at_a_glance() {
    return new NS1Request('get', '/account/billataglance');
  },
  activity: function activity(params) {
    return new NS1Request('get', '/account/activity', params);
  }
};

function post_changes_or_get_results(uri, changes) {
  if (changes) {
    return new NS1Request('post', uri, changes);
  } else {
    return new NS1Request('get', uri);
  }
}

module.exports = Account;

},{"../NS1_request":6,"./api_key":7,"./payment_method":9,"./team":10,"./user":11}],9:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NS1Request = require('../NS1_request'),
    RestResource = require('../rest_resource');

var PaymentMethod = function (_RestResource) {
  _inherits(PaymentMethod, _RestResource);

  function PaymentMethod() {
    _classCallCheck(this, PaymentMethod);

    return _possibleConstructorReturn(this, (PaymentMethod.__proto__ || Object.getPrototypeOf(PaymentMethod)).apply(this, arguments));
  }

  _createClass(PaymentMethod, [{
    key: 'get_resource_path',
    value: function get_resource_path() {
      return this.constructor.get_base_path() + '/' + this.attributes.id;
    }
  }, {
    key: 'create_resource_path',
    value: function create_resource_path() {
      return this.constructor.get_base_path();
    }
  }, {
    key: 'set_as_default',
    value: function set_as_default() {
      return new NS1Request('post', '' + this.get_resource_path());
    }
  }], [{
    key: 'get_base_path',
    value: function get_base_path() {
      return 'account/paymentmethods';
    }
  }]);

  return PaymentMethod;
}(RestResource);

module.exports = PaymentMethod;

},{"../NS1_request":6,"../rest_resource":18}],10:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NS1Request = require('../NS1_request'),
    RestResource = require('../rest_resource');

var Team = function (_RestResource) {
  _inherits(Team, _RestResource);

  function Team() {
    _classCallCheck(this, Team);

    return _possibleConstructorReturn(this, (Team.__proto__ || Object.getPrototypeOf(Team)).apply(this, arguments));
  }

  _createClass(Team, [{
    key: 'get_resource_path',
    value: function get_resource_path() {
      return this.constructor.get_base_path() + '/' + this.attributes.id;
    }
  }, {
    key: 'create_resource_path',
    value: function create_resource_path() {
      return this.constructor.get_base_path();
    }
  }], [{
    key: 'get_base_path',
    value: function get_base_path() {
      return 'account/teams';
    }
  }]);

  return Team;
}(RestResource);

module.exports = Team;

},{"../NS1_request":6,"../rest_resource":18}],11:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NS1Request = require('../NS1_request'),
    RestResource = require('../rest_resource');

var User = function (_RestResource) {
  _inherits(User, _RestResource);

  function User() {
    _classCallCheck(this, User);

    return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
  }

  _createClass(User, [{
    key: 'get_resource_path',
    value: function get_resource_path() {
      return this.constructor.get_base_path() + '/' + this.attributes.username;
    }
  }, {
    key: 'create_resource_path',
    value: function create_resource_path() {
      return this.get_resource_path();
    }
  }, {
    key: 'reinvite',
    value: function reinvite() {
      return new NS1Request('post', '/account/reinvite/' + this.attributes.username);
    }
  }], [{
    key: 'get_base_path',
    value: function get_base_path() {
      return 'account/users';
    }
  }]);

  return User;
}(RestResource);

module.exports = User;

},{"../NS1_request":6,"../rest_resource":18}],12:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RestResource = require('./rest_resource');
var NS1Request = require('./NS1_request');

/**
 * Class representing data sources in NS1.
 *
 * @extends RestResource
 * @memberof NS1
 */

var DataFeed = function (_RestResource) {
  _inherits(DataFeed, _RestResource);

  function DataFeed(attributes, from_server) {
    _classCallCheck(this, DataFeed);

    var data_source_id = attributes.data_source_id;
    delete attributes.data_source_id;

    var _this = _possibleConstructorReturn(this, (DataFeed.__proto__ || Object.getPrototypeOf(DataFeed)).call(this, attributes, from_server));

    _this.data_source_id = data_source_id;
    return _this;
  }

  _createClass(DataFeed, [{
    key: 'get_resource_path',
    value: function get_resource_path() {
      return this.constructor.get_base_path() + '/' + this.data_source_id + '/' + this.attributes.id;
    }
  }, {
    key: 'create_resource_path',
    value: function create_resource_path() {
      return this.constructor.get_base_path() + '/' + this.data_source_id;
    }
  }, {
    key: 'save',
    value: function save() {
      var _this2 = this;

      var data_source_id = this.data_source_id;
      return new Promise(function (resolve, reject) {
        return _get(DataFeed.prototype.__proto__ || Object.getPrototypeOf(DataFeed.prototype), 'save', _this2).call(_this2).then(function (results) {
          resolve(_this2.constructor.add_data_source_to_objects(results, data_source_id));
        }).catch(function (err) {
          reject(err);
        });
      });
    }
  }], [{
    key: 'get_base_path',
    value: function get_base_path() {
      return 'data/feeds';
    }
  }, {
    key: 'find',
    value: function find(id) {
      var _this3 = this;

      var data_source_id = id.split('/')[0];
      return new Promise(function (resolve, reject) {
        return _get(DataFeed.__proto__ || Object.getPrototypeOf(DataFeed), 'find', _this3).call(_this3, id).then(function (results) {
          resolve(_this3.add_data_source_to_objects(results, data_source_id));
        }).catch(function (err) {
          reject(err);
        });
      });
    }
  }, {
    key: 'add_data_source_to_objects',
    value: function add_data_source_to_objects(data, data_source_id) {
      if (Array.isArray(data)) {
        return data.map(function (item, index, arr) {
          item.data_source_id = data_source_id;
          return item;
        });
      } else {
        data.data_source_id = data_source_id;
        return data;
      }
    }
  }]);

  return DataFeed;
}(RestResource);

module.exports = DataFeed;

},{"./NS1_request":6,"./rest_resource":18}],13:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RestResource = require('./rest_resource');
var NS1Request = require('./NS1_request');

/**
 * Class representing data sources in NS1.
 *
 * @extends RestResource
 * @memberof NS1
 */

var DataSource = function (_RestResource) {
  _inherits(DataSource, _RestResource);

  function DataSource() {
    _classCallCheck(this, DataSource);

    return _possibleConstructorReturn(this, (DataSource.__proto__ || Object.getPrototypeOf(DataSource)).apply(this, arguments));
  }

  _createClass(DataSource, [{
    key: 'get_resource_path',
    value: function get_resource_path() {
      return this.constructor.get_base_path() + '/' + this.attributes.id;
    }
  }, {
    key: 'create_resource_path',
    value: function create_resource_path() {
      return this.constructor.get_base_path();
    }
  }, {
    key: 'feed',


    /**
     * Manually send data to your data source with this method.
     *
     * @param {Object} contents
     * @param {String} method (defaults to post)
     * @return {Promise}
     */
    value: function feed(contents, method) {
      method = method || 'post';
      return new NS1Request(method, '/feed/' + this.attributes.id, contents);
    }
  }], [{
    key: 'get_base_path',
    value: function get_base_path() {
      return 'data/sources';
    }
  }, {
    key: 'types',
    value: function types() {
      return new NS1Request('get', '/data/sourcetypes');
    }
  }]);

  return DataSource;
}(RestResource);

module.exports = DataSource;

},{"./NS1_request":6,"./rest_resource":18}],14:[function(require,module,exports){
"use strict";

/**
 * Base NS1 Module.
 * @namespace NS1
 */

var NS1 = {
  // base resources
  Zone: require('./zone'),
  Record: require('./record'),
  DataSource: require('./data_source'),
  DataFeed: require('./data_feed'),
  Monitor: require('./monitor'),
  NotificationList: require('./notification_list'),
  Stats: require('./stats'),
  Account: require('./account'),

  // helper classes
  NS1Request: require('./NS1_request'),
  Search: require('./search'),

  // convenience methods
  set_api_key: function set_api_key(key, start, err, success) {
    return NS1.NS1Request.set_api_key(key, start, err, success);
  },
  set_api_url: function set_api_url(url) {
    return NS1.NS1Request.set_api_url(url);
  }
};

module.exports = NS1;

},{"./NS1_request":6,"./account":8,"./data_feed":12,"./data_source":13,"./monitor":15,"./notification_list":16,"./record":17,"./search":19,"./stats":20,"./zone":21}],15:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RestResource = require('./rest_resource');
var NS1Request = require('./NS1_request');

/**
 * Class representing monitors / monitoring jobs in NS1.
 *
 * @extends RestResource
 * @memberof NS1
 */

var Monitor = function (_RestResource) {
  _inherits(Monitor, _RestResource);

  function Monitor() {
    _classCallCheck(this, Monitor);

    return _possibleConstructorReturn(this, (Monitor.__proto__ || Object.getPrototypeOf(Monitor)).apply(this, arguments));
  }

  _createClass(Monitor, [{
    key: 'get_resource_path',
    value: function get_resource_path() {
      return this.constructor.get_base_path() + '/' + this.attributes.id;
    }
  }, {
    key: 'create_resource_path',
    value: function create_resource_path() {
      return this.constructor.get_base_path();
    }

    /**
     * Returns history of monitor object.
     *
     * @param {Object} args - Arguments to be supplied to refine the request, see https://ns1.com/api/#history-get for details
     * @returns Promise
     */

  }, {
    key: 'history',
    value: function history(args) {
      return new NS1Request('get', '/monitoring/history/' + this.attributes.id, args);
    }

    /**
     * Returns metrics of monitor object.
     *
     * @param {Object} args - Arguments to be supplied to refine the request, see https://ns1.com/api/#metrics-get for details
     * @returns Promise
     */

  }, {
    key: 'metrics',
    value: function metrics(args) {
      return new NS1Request('get', '/monitoring/metrics/' + this.attributes.id, args);
    }

    /**
     * Returns job types xxxf Monitor.
     *
     * @returns Promise
     */

  }], [{
    key: 'get_base_path',
    value: function get_base_path() {
      return 'monitoring/jobs';
    }
  }, {
    key: 'jobtypes',
    value: function jobtypes() {
      return new NS1Request('get', '/monitoring/jobtypes');
    }

    /**
     * Returns region keys available to Monitors.
     *
     * @returns Promise
     */

  }, {
    key: 'regions',
    value: function regions() {
      return new NS1Request('get', '/monitoring/regions');
    }
  }]);

  return Monitor;
}(RestResource);

module.exports = Monitor;

},{"./NS1_request":6,"./rest_resource":18}],16:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RestResource = require('./rest_resource');
var NS1Request = require('./NS1_request');

/**
 * Class representing Notification Lists in NS1
 *
 * @extends RestResource
 * @memberof NS1
 */

var NotificationList = function (_RestResource) {
  _inherits(NotificationList, _RestResource);

  function NotificationList() {
    _classCallCheck(this, NotificationList);

    return _possibleConstructorReturn(this, (NotificationList.__proto__ || Object.getPrototypeOf(NotificationList)).apply(this, arguments));
  }

  _createClass(NotificationList, [{
    key: 'get_resource_path',
    value: function get_resource_path() {
      return this.constructor.get_base_path() + '/' + this.attributes.id;
    }
  }, {
    key: 'create_resource_path',
    value: function create_resource_path() {
      return this.constructor.get_base_path();
    }

    /**
     * Returns the different notifier types (e.g. Email, slack, etc)
     *
     * @returns Promise
     */

  }], [{
    key: 'get_base_path',
    value: function get_base_path() {
      return 'lists';
    }
  }, {
    key: 'types',
    value: function types() {
      return new NS1Request('get', '/notifytypes');
    }
  }]);

  return NotificationList;
}(RestResource);

module.exports = NotificationList;

},{"./NS1_request":6,"./rest_resource":18}],17:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RestResource = require('./rest_resource');
var NS1Request = require('./NS1_request');
var Stats = require('./stats');

/**
 * Class representing all "records" in NS1.
 *
 * @extends RestResource
 * @memberof NS1
 */

var Record = function (_RestResource) {
  _inherits(Record, _RestResource);

  function Record() {
    _classCallCheck(this, Record);

    return _possibleConstructorReturn(this, (Record.__proto__ || Object.getPrototypeOf(Record)).apply(this, arguments));
  }

  _createClass(Record, [{
    key: 'get_resource_path',


    /**
     * Defines the resource path w/ necessary zone information to succesfully GET the resource. Used
     * internally.
     *
     * @return {String}
     */
    value: function get_resource_path() {
      var path = [this.constructor.get_base_path(), this.attributes.zone, this.attributes.domain, this.attributes.type].map(function (item) {
        return encodeURIComponent(item.replace(/\//g, "%2f"));
      }).join('/');

      if (path[0] === '/') {
        path = path.substring(1);
      }

      return path;
    }

    /**
     * Throws an error if an ID isn't supplied, informs the user to get records through a Zone object if they want a list.
     * 
     * @param {String} id
     * @return {Promise}
     */

  }, {
    key: 'qps',


    /**
     * Returns the Queries Per Second statistics of a single record
     *
     * @return {Promise}
     */
    value: function qps() {
      return Stats.qps(this.get_resource_path().replace(this.constructor.get_base_path() + '/', ''));
    }

    /**
     * Returns usage statistics on a single record
     *
     * @return {Promise}
     */

  }, {
    key: 'usage',
    value: function usage() {
      return Stats.usage(this.get_resource_path().replace(this.constructor.get_base_path() + '/', ''));
    }
  }], [{
    key: 'get_base_path',


    /**
     * Defines the base path as just "zones/", all other info is derided from actual record object
     * itself.
     *
     * @return {String}
     */
    value: function get_base_path() {
      return 'zones';
    }
  }, {
    key: 'find',
    value: function find(id) {
      if (id === undefined) {
        throw new Error("Records can only be listed through a Zone, try new NS1.Zone(zone.name).attributes.records");
      } else {
        return _get(Record.__proto__ || Object.getPrototypeOf(Record), 'find', this).apply(this, arguments);
      }
    }

    /**
     * Returns all the acceptable metadata keys for records.
     *
     * @return {Promise}
     */

  }, {
    key: 'metatypes',
    value: function metatypes() {
      return new NS1Request('get', '/metatypes');
    }

    /**
     * Returns all the acceptable filter types on a record's filter chain.
     *
     * @return {Promise}
     */

  }, {
    key: 'filtertypes',
    value: function filtertypes() {
      return new NS1Request('get', '/filtertypes');
    }
  }]);

  return Record;
}(RestResource);

module.exports = Record;

},{"./NS1_request":6,"./rest_resource":18,"./stats":20}],18:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NS1Request = require('./NS1_request'),
    pluralize = require('pluralize');

/**
 * Parent class for all resourceful objects. Grants basic REST backed resource
 * object methods and behaviors, e.g. new Object({ object_vars }).save, Object.create,
 * #destroy and #update methods.
 */

var RestResource = function () {

  /**
   * @param {Object} attributes   - The attributes representing a new object
   * @param {Boolean} from_server - Used internally to know if an object exists on the server
   */
  function RestResource(attributes, from_server) {
    _classCallCheck(this, RestResource);

    this.attributes = attributes || {};
    this.from_server = from_server;
  }

  /**
   * Updates an object w/ the provided attributes.
   *
   * @param {Object} attributes
   * @return {Promise}
   */


  _createClass(RestResource, [{
    key: 'update',
    value: function update(attributes) {
      this.attributes = Object.assign({}, this.attributes, attributes);
      return this.save();
    }

    /**
     * Saves an object on the server.
     *
     * @return {Promise}
     */

  }, {
    key: 'save',
    value: function save() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        var method = _this.from_server ? 'post' : 'put',
            uri = _this.from_server ? _this.get_resource_path() : _this.create_resource_path();

        return new NS1Request(method, uri, _this.attributes).then(function (response) {
          resolve(convert_json_to_objects.bind(_this.constructor)(response));
        }).catch(function (err) {
          reject(err);
        });
      });
    }

    /**
     * Destroys an object on the server w/ the delete HTTP verb.
     *
     * @return {Promise}
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        return new NS1Request('del', _this2.get_resource_path()).then(function (response) {
          resolve(response);
        }).catch(function (err) {
          reject(err);
        });
      });
    }

    /**
     * Creates a new object w/ the provided attributes.
     *
     * @param {Object} attributes
     * @return {Promise}
     */

  }, {
    key: 'get_resource_path',


    /**
     * Defines the path to posting changes & getting details on a single resource. Method is
     * required to be overriden within child classes as most paths will require info pertaining
     * to the individual resource's attributes.
     *
     * @return {String}
     */
    value: function get_resource_path() {
      throw new Error('NS1 JS API: NS1.' + this.constructor.name + '.get_resource_path() requires a definition');
    }

    /**
     * Overrideable method to provide non-standard "PUT" behavior on creating new records.
     * E.g. Zones require info in the URI where Data Sources don't.
     *
     * @return {String}
     */

  }, {
    key: 'create_resource_path',
    value: function create_resource_path() {
      return this.get_resource_path();
    }

    /**
     * Finds either all the relevant resources when not given any arguments (e.g. finds all Zones in an account)
     * but when supplied an identifier will only return that single resource (e.g. /zones/testdomain.test will
     * only return info pertaining to the zone testdomain.test)
     *
     * @param {String} uid - String identifier of the object which is conjoined with the base_path of the resource
     * @return {Promise}
     */

  }], [{
    key: 'create',
    value: function create(attributes) {
      return new this(attributes).save();
    }

    /**
     * Defines the default path for the resource, e.g. zones == '/zones'. Default behavior is the to take
     * the class's name, lower case it, and pluralize it. Overrideable in child classes.
     *
     * @return {String}
     */

  }, {
    key: 'get_base_path',
    value: function get_base_path() {
      return pluralize(this.name.toLowerCase());
    }
  }, {
    key: 'find',
    value: function find(uid) {
      var _this3 = this;

      var resource_uri = this.get_base_path();

      if (uid !== undefined) {
        resource_uri += '/' + uid;
      }

      return new Promise(function (resolve, reject) {
        return new NS1Request('get', resource_uri).then(function (response) {
          resolve(convert_json_to_objects.bind(_this3)(response));
        }).catch(function (err) {
          reject(err);
        });
      });
    }
  }]);

  return RestResource;
}();

/**
 * Takes in JSON from requests and converts internal objects into objects representing the
 * resource class.
 *
 * @param {Array/Object} data - JSON data, either a single object or an array of objects
 * @return {Array/Object} - Returns the data as objects of the resource class
 * @private
 */


function convert_json_to_objects(data) {
  var _this4 = this;

  if (Array.isArray(data)) {
    return data.map(function (item, index, arr) {
      return new _this4(item, true);
    });
  } else {
    return new this(data, true);
  }
}

module.exports = RestResource;

},{"./NS1_request":6,"pluralize":2}],19:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NS1Request = require('./NS1_request');

/**
 * Handles all search-able entities on the NS1 platform. Currently
 * can only search types of "zone" or "record."
 *
 * @memberof NS1
 */

var Search =

/**
 * Requires an initial string to query with. Optional arguments
 * include type, which defaults to "all", and max, which defaults to 10.
 *
 * @param {String} query
 * @param {String} type
 * @param {Number} max
 * @return {Promise}
 */
function Search(query, type, max) {
  _classCallCheck(this, Search);

  if (typeof query !== 'string') {
    throw new Error('NS1.Search requires a string to query');
  }

  var query_object = {
    q: query
  };

  if (type) {
    query_object.type = type;
  }

  if (max) {
    query_object.max = max;
  }

  return new NS1Request('get', '/search', query_object);
};

module.exports = Search;

},{"./NS1_request":6}],20:[function(require,module,exports){
"use strict";

var NS1Request = require('./NS1_request');

/**
 * Static class for all stats in NS1
 *
 * @memberof NS1
 */
var Stats = {

  /**
   * Gets queries per seconds. If no argument is supplied for "id", gets qps on an account
   * wide level. IDs can either be the name of zones, or records in the /:zone/:domain/:type format
   *
   * @param {String} id - name of the individual zone or records to get stats for
   * @return Promise
   */
  qps: function qps(id) {
    id = id || '';
    return new NS1Request('get', 'stats/qps/' + id);
  },


  /**
   * Gets usage stats. If no argument is supplied for "id", gets usage stats on an account
   * wide level. IDs can either be the name of zones, or records in the /:zone/:domain/:type format
   *
   * @param {String} id - name of the individual zone or records to get stats for
   * @return Promise
   */
  usage: function usage(id) {
    id = id || '';
    return new NS1Request('get', 'stats/usage/' + id);
  }
};

module.exports = Stats;

},{"./NS1_request":6}],21:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RestResource = require('./rest_resource');
var NS1Request = require('./NS1_request');
var Stats = require('./stats');

/**
 * Represents all Zone objects on a client's account.
 *
 * @extends RestResource
 * @memberof NS1
 */

var Zone = function (_RestResource) {
  _inherits(Zone, _RestResource);

  function Zone() {
    _classCallCheck(this, Zone);

    return _possibleConstructorReturn(this, (Zone.__proto__ || Object.getPrototypeOf(Zone)).apply(this, arguments));
  }

  _createClass(Zone, [{
    key: 'get_resource_path',


    /**
     * Defines the resource path w/ necessary zone information to succesfully GET the resource. Used
     * internally.
     *
     * @return {String}
     */
    value: function get_resource_path() {
      var path = [this.constructor.get_base_path(), this.attributes.zone].map(function (item) {
        return encodeURIComponent(item.replace(/\//g, "%2f"));
      }).join('/');

      if (path[0] === '/') {
        path = path.substring(1);
      }

      return path;
    }

    /**
     * Imports a zonefile and defines the zone's records w/ the info in the file.
     * 
     * @param {String} zone_name
     * @param {String/File} file
     * @param {Boolean} async_call
     * @return {Promise}
     */

  }, {
    key: 'qps',


    /**
     * Returns the Queries Per Second statistics of a single record
     *
     * @return {Promise}
     */
    value: function qps() {
      return Stats.qps(encodeURIComponent(this.attributes.zone.replace(/\//g, "%2f")));
    }

    /**
     * Returns usage statistics on a single record
     *
     * @return {Promise}
     */

  }, {
    key: 'usage',
    value: function usage() {
      return Stats.usage(encodeURIComponent(this.attributes.zone.replace(/\//g, "%2f")));
    }
  }], [{
    key: 'import_zonefile',
    value: function import_zonefile(zone_name, file, async_call) {
      var file_data = void 0;

      if (file instanceof File && typeof FormData === 'function') {
        file_data = new FormData();
        file_data.append('zonefile', file);
      } else if (typeof file === 'string') {
        file_data = { zonefile: file };
      }

      async_call = async_call !== undefined ? async_call : true;

      return new NS1Request('put', '/import/zonefile/' + zone_name + '?async=' + async_call, undefined, file_data).then(function (zone_attrs) {
        return new Zone(zone_attrs, true);
      });
    }

    /**
     * Wrapper method to make the import_zonefile API call synchronously.
     *
     * @param {String} zone_name
     * @param {String/File} file
     * @return {Promise}
     */

  }, {
    key: 'import_zonefile_sync',
    value: function import_zonefile_sync(zone_name, file) {
      return this.import_zonefile(zone_name, file, false);
    }

    /**
     * Returns all the networks a user can apply a zone to
     *
     * @return {Promise}
     */

  }, {
    key: 'networks',
    value: function networks() {
      return new NS1Request('get', '/networks');
    }
  }]);

  return Zone;
}(RestResource);

module.exports = Zone;

},{"./NS1_request":6,"./rest_resource":18,"./stats":20}]},{},[14])(14)
});