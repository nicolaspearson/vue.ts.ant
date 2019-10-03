const mainConfig = require('../../jest.config.js');

module.exports = {
  ...mainConfig,
  collectCoverageFrom: [
    'src/**/*.{ts,vue}',
    '!src/**/*.d.ts',
    '!src/store/**/index.ts',
    '!src/registerServiceWorker.ts',
    '!src/main.ts',
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageThreshold: {
    global: {
      statements: 100,
    },
  },
  moduleNameMapper: {
    ...mainConfig.moduleNameMapper,
    '^#/(.*)$': '<rootDir>/test/unit/$1',
    '\\.(css|less)$': '<rootDir>/src/__mocks__/styleMock.js',
  },
};
