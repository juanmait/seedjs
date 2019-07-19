module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    impliedStrict: true,
    allowImportExportEverywhere: false,
  },
  env: {
    es6: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    // fix some issues with imports in ts-files
    // 'plugin:import/typescript',

    // prettier is disabled due to this recommendation:
    // https://github.com/sveltejs/eslint-plugin-svelte3/blob/master/OTHER_PLUGINS.md
    // also, prettier plugins like prettier-plugin-svelte are
    // loaded automatically. See: https://prettier.io/docs/en/plugins.html
    // 'prettier',
  ],
  plugins: ['svelte3'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  rules: {
    // ...
  },
  settings: {
    // ...
  },
}
