# RDF Store Stream

[![Build status](https://github.com/rubensworks/rdf-store-stream.js/workflows/CI/badge.svg)](https://github.com/rubensworks/rdf-store-stream.js/actions?query=workflow%3ACI)
[![Coverage Status](https://coveralls.io/repos/github/rubensworks/rdf-store-stream.js/badge.svg?branch=master)](https://coveralls.io/github/rubensworks/rdf-store-stream.js?branch=master)
[![npm version](https://badge.fury.io/js/rdf-store-stream.svg)](https://www.npmjs.com/package/rdf-store-stream)

This package exposes a convenience function that allows [RDF(JS) streams](http://rdf.js.org/stream-spec/#stream-interface)
to be encapsulated into an [RDF(JS) store](http://rdf.js.org/stream-spec/#store-interface).

The Store that will be returned is the default store from [`rdf-stores`](https://www.npmjs.com/package/rdf-stores).

This library accepts [RDFJS](http://rdf.js.org/)-compliant quads.

## Installation

```bash
$ yarn install rdf-store-stream
```

This package also works out-of-the-box in browsers via tools such as [webpack](https://webpack.js.org/) and [browserify](http://browserify.org/).

## Require

```javascript
import {storeStream} from "rdf-store-stream";
```

_or_

```javascript
const storeStream = require("rdf-store-stream").storeStream;
```

## Usage

Short example:

```javascript
const store = await storeStream(quadStream);
```

Full example:

```javascript
// Create an RDF stream
import rdfParser from "rdf-parse";
const quadStream = rdfParser.parse(fs.createReadStream('cartoons.ttl'), { contentType: 'text/turtle' });

// Import the stream into a store
const store = await storeStream(quadStream);

// Use the store
const resultStream = store.match(namedNode('http://example.org/subject'));
```

## License
This software is written by [Ruben Taelman](http://rubensworks.net/).

This code is released under the [MIT license](http://opensource.org/licenses/MIT).
