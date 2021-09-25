import { IconifyJSONPackageExports } from '.'

export const lookupCollectionTest = (
  lookupCollection: (name: string) => Promise<IconifyJSONPackageExports>,
) => {
  describe('lookupCollection', () => {
    test('mdi collection is missing', async() => {
      let error = null
      try {
        await lookupCollection('mdi')
      }
      catch (e) {
        error = e
      }
      expect(error !== null).toBe(true)
    })
    test('carbon collection has prefix carbon', async() => {
      const { icons } = await lookupCollection('carbon')
      expect(icons!.prefix).toBe('carbon')
    })
  })
}
