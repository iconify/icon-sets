import config from './jest.config.cjs'

config.globals = {
  'ts-jest': {
    useESM: true,
  },
}

export default config
