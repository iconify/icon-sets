import { buildConfiguration } from '../../jest/jest.shared.config'

export default buildConfiguration({
  moduleNameMapper: {
    '^@iconify/internal-types$': '<rootDir>/../internal-types/src/index.ts',
  },
  testMatch: [
    '**/?(*.)+(esm).+(spec|test).+(ts|tsx|js)',
  ],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
})
