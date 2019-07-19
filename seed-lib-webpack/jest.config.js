module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.vscode',
    '<rootDir>/dist',
    '<rootDir>/build',
    '<rootDir>/.next',
    '<rootDir>/scripts',
    '<rootDir>/pages',
  ],
}
