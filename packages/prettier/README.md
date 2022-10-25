# Shared prettier configuration

The purpose of the `prettier` is formatting many language formats (`js`, `ts`, `tsx`, `md`, `json`, `yaml`).

---

## Contents

- [Setup](#setup)
- [Automation](#automation)
- [Usage](#usage)
- [License](#license)

## Setup

- Add reference to `@muravjev/configs-prettier` and its peer dependencies:

  ```sh
  # add `-w` flag for installing into monorepo root
  # add `-D` for installing as dev dependencies

  pnpm add @muravjev/configs-prettier prettier
  ```

- Add prettier configuration file:

  ```js
  // .prettierrc.js

  module.exports = require('@muravjev/configs-prettier');
  ```

- Add prettier ignore patterns file:

  ```sh
  # .prettierignore

  node_modules/
  ...
  ```

- Add prettier scripts:

  ```jsonc
  // package.json

  "scripts": {
    ...
    "format": "prettier",
    "format:check": "pnpm format --check --debug-check",
    "format:fix": "pnpm format --write"
    ...
  }
  ```

## Automation

- Setup [➡ lint-staged](../../docs/tools/lint-staged.md) to run `prettier` automatically on commit.
- Setup [➡ prettier vscode plugin](../../docs/plugins/vscode-prettier.md) to integrate `prettier` with vscode environment.

## Usage

- **Automatic** format of staged files with `prettier` on commit.
- **Automatic** format file with `prettier` on save.
- Manual usage from command line:

  ```sh
  pnpm format:check .
  pnpm format:fix .
  ```

## License

[MIT](LICENSE) © [Sergey Muravjev](https://github.com/muravjev)

---

[⬅ Back](../../README.md)

---
