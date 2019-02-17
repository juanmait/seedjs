# 2019-02-14

- add _home_ link in the README
- update readme to direct the user to [wiki.react-app.md](doc/wiki.react-app.md)
- create wiki pages for every branch in _doc_/ folder

# 2019-02-12

- remove script `watch:types` as is no necessary to generate types for react
  apps
- add info about branching model to the README.
- add missing patterns to eslint overrides

# 2019-02-11

- make code-runner to play well with `.tsx` & `.jsx` files
- make code-runner to use [babel-preset-react-app]
- add code-runner support for regular _jsx/tsx_ files
- add code-runner support for _jsx/tsx_ test files
- remove `jest.config.js` as react-app have his own config
- make code-runner to use `yarn test` instead of `yarn jest`
- exclude test files in `tsconfig.json`
- remove `custom-code-runner.js` and use [code-runner] glob patters instead
- update example snapshot in `readdirAsync.test.ts`
- make eslint to include env `jest` in files matching `*.test.js`

[code-runner]: https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner
[babel-preset-react-app]: https://www.npmjs.com/package/babel-preset-react-app

# 2019-02-10

- remove `build:types` info from README.md
- remove script `build:types` as it is no necessary to have typings for an app
- add react and react-dom dependencies
- add env `SKIP_PREFLIGHT_CHECK` to avoid react warnings about babel-eslint
  versions
- add react app example in _src/_ folder
- add _public/_ folder
- add react scripts `start`, `build` & `test`
- add eslint dependencies to make [eslint-config-react-app] to work okay
- add `jsx` support for typescript
- add [eslint-config-react-app] extension to `.eslintrc.json`
- add [react-scripts]
- add `browserslist` config in `package.json` and add documentation about it
- make the project to ignore _build/_ folder
- make typescript to `skipLibCheck`
- replace tsconfig `exclude` for `include`
- add script `checkConflicts`
- make source maps to be in different files instead of inline
- improve interoperability between typescript and babel
- improve eslint file matching
- upgrade `@types/node ^10.12.21 → ^10.12.24`
- upgrade `typescript ^3.3.1 → ^3.3.3`
- update info about syncing with upstream
- enable option `esModuleInterop` in `tsconfig.json` for better interoperation
  with babel
- remove option `rootDirs` from `tsconfig.json`
- add `"README.md"` and `"CHANGELOG.md"` to the list of included files in
  package.json
- rename script `typeCheck` to `checkTypes`

[react-scripts]: https://www.npmjs.com/package/react-scripts
[eslint-config-react-app]: https://www.npmjs.com/package/eslint-config-react-app

# 2019-02-06

- add `prebuild` & `release` scripts
- exclude `dist/` from tsconfig
- add `fix`, `lint` & `typeCheck` to the `build` script
- exclude files outside `src` in `tsconfig.json`
- add file `eslint-no-cry.js` to avoid eslint throwing errors because no `.js`
  files were found. See: https://github.com/eslint/eslint/issues/10587
- disable tslint rule `interface-name`
- add _Fork_ info to the readme
- add [eslint] support for `.js` files and integrate with prettier
- add revamp yarn scripts and add better documentation
- use babel as the compiler for typescript and javascript files
- add `typeCheck` to check types of typescript files
- add script `build:types` && `watch:types` to generate typescript declarations
- add [babel-node] to run current file for `.ts` and `.js` files
- remove [ts-node] in favor of [babel-node]
- remove `parser` from .prettierrc to allow auto-detection
- add [@babel/plugin-proposal-class-properties] to support class porps in js
- add [@babel/plugin-proposal-object-rest-spread] to support spread on js files
- remove messed up comments in `tsconfig.json`
- use nodejs spawn to exec current file via code-runner

[eslint]: https://eslint.org/

# 2019-02-05

- upgrade versions of [jest], [prettier] and [tslint-config-prettier]

# 2019-02-04

- update snapshots to reflect new files
- config babel to add ts support in jest tests
- add `@babel/preset-typescript` and `@babel/preset-env`
- create a `.babelrc` config file

# 2019-02-03

- remove [ts-jest] & [jest-extended]
- upgrade all dependencies
- add CHANGELOG.md file

[ts-jest]: https://github.com/kulshekhar/ts-jest
[jest-extended]: https://github.com/jest-community/jest-extended
[jest]: https://jestjs.io/
[prettier]: https://prettier.io/
[tslint-config-prettier]: https://github.com/prettier/tslint-config-prettier
[ts-node]: https://github.com/TypeStrong/ts-node
[babel-node]: https://babeljs.io/docs/en/babel-node
[@babel/plugin-proposal-class-properties]: https://babeljs.io/docs/en/next/babel-plugin-proposal-class-properties.html
[@babel/plugin-proposal-object-rest-spread]: https://babeljs.io/docs/en/babel-plugin-proposal-object-rest-spread
