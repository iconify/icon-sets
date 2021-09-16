import { lookupCollection, locate, lookupCollections } from '.'

const test = async(): Promise<void> => {
  const fa = locate('fa')
  console.log(fa)
  const faLib = await lookupCollection('fa')
  console.log(faLib)
  const allCollections = await lookupCollections()
  console.log(allCollections.fa)
}

test()
