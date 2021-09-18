import type { Config } from '@jest/types'

// see https://jestjs.io/docs/ecmascript-modules

export const buildConfiguration = (configuration: Partial<Config.InitialOptions>): Config.InitialOptions => {
  return Object.assign({}, {
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
  }, configuration)
}
