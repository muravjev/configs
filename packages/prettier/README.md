# Shared prettier configuration

The purpose of the `prettier` is formatting many language formats (`js`, `ts`, `tsx`, `md`, `json`, `yaml`).

---

## Contents

- [Setup](#setup)
- [Automation](#automation)
- [Usage](#usage)
- [Donation](#donation)
- [License](#license)

## Setup

- Add workspace reference to `@muravjev/configs-prettier` and its peer dependencies:

  ```sh
  pnpm add -w @muravjev/configs-prettier prettier
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
  pnpm-lock.yaml

  # Next ignore patterns
  .next/
  .build/
  .coverage/

  # Custom ignore patterns
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

- Setup [➡ prettier vscode plugin](../../docs/plugins/vscode-prettier.md) to integrate `prettier` with vscode environment.

## Usage

- **Automatic** format file with `prettier` on save.
- **Automatic** format of staged files with `prettier` on commit.
- Manual usage from command line:

  ```sh
  pnpm format:check .
  pnpm format:fix .
  ```

## Donation

If you found this project helpful, consider\
[**buying me a coffee**](https://www.buymeacoffee.com/muravjev), [**donate by paypal**](https://www.paypal.me/muravjev) or just [**leave a star**](../../../..)⭐\
Thanks for your support, it is much appreciated!

## License

[MIT](LICENSE) © [Sergey Muravjev](https://github.com/muravjev)

---

[⬅ Back](../../README.md)

---
