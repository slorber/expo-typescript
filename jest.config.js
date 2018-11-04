const {defaults} = require('jest-config');

module.exports = {
  preset: "jest-expo",
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  },
  testMatch: [
    "**/*.test.ts?(x)"
  ]
};
