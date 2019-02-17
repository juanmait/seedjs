# SeedJS

A scaffolding _[monorepo]_ that showcases a myriad of different setups to
develop javascript apps and libraries. It comes in different _flavors_ organized
in [workspaces], all of them for different purposes, setups, runtimes and/or
platforms:

| status   | branch                 | description                                                                                         |
| -------- | ---------------------- | --------------------------------------------------------------------------------------------------- |
| **done** | `electron-react-basic` | showcases a setup to work with [react] in [electron] without using [create-react-app] or [webpack]. |
| **done** | `lib-agnostic`         | libs targeting nodejs and/or the browser without using native APIs                                  |
| todo     | `lib`                  | libs targeting nodejs and the browser with _free_ access to native APIs of both sides               |
| todo     | `lib-node`             | Libs targeting NodeJS only                                                                          |
| todo     | `lib-browser`          | Libs targeting the browser only                                                                     |
| **done** | `process`              | NodeJS _long-running_ processes (like an HTTP server)                                               |
| **done** | `react-app`            | Frontend React Apps based on [create-react-app] (no ejected)                                        |

Most of the time, the differences between setups are very subtle, only changing
some linting config, babel plugin or dependency. The main goal of all of this is
to make those distinctions visible and clear, to share dependencies and
versions, to get a predictable development environment and a nice DX in visual
studio code.

## Features

All the setups above includes:

- The option to write code in typescript, ES2018 or both.
- First class support in visual studio code:
  - Linting on the IDE by using [tslint] and/or [eslint]
  - Auto formating via [prettier] (support files like `.ts`, `.js`, `.tsx`,
    `.jsx`, `.json`, `.md` and more).
  - run the current file on the IDE with a simple shortcut without the need
    of compile ([babel-node] is used for regular files and [jest] for test
    files).
  - easy debugging.
- Convenient ways to lint, fix and auto format the source code via yarn scripts.
- Testing with JEST:
  - support for typescript and ES2018 without the need of any previous
    compilation.
  - support for [inline snapshots][inline-snapshots] via [prettier].
- Easy configurable GIT Hooks to make testing, linting, type checking, code
  fixing, code formatting, etc..

## Recommended vscode extensions:

All the _flavors_ works better with this specific vscode plugins/extensions:

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
- [code-spell-checker] ... yes! please!?

## Development

```bash
$ yarn install
```

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

**Common Dependencies:**

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

[tslint]: https://palantir.github.io/tslint/
[prettier]: https://prettier.io/
[tslint-config-prettier]: https://github.com/prettier/tslint-config-prettier
[husky]: https://github.com/typicode/husky
[lint-staged]: https://www.npmjs.com/package/lint-staged
[jest]: https://jestjs.io/
[babel-node]: https://babeljs.io/docs/en/babel-node
[babel]: https://babeljs.io/
[eslint]: https://eslint.org/

**Other Dependencies:**

- [create-react-app]
- [react]
- [electron]

[create-react-app]: https://facebook.github.io/create-react-app/
[react]: https://reactjs.org/
[electron]: https://electronjs.org/

**Vscode Extensions:**

- [prettier-vscode]
- [vscode-typescript-tslint-plugin]
- [code-runner]
- [jest-snapshot-language-support]
- [eslint][eslint-vscode]
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

**Guides, docs, references:**

- [snapshot-testing]
- [inline-snapshots]
- [yarn workspaces][workspaces]
- [webpack]
- [monorepo (wikipedia)][monorepo]

[snapshot-testing]: https://jestjs.io/docs/en/snapshot-testing
[inline-snapshots]: https://jestjs.io/docs/en/snapshot-testing#inline-snapshots
[workspaces]: https://yarnpkg.com/lang/en/docs/workspaces/
[webpack]: https://webpack.js.org/
[monorepo]: https://en.wikipedia.org/wiki/Monorepo
