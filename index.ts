import {Store} from "n3";
import * as RDF from "rdf-js";

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
  const store: RDF.Store<Q> = new Store<Q>();
  return new Promise((resolve) => store.import(stream).once('end', () => resolve(store)));
}
