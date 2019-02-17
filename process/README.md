# SeedJS/process


Setup to develop NodeJS _long-running_ process like HTTP servers, cronjobs,
micro-services or cli tools.

## Available scripts:

```bash
$ yarn start
# launch the process in dev mode using babel-node (no need for compilation)

$ yarn test
# run all the test files using JEST

$ yarn build
# Builds the app for production to the build folder (it auto-runs prebuild too).

$ yarn prebuild
# run `clean`, `fix`, `lint` & `checkTypes`

$ yarn checkTypes
# check for typescript errors

$ yarn lint
# check for lint errors using tslint for `.ts` files and eslint for `.js`.

$ yarn fix
# run auto format and auto fix using `prettier-tslint` and `prettier-eslint`

$ yarn checkConflicts
# detect eslint/tslint configurations that can collide with prettier

$ yarn checkTslint
# check for any conflict between `tslint` and prettier configs. Run this when
# you add new rules to your tslint.json file. It will warn you about what are
# the rules that you should avoid.

$ yarn checkEslint
# same as above but for `eslint`

$ yarn clean
# remove the build folder
```

## Production

On production you must use the compiled version inside _build_/ instead of the
_src_/.
