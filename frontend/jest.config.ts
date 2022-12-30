import nextJest from "next/jest";

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  setupFilesAfterEnv: ["./jest.setup.ts"],

  moduleNameMapper: {
    "src/(.*)": "<rootDir>/src/$1",
  },

  testEnvironment: "jest-environment-jsdom",

  modulePaths: ["src"],

  testPathIgnorePatterns: ["<rootDir>/src/__tests__/test-utils.ts"],
};

module.exports = createJestConfig(customJestConfig);
