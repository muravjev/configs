# Shared eslint configuration

The purpose of the `eslint` is linting `javascript` and `typescript` languages (`js`, `ts`, `tsx`).

> This configuration targets **app next** packages.

---

## Contents

- [Setup](#setup)
- [Usage](#usage)
- [License](#license)

## Setup

- Add workspace reference to `@muravjev/configs-eslint-ts-next`:

  ```sh
  pnpm add -w @muravjev/configs-eslint-ts-next eslint-config-next
  ```

- Add eslint configuration file:

  ```js
  // apps/foo/.eslintrc.js

  module.exports = require('@muravjev/configs-eslint-ts-next');
  ```

## Usage

- **Automatic** validation of staged files with `eslint` is handled by monorepo on commit.
- **Automatic** validation file with `eslint` is handled by monorepo on save.
- Manual usage from command line:

  ```sh
  pnpm lint apps/foo
  pnpm lint:fix apps/foo
  ```

## License

[MIT](LICENSE) © [Sergey Muravjev](https://github.com/muravjev)

---

[⬅ Back](../../README.md)

---
