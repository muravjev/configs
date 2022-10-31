# Shared eslint configuration

The purpose of the `eslint` is linting `javascript` and `typescript` languages (`js`, `ts`, `tsx`).

> This configuration targets **app next** packages.

---

## Contents

- [Setup](#setup)
- [Usage](#usage)
- [Donation](#donation)
- [License](#license)

## Setup

- Add workspace reference to `@muravjev/configs-eslint-ts-next`:

  ```sh
  pnpm add -w @muravjev/configs-eslint-ts-next eslint
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

## Donation

If you found this project helpful, consider\
[**buying me a coffee**](https://www.buymeacoffee.com/muravjev), [**donate by paypal**](https://www.paypal.me/muravjev) or just [**leave a star**](../../../..)⭐\
Thanks for your support, it is much appreciated!

## License

[MIT](LICENSE) © [Sergey Muravjev](https://github.com/muravjev)

---

[⬅ Back](../../README.md)

---
