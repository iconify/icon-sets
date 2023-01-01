import { lookupCollection, lookupCollections } from '../';
import type { IconifyMetaDataCollection } from '../';

let collections: IconifyMetaDataCollection;
describe('lookupCollection and lookupCollections', () => {
  beforeAll(() => {
    return lookupCollections().then((c) => {
      collections = c;
      return Promise.resolve(c);
    });
  });
  test('lookupCollections has data', () => {
    expect(collections ? Object.keys(collections).length : 0).toBeGreaterThan(
      0
    );
  });
  test('mdi collection has prefix mdi', async () => {
    const collection = await lookupCollection('mdi');
    expect(collection.prefix).toBe('mdi');
  });
  test('websymbol collection has prefix websymbol', async () => {
    const collection = await lookupCollection('websymbol');
    expect(collection.prefix).toBe('websymbol');
  });
  test('fa collection has prefix fa', async () => {
    const collection = await lookupCollection('fa');
    expect(collection.prefix).toBe('fa');
  });
});
