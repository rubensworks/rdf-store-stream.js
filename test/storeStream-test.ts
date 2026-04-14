import 'jest-rdf';
import { storeStream } from '..';

const arrayifyStream = require('arrayify-stream');
const quad = require('rdf-quad');
const streamifyArray = require('streamify-array');

describe('storeStream', () => {
  it('should import an empty stream', async() => {
    const store = await storeStream(streamifyArray([]));
    expect(store).not.toBeFalsy();
    await expect(arrayifyStream(store.match())).resolves.toBeRdfIsomorphic([]);
  });

  it('should import a non-empty stream', async() => {
    const store = await storeStream(streamifyArray([
      quad('s1', 'p1', 'o1'),
      quad('s2', 'p2', 'o2'),
      quad('s3', 'p3', 'o3'),
    ]));
    expect(store).not.toBeFalsy();
    await expect(arrayifyStream(store.match())).resolves.toBeRdfIsomorphic([
      quad('s1', 'p1', 'o1'),
      quad('s2', 'p2', 'o2'),
      quad('s3', 'p3', 'o3'),
    ]);
  });
});
