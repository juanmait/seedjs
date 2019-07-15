# 2019-07-15

- rename all `.eslintrc.json` files to `.eslintrc.js`

# 2019-07-14

- add package `eslint-config-react-app-fix-override` to fix [eslint-config-react]
- upgrade all packages dependencies & regenerate main `yarn.lock` file

## seed-electron-react-basic

## seed-lib-browser

## seed-lib-agnostic

## seed-lib-node

- deprecate tslint in favor of eslint for typescript linting

[eslint-config-react]: https://www.npmjs.com/package/eslint-config-react-app

# 2019-04-03

- regenerate `yarn.lock` file
- upgrade dependency versions

  ```
  seed-lib-browser
  -----------------
  @babel/cli                                    ^7.2.3  →   ^7.4.3
  @babel/core                                   ^7.4.0  →   ^7.4.3
  @babel/plugin-proposal-object-rest-spread     ^7.4.0  →   ^7.4.3
  @babel/preset-env                             ^7.4.2  →   ^7.4.3
  babel-jest                                   ^24.5.0  →  ^24.7.0
  eslint                                       ^5.15.3  →  ^5.16.0
  jest                                         ^24.5.0  →  ^24.7.0
  tslint                                       ^5.14.0  →  ^5.15.0
  typescript                                 ^3.3.4000  →   ^3.4.1

  seed-lib-agnostic
  -----------------
  @babel/cli                                    ^7.2.3  →   ^7.4.3
  @babel/core                                   ^7.4.0  →   ^7.4.3
  @babel/plugin-proposal-object-rest-spread     ^7.4.0  →   ^7.4.3
  @babel/preset-env                             ^7.4.2  →   ^7.4.3
  babel-jest                                   ^24.5.0  →  ^24.7.0
  eslint                                       ^5.15.3  →  ^5.16.0
  jest                                         ^24.5.0  →  ^24.7.0
  tslint                                       ^5.14.0  →  ^5.15.0
  typescript                                 ^3.3.4000  →   ^3.4.1

  seed-electron-react-basic
  -------------------------
  react                                        ^16.8.5  →   ^16.8.6
  react-dom                                    ^16.8.5  →   ^16.8.6
  @babel/cli                                    ^7.2.3  →    ^7.4.3
  @babel/core                                   ^7.4.0  →    ^7.4.3
  @babel/plugin-proposal-object-rest-spread     ^7.4.0  →    ^7.4.3
  @babel/preset-env                             ^7.4.2  →    ^7.4.3
  @babel/runtime                                ^7.4.2  →    ^7.4.3
  @types/node                                 ^11.11.6  →  ^11.13.0
  @types/react                                 ^16.8.8  →  ^16.8.12
  babel-jest                                   ^24.5.0  →   ^24.7.0
  electron                                       4.1.0  →     4.1.3
  eslint                                       ^5.15.3  →   ^5.16.0
  eslint-plugin-flowtype                        ^3.4.2  →    ^3.5.1
  jest                                         ^24.5.0  →   ^24.7.0
  tslint                                       ^5.14.0  →   ^5.15.0
  typescript                                 ^3.3.4000  →    ^3.4.1

  seed-lib-node
  --------------
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

  seed-process
  ------------
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

  seed-react-app
  --------------
  react                                        ^16.8.5  →   ^16.8.6
  react-dom                                    ^16.8.5  →   ^16.8.6
  @babel/cli                                    ^7.2.3  →    ^7.4.3
  @babel/core                                   ^7.4.0  →    ^7.4.3
  @babel/plugin-proposal-object-rest-spread     ^7.4.0  →    ^7.4.3
  @babel/preset-env                             ^7.4.2  →    ^7.4.3
  @types/node                                 ^11.11.6  →  ^11.13.0
  @types/react                                 ^16.8.8  →  ^16.8.12
  babel-jest                                   ^24.5.0  →   ^24.7.0
  eslint                                       ^5.15.3  →   ^5.16.0
  eslint-plugin-flowtype                        ^3.4.2  →    ^3.5.1
  jest                                         ^24.5.0  →   ^24.7.0
  tslint                                       ^5.14.0  →   ^5.15.0
  typescript                                 ^3.3.4000  →    ^3.4.1
  ```

# 2019-03-22

- fix #6 exclude eslint-no-cry.js file from the build process
- fix #9 disable vscode setting formatOnPaste
- upgrade dependencies and regenerate yarn.lock
- remove unnecessary `.vscode` dir in the project root

# 1.0.0-beta.5 (2019-03-18 - upgrade dependencies)

- upgrade dependencies and regenerate yarn.lock

# 1.0.0-beta.4 (2019-03-04 - upgrade dependencies)

- upgrade dependencies and regenerate yarn.lock

# 1.0.0-beta.3 (2019-02-24 - upgrade dependencies)

- upgrade react and typescript versions
- regenerate dependency tree (`yarn.lock`)

# 1.0.0-beta.2 (2019-02-20 - upgrade dependencies and docs)

- upgrade dependency versions and regenerate yarn.lock

# 2019-02-19 (next)

- make git to not ignore .vscode stuff

# 2019-02-18 (next)

- add "newLine": "lf" in tsconfig.compilerOptions
- add `typings` folder the `include` key on all `tsconfig.json` files
- add `"build"` to the list of exclude in all `tsconfig.json` files

# 2019-02-17 (next)

- add more info about typescript strict mode in main readme
- improve _main goals_ info in the main readme
- update main readme
- fix typos in `seed-lib-agnostic` readme

# 1.0.0-beta.1 (2019-02-17 - monorepo kick-off)

- update main readme to show latest changes about monorepo kick-off
- rename workspace _seed-lib_ to _seed-lib-agnostic_
- add workspace _seed-lib-browser_
- upgrade dependency versions on workspace _seed-electron-react-basic_
- add workspace _seed-electron-react-basic_
- regenerate `yarn.lock` file and dependency tree
- upgrade dependency versions on workspace _seed-react-app_
- add workspace _seed-react-app_
- prefix all workspaces with `"seed-*"`
- add workspace _lib-node_
- add workspace _lib_
- upgrade dependency versions on workspace _process_
- add workspace _process_
