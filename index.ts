import type * as RDF from '@rdfjs/types';
import { RdfStore } from 'rdf-stores';

/**
 * Import all quads in the given stream into a new RDF store.
 *
 * The whole stream will be consumed for this,
 * and the promise will resolve once the stream's end event is emitted.
 *
 * @param {Stream<Q extends BaseQuad>} stream An RDF stream containing the quads to import into the store.
 * @return {Promise<Store<Q extends BaseQuad>>} A promise resolving to an RDF store.
 */
export function storeStream<Q extends RDF.BaseQuad = RDF.Quad>(stream: RDF.Stream<Q>): Promise<RDF.Store<Q>> {
  const store: RDF.Store<Q> = <RDF.Store<Q>> <RDF.Store> RdfStore.createDefault();
  return new Promise((resolve, reject) => store.import(stream)
    .on('error', reject)
    .once('end', () => resolve(store)));
}
