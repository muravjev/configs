# Shared jest configuration

The purpose of the [jest](https://jestjs.io/) is to test `javascript`.

> This configuration targets **lib react** packages.

---

## Contents

- [Setup](#setup)
- [License](#license)

## Setup

- Add workspace reference to `@muravjev/configs-jest-ts-react` and its peers dependencies:

  ```sh
  pnpm add -w @muravjev/configs-jest-ts-react jest ts-jest jest-environment-jsdom @testing-library/react
  ```

- Add jest configuration file

  ```js
  // packages/bar/jest.config.js

  module.exports = require('@muravjev/configs-jest-ts-react');
  ```

## License

[MIT](LICENSE) © [Sergey Muravjev](https://github.com/muravjev)

---

[⬅ Back](../../README.md)

---
