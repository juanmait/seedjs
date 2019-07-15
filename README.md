# SeedJS

A scaffolding _[monorepo]_ that showcases a variety of different setups to
develop javascript apps and libraries. It comes in different _flavors_ organized
in [workspaces], all of them for different purposes, setups, runtimes and/or
platforms:

| branch                 | description                                                                            |
| ---------------------- | -------------------------------------------------------------------------------------- |
| `electron-react-basic` | setup to work with [react] in [electron] without using [create-react-app] or [webpack] |
| `lib-agnostic`         | libs targeting nodejs and/or the browser without using native APIs                     |
| `lib`                  | libs targeting nodejs and the browser with _free_ access to native APIs on both sides  |
| `lib-node`             | Libs targeting NodeJS only                                                             |
| `lib-browser`          | Libs targeting the browser only                                                        |
| `process`              | NodeJS _long-running_ processes (like an HTTP server)                                  |
| `react-app`            | Frontend React Apps based on [create-react-app] (no ejected)                           |
| `svelte-app`           | Frontend Svelte Apps with support for eslint and prettier                              |

Most of the time, differences between setups are very subtle, only changing
some linting config, babel plugin or dependency.

The main goal of all of this is to make those distinctions visible and clear, to
share dependencies keeping track of version upgrades, to implicitly suggest a
unified set of _best practice's rules_ via _separation of concerns_, linting,
type checking, code formating and git hooks, to get a predictable and unified
development environment with a nice DX, and first class support in visual
studio code (actually you can use whatever IDE you want since most IDEs takes
the info they need by reading files like `package.json`, `.eslintrc`,
`tsconfig.json` and so on).

Aside from that, all workspaces are totally independent from each other, meaning
that outside this monorepo every one should work just fine as any other normal
package do.

**IMPORTANT: There is a pre-configured vscode workspace (`seedjs.code-workspace`).
It is very recommended to use this workspace in order to have propped linting in the IDE!**

## Features

All the setups above includes:

- The option to write code in typescript, ES2018 or both.
- First class support in visual studio code:
  - Linting on the IDE by using [eslint] v6
  - Auto formating via [prettier] (support files like `.ts`, `.js`, `.tsx`,
    `.jsx`, `.json`, `.md`, `.svelte` and more).
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

## Get started

```bash
$ yarn install
```

Install all dependencies for all workspaces in the root folder. Check the readme
in the corresponding folder to know more about the specifics of every package.

## Recommended vscode extensions:

All the _flavors_ works better with this specific vscode plugins/extensions:

- [prettier-vscode] - format almost all files (`.md`, `.js`, `.ts`, `.tsx`,
  `.json`, etc..) with one simple shortcut on the IDE.
- [eslint-vscode] - show linting errors in javascript files.
- [svelte-vscode] - syntax highlighting and rich intellisense for Svelte components.
- [code-runner] - runs the current open file in the IDE (use [babel-node] for
  regular files and [jest] for test files).
- [jest-snapshot-language-support] - add syntax highlighting for your Jest
  [snapshots][snapshot-testing].
- [markdown-checkbox] - add support for github checkboxes when previewing `.md`
  files.
- [code-spell-checker] ... yes! please!?

## Vscode shortcuts reference:

- `CTRL+i`: auto fix/format current file using [prettier].
- `CTRL+ALT+N`: run the current file. It uses [babel-node] for regular files and
  [jest] for test files.
- `F5` launch the debugger.

**Note**: auto format will also run on file save and/or paste (check config at
`.vscode/settings.json`).

## Git Hooks

All the setups includes a _pre-commit_ hook that runs `fix`, `lint` and
`checkTypes` in your **staged files** to check for errors and auto fix them when
possible before commits. It will **abort** the commit phase if errors prevails
after the auto fixing. It uses [husky] and [lint-staged] for that.

## Testing

Use [jest] for tests.

- Test can be written in typescript or ES2018. [inline-snapshots] are also
  supported!
- You can run the current test file in the IDE with `ctrl+alt+n`. No need for
  compile.

Read the README in the branch of your choice to know more.

## Typescript

In all cases the typescript configuration is very very strict. Types are checked
even in javascript files! It's up to you to make it less restrictive if you
want. Check the `tsconfig.json` in the respective workspace.

---

## Some links

**Common Dependencies:**

- [prettier]
- [eslint]
- [jest]
- [babel]
- [husky]
- [lint-staged]
- [babel-node]
- [prettier-eslint-cli]

[prettier]: https://prettier.io/
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
- [template-webpack]
- [eslint-plugin-svelte3]

[create-react-app]: https://facebook.github.io/create-react-app/
[react]: https://reactjs.org/
[electron]: https://electronjs.org/
[template-webpack]: https://github.com/sveltejs/template-webpack
[eslint-plugin-svelte3]: https://github.com/sveltejs/eslint-plugin-svelte3

**Vscode Extensions:**

- [svelte-vscode]
- [prettier-vscode]
- [code-runner]
- [jest-snapshot-language-support]
- [eslint][eslint-vscode]
- [code-spell-checker]
- [markdown-checkbox]

[prettier-vscode]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[code-runner]: https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner
[jest-snapshot-language-support]: https://marketplace.visualstudio.com/items?itemName=tlent.jest-snapshot-language-support
[eslint-vscode]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier-eslint-cli]: https://github.com/prettier/prettier-eslint-cli
[code-spell-checker]: https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker
[markdown-checkbox]: https://marketplace.visualstudio.com/items?itemName=bierner.markdown-checkbox
[svelte-vscode]: https://marketplace.visualstudio.com/items?itemName=JamesBirtles.svelte-vscode

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
