# SeedJS

This setup is for development of libraries that should run on **NodeJS only**.

## Use Case

Libraries that depends on NodeJS native APIs to make their job (e.g: access the
file system via `fs` module for reads or writes, use `path` module to resolve
paths, etc..)

## Output target

The output targets NodeJS. You can specify what version of Node the output need
to support by editing `.babelrc.json` file in the `preset-env` settings. E.g:

```json
{
  "targets": {
    "node": "10.15.0"
  }
}
```

## Available Scripts

```bash
$ yarn start
# Start the development mode. It builds the source code and keep watching for
# changes. It also launch a watcher to build the typescript declaration files.

$ yarn build
# build for prod (will run `prebuild` automatically).

$ yarn prebuild
# run `clean`, `fix`, `lint` & `checkTypes`

$ yarn test
# run all the test files using JEST

$ yarn checkTypes
# check for typescript errors

$ yarn lint
# check for lint errors using tslint for `.ts` files and eslint for `.js`.

$ yarn fix
# auto format and auto fix all the source code using `prettier-tslint` and
# `prettier-eslint`

$ yarn checkConflicts
# detect configurations conflicts between eslint/tslint and prettier

$ yarn clean
# remove the build folder
```
