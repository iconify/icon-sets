import config from './jest/jest.shared.config'

config.testMatch = [
  '**/?(*.)+(cjs).+(spec|test).+(ts|tsx|js)',
]

export default config
