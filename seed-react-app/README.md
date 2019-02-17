# Seed React App

This is mostly a react app created with [create-react-app] (no _eject_) with
some additions for better DX. You can freely upgrade [react-scripts] when you
want.

So check the [official docs][create-react-app-docs] for better understanding of
what things you can achieve with it, and how.

## Available scripts:

```bash
$ yarn start
# launch the app in dev mode

$ yarn test
# run all the test files using JEST

$ yarn build
# Builds the app for production to the build folder (it auto-runs prebuild)

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

## babelrc for babel-node

The babel config at `.babelrc` on this branch it's used only by [babel-node] to
run the current file when you hit `ctrl+alt+n` in visual studio code and
**is not required** nor used by [create-react-app] in any ways.

## Env Example

There is an example env file named `.env.example` that should be copy and named
just `.env`. There is one defined `SKIP_PREFLIGHT_CHECK=true` to make
[react-scripts] to not stop compilation due to warnings about _incompatible_
versions of [eslint] and [jest]. This project uses the latest versions of those
and [react-scripts] not, at least at this time. When [react-scripts] upgrade
those versions `SKIP_PREFLIGHT_CHECK` could be removed or disabled.

[create-react-app]: https://facebook.github.io/create-react-app/
[react-scripts]: https://www.npmjs.com/package/react-scripts
[create-react-app-docs]: https://facebook.github.io/create-react-app/docs/getting-started
[babel-node]: https://babeljs.io/docs/en/babel-node
[jest]: https://jestjs.io/
[eslint]: https://eslint.org/
