import { lookupCollection } from '@iconify/icon-set-resolver'

const test = async(): Promise<void> => {
  let error = null
  try {
    await lookupCollection('mdi')
  }
  catch (e) {
    error = e
  }
  // @ts-ignore
  // eslint-disable-next-line no-console
  console.log(`mdi collection should result on error: ${error !== null}`)
  const { icons } = await lookupCollection('carbon')
  // @ts-ignore
  // eslint-disable-next-line no-console
  console.log(`carbon collection has prefix carbon: ${icons.prefix === 'carbon'}`)
}

test()
