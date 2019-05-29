import "jest-rdf";
import {storeStream} from "../index";

// tslint:disable:no-var-requires
const streamifyArray = require('streamify-array');
const arrayifyStream = require('arrayify-stream');
const quad = require('rdf-quad');

describe('storeStream', () => {
  it('should import an empty stream', async () => {
    const store = await storeStream(streamifyArray([]));
    expect(store).not.toBeFalsy();
    expect(await arrayifyStream(store.match())).toBeRdfIsomorphic([]);
  });

  it('should import a non-empty stream', async () => {
    const store = await storeStream(streamifyArray([
      quad('s1', 'p1', 'o1'),
      quad('s2', 'p2', 'o2'),
      quad('s3', 'p3', 'o3'),
    ]));
    expect(store).not.toBeFalsy();
    expect(await arrayifyStream(store.match())).toBeRdfIsomorphic([
      quad('s1', 'p1', 'o1'),
      quad('s2', 'p2', 'o2'),
      quad('s3', 'p3', 'o3'),
    ]);
  });
});
