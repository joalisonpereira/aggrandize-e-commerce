/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,

  collectCoverage: true,

  coverageDirectory: "coverage",

  coverageProvider: "v8",

  moduleNameMapper: {
    "src/(.*)": "<rootDir>/src/$1",
  },

  modulePaths: ["src"],

  preset: "ts-jest",

  testRegex: ".*\\.spec\\.ts$",

  testPathIgnorePatterns: [
    "<rootDir>/src/__tests__/utils.ts",
    "<rootDir>/node_modules/*",
  ],

  coveragePathIgnorePatterns: [
    "<rootDir>/src/__tests__/utils.ts",
    "<rootDir>/node_modules/*",
  ],
};
