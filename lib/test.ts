import { collection, locate } from './finder'

const test = async(): Promise<void> => {
  const fa = locate('fa')
  console.log(fa)
  const faLib = await collection('fa')
  console.log(faLib)
}

test()
