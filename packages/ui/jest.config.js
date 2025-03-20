const baseConfig = require('../../jest.config')

module.exports = {
  ...baseConfig,
  setupFilesAfterEnv: ['<rootDir>/jest.preset.ts'],
  testEnvironment: 'jsdom',
}
