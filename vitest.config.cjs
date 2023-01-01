const { defineConfig } = require('vitest/config');

module.exports = defineConfig({
  resolve: {
    mainFields: ['require'],
    extensions: ['.cjs'],
  },
  test: {
    globals: true,
    watch: false,
    include: ['src/*.test.ts'],
  },
});
