import { buildConfiguration } from '../../jest/jest.shared.config'

export default buildConfiguration({
  moduleNameMapper: {
    '^@iconify/internal-types$': '<rootDir>/../internal-types/dist/index.js',
  },
  testMatch: [
    '**/?(*.)+(cjs).+(spec|test).+(ts|tsx|js)',
  ],
  globals: {
    'ts-jest': {
      useESM: false,
    },
  },
})
