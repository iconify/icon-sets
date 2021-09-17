import type { Config } from '@jest/types'

// see https://jestjs.io/docs/ecmascript-modules

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  moduleFileExtensions: ['ts', 'js'],
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
}

export default config
