module.exports = {
  extends: [
    'react-app',
    // Turns off all rules that are unnecessary or might conflict with Prettier.
    'prettier',
  ],
  parserOptions: {
    project: require.resolve('./tsconfig.json'),
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-use-before-define': 0,
  },
}
