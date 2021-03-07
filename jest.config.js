module.exports = {
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
    "\\.(svg|png)$": "<rootDir>/__mocks__/fileMock.js",
    "^@/pages/(.*)": "<rootDir>/pages/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["/node_modules/", "<rootDir>/.next"],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
};
