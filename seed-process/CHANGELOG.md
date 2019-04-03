# 2019-04-03

- upgrade dependency versions:
  ```
  @babel/cli                                    ^7.2.3  →    ^7.4.3
  @babel/core                                   ^7.4.0  →    ^7.4.3
  @babel/plugin-proposal-object-rest-spread     ^7.4.0  →    ^7.4.3
  @babel/preset-env                             ^7.4.2  →    ^7.4.3
  @types/node                                 ^11.11.6  →  ^11.13.0
  babel-jest                                   ^24.5.0  →   ^24.7.0
  eslint                                       ^5.15.3  →   ^5.16.0
  jest                                         ^24.5.0  →   ^24.7.0
  tslint                                       ^5.14.0  →   ^5.15.0
  typescript                                 ^3.3.4000  →    ^3.4.1
  ```

# 2019-02-14

- update readme to direct the user to [doc/wiki.process.md](doc/wiki.process.md)
- create wiki pages for every branch in _doc_/ folder

# 2019-02-12

- turn _browser_ to false in eslint config
- add example test file for an http server
- add script `start:production` to start the process using the compiled code
- add info about branching model to the README.
- add missing patterns to eslint overrides
- make babel compile to ignore all test files
- add `start` script to start process using [babel-node]
- make test pass ignoring _build_/ folder
- make output go to build instead of dist folder
- rename script `build` to `compile` to not auto run `prebuild` on compile

# 2019-02-11

- remove script `build:types` as types are not necessary for a node process
- add a simple node http server as example file
- add `esnext` as lib in `tsconfig.json` to restrict code suggestions to node env
- make the source maps to go `inline`
- make the output to go to _build_ folder instead of _dist_
- update example snapshot to exclude removed scripts folder
- exclude test files in `tsconfig.json`
- remove `custom-code-runner.js` and use [code-runner] glob patters instead
- update example snapshot in `readdirAsync.test.ts`
- make eslint to include env `jest` in files matching `*.test.js`

[code-runner]: https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner

# 2019-02-10

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
