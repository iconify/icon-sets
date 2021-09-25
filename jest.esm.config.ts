import { buildConfiguration } from './jest/jest.shared.config'

export default buildConfiguration({
  testMatch: [
    '**/?(*.)+(esm).+(spec|test).+(ts|tsx|js)',
  ],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
})
