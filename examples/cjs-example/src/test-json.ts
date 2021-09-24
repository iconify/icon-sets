import { locate, lookupCollection, lookupCollections } from '@iconify/json'

const test = async(name: string) => {
  const resolved = locate(name)
  // @ts-ignore
  // eslint-disable-next-line no-console
  console.log(resolved)
  const collection = await lookupCollection(name)
  // @ts-ignore
  // eslint-disable-next-line no-console
  console.log(`Icon set ${name} resolved: ${collection.prefix === name}`)
  const collections = await lookupCollections()
  Object.keys(collections).map(c => collections[c].name).forEach((c) => {
    // @ts-ignore
    // eslint-disable-next-line no-console
    console.log(c)
  })
}

test('mdi')
