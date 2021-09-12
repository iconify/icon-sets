import { Collection, collection, locate, collections } from './finder'

const test = async(): Promise<void> => {
  const fa: string = locate('fa')
  console.log(fa)
  const faLib: Collection = await collection('fa')
  console.log(faLib)
}

test()
