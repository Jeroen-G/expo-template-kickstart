module.exports = {
  preset: "jest-expo",
  moduleFileExtensions: ["ts", "tsx", "js"],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "identity-obj-proxy",
  },
  transform: {
    "\\.(ts|tsx)$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$",
  testPathIgnorePatterns: ["\\.snap$", "<rootDir>/node_modules/"],
  transformIgnorePatterns: [
    "node_modules/(?!(crypto-es|@react-native|react-native|react-native-cookies|@sentry/react-native|expo-modules-core|expo-application|expo-device|expo-secure-store)/)",
  ],
  cacheDirectory: ".jest/cache",
  setupFiles: ["./dev/jestSetup.ts"],
};
