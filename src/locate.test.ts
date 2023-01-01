import { resolve, normalize } from 'pathe';
import { locate } from '../';

describe('lookupCollection and lookupCollections', () => {
  test('mdi resolves the json collection', () => {
    const received = locate('mdi') as string;
    const expected = normalize(resolve('./json/mdi.json'));
    expect(received).toBe(expected);
  });
});
