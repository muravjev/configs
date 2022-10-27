# Shared jest configuration

The purpose of the [jest](https://jestjs.io/) is to test `javascript`.

> This configuration targets **lib typescript** packages.

---

## Contents

- [Setup](#setup)
- [License](#license)

## Setup

- Add workspace reference to `@muravjev/configs-jest-ts` and its peers dependencies:

  ```sh
  pnpm add -w @muravjev/configs-jest-ts jest ts-jest
  ```

- Add jest configuration file

  ```js
  // packages/baz/jest.config.js

  module.exports = require('@muravjev/configs-jest-ts');
  ```

## License

[MIT](LICENSE) © [Sergey Muravjev](https://github.com/muravjev)

---

[⬅ Back](../../README.md)

---
