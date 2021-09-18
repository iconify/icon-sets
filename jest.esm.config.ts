import config from './jest/jest.shared.config'

config.testMatch = [
  '**/?(*.)+(esm).+(spec|test).+(ts|tsx|js)',
]
config.globals = {
  'ts-jest': {
    useESM: true,
  },
}

export default config
