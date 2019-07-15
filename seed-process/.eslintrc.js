module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    impliedStrict: true,
    allowImportExportEverywhere: false,
    babelConfig: {
      configFile: '.babelrc',
    },
  },
  env: {
    // ensure features like global Promise is defined
    es6: true,
    node: true,
    browser: false,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    // fix some issues with imports in ts-files
    'plugin:import/typescript',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        // This setting is required if you want to use rules which require type information
        project: './tsconfig.json',
        tsconfigRootDir: '.',
        ecmaVersion: 2019,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: false,
        },

        // typescript-eslint specific options
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ['@typescript-eslint'],
      rules: {
        // TypeScript's `noFallthroughCasesInSwitch` option is more robust (#6906)
        'default-case': 'off',
        // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/291)
        'no-dupe-class-members': 'off',

        // Add TypeScript specific rules (and turn off ESLint equivalents)
        '@typescript-eslint/no-angle-bracket-type-assertion': 'warn',
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'warn',
        '@typescript-eslint/no-namespace': 'error',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            args: 'none',
            ignoreRestSiblings: true,
          },
        ],
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'warn',
      },
    },
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
