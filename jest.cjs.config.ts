import { buildConfiguration } from './jest/jest.shared.config'

export default buildConfiguration({
  testMatch: [
    '**/?(*.)+(cjs).+(spec|test).+(ts|tsx|js)',
  ],
  globals: {
    'ts-jest': {
      useESM: false,
    },
  },
})
