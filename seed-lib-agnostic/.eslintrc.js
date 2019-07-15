module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    impliedStrict: true,
    allowImportExportEverywhere: false,
    babelConfig: {
      configFile: '.babelrc',
    },
  },
  env: {
    node: false,
    browser: false,
  },
  extends: ['eslint:recommended', 'prettier'],
  overrides: [
    {
      files: [
        '*.test.js',
        '*.spec.js',
        '__test__/**/*.js',
        '*.test.ts',
        '*.spec.ts',
        '__test__/**/*.ts',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
