import type { Config } from '@jest/types'

// see https://jestjs.io/docs/ecmascript-modules

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  moduleFileExtensions: ['ts', 'js'],
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
}

export default config
