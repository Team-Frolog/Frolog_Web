const nextJest = require('next/jest');
const createJestConfig = nextJest({
  dir: './',
});

const config = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./src/jest.setup.ts'],
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^@/(.*)$': './src/$1',
  },
};

module.exports = createJestConfig(config);
