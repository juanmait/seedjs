# SeedJS

A scaffolding repo to develop a myriad of different javascript apps and
libraries. It comes in different _flavors_ organized in branches, all of them
for different purposes, setups and/or platforms:

| status   | branch        | description                                                             |
| -------- | ------------- | ----------------------------------------------------------------------- |
| **done** | `master`      | main features will be added here before spreading to the other branches |
| **done** | `process`     | NodeJS _long-running_ processes (like an HTTP server)                   |
| todo     | `lib`         | Libs that must work on both sides, nodejs and the browser               |
| todo     | `lib-node`    | Libs that should work on NodeJS only                                    |
| todo     | `lib-browser` | Libs that should work on the browser only                               |
| **done** | `react-app`   | Frontend React Apps based on [create-react-app]                         |

## Features

All the above _flavors_ includes:

- The option to write code in typescript, ES2018 or both.
- First class support in visual studio code:
  - Linting on the IDE by using [tslint] or [eslint]
  - Auto format via [prettier] (support files like `.ts`, `.js`, `.tsx`,
    `.jsx`, `.json`, `.md` and more).
  - run the current file on the IDE with a simple shortcut without the need
    of compile ([babel-node] is used for regular files and [jest] for test
    files).
  - easy debugging.
- Convenient ways to lint, fix and auto format the source code via yarn scripts
- Testing with JEST:
  - support for typescript and ES2018 without the need of any previous
    compilation.
  - support for [inline snapshots][inline-snapshots] via [prettier].
- Easy configurable GIT Hooks to make testing, linting, type checking, code
  fixing and formatting, etc..

## How to start

1. Create a new repo in your local machine (or clone it from your account).
2. Add a new remote referencing this one (for example: _upstream_):
   `git remote add upstream git@github.com:juanmait/seedjs.git`.
3. Fetch the latest data from _upstream_: `git fetch upstream`.
4. Now let's say you want to base your work on top the `process` branch
   from upstream, then: `git merge upstream/process`. Now you _master_ branch
   should contain the same content as the `process` branch.

## How to sync

Integrate the latest changes that may have happened on _upstream_

```bash
# update upstream data
$ git fetch upstream

# merge your branch with the same branch from upstream as before
$ git merge upstream/process
```

### Recommended vscode extensions:

This project works better with this specific vscode plugins/extensions:

- [prettier-vscode] - format almost all files (`.md`, `.js`, `.ts`, `.tsx`,
  `.json`, etc..) with one simple shortcut on the IDE.
- [eslint-vscode] - show linting errors in javascript files.
- [vscode-typescript-tslint-plugin] - show linting errors in typescript files.
- [code-runner] - used to run the current open file in the IDE (will run
  [babel-node] for regular files and [jest] for test files).
- [jest-snapshot-language-support] - add syntax highlighting for your Jest
  [snapshots][snapshot-testing].
- [markdown-checkbox] - add support for github checkboxes when previewing `.md`
  files.
- [code-spell-checker] ... please?

## Development

```bash
$ yarn install
```

### Common scripts valid vor all branches

```bash
$ yarn build
# build for prod (should run prebuild automatically)

$ yarn prebuild
# run `clean`, `fix`, `lint` & `checkTypes`

$ yarn test
# run all the test files using JEST

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

Check the README and `package.json` in the branch of your choice for more.

## Vscode shortcuts reference:

- `CTRL+i`: auto fix/format current file using [prettier].
- `CTRL+ALT+N`: run the current file. It uses [babel-node] for regular files and
  [jest] for test files.
- `F5` launch the debugger.

**Note**: auto format will also run on file save and/or paste (check config at
`.vscode/settings.json`).

## Git Hooks

All the branches includes a _pre-commit_ hook that runs `fix`, `lint` and
`checkTypes` in your **staged files** to check for errors and auto fix them when
possible before commits. It will **abort** the commit phase if errors prevails
after the auto fixing. It uses [husky] and [lint-staged] for that.

## Testing

Use [jest] for tests.

- Test can be written in typescript or ES2018. [inline-snapshots] are also supported!
- You can run the current test file in the IDE with `ctrl+alt+n`. No need for
  compile.

Read the README in the branch of your choice to know more.

## Typescript

The typescript configuration is very strict and types are checked even in
javascript files! It's up to you to make it less restrictive if you want. Check
`tsconfig.json`.

---

## Some links

**Dependencies:**

- [prettier]
- [eslint]
- [tslint]
- [jest]
- [babel]
- [tslint-config-prettier]
- [husky]
- [lint-staged]
- [babel-node]
- [prettier-eslint-cli]
- [create-react-app]

[tslint]: https://palantir.github.io/tslint/
[prettier]: https://prettier.io/
[tslint-config-prettier]: https://github.com/prettier/tslint-config-prettier
[husky]: https://github.com/typicode/husky
[lint-staged]: https://www.npmjs.com/package/lint-staged
[jest]: https://jestjs.io/
[babel-node]: https://babeljs.io/docs/en/babel-node
[babel]: https://babeljs.io/
[eslint]: https://eslint.org/
[create-react-app]: https://facebook.github.io/create-react-app/

**Vscode Extensions:**

- [prettier-vscode]
- [vscode-typescript-tslint-plugin]
- [code-runner]
- [jest-snapshot-language-support]
- [ESLint][eslint-vscode]
- [code-spell-checker]
- [markdown-checkbox]

[prettier-vscode]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[vscode-typescript-tslint-plugin]: https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin
[code-runner]: https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner
[jest-snapshot-language-support]: https://marketplace.visualstudio.com/items?itemName=tlent.jest-snapshot-language-support
[eslint-vscode]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier-eslint-cli]: https://github.com/prettier/prettier-eslint-cli
[tslint]: https://palantir.github.io/tslint/
[code-spell-checker]: https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker
[markdown-checkbox]: https://marketplace.visualstudio.com/items?itemName=bierner.markdown-checkbox

**Guides, references:**

- [snapshot-testing]
- [inline-snapshots]

[snapshot-testing]: https://jestjs.io/docs/en/snapshot-testing
[inline-snapshots]: https://jestjs.io/docs/en/snapshot-testing#inline-snapshots
