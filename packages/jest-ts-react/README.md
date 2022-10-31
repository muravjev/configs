# Shared jest configuration

The purpose of the [jest](https://jestjs.io/) is to test `javascript`.

> This configuration targets **lib react** packages.

---

## Contents

- [Setup](#setup)
- [Donation](#donation)
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

## Donation

If you found this project helpful, consider\
[**buying me a coffee**](https://www.buymeacoffee.com/muravjev), [**donate by paypal**](https://www.paypal.me/muravjev) or just [**leave a star**](../../../..)⭐\
Thanks for your support, it is much appreciated!

## License

[MIT](LICENSE) © [Sergey Muravjev](https://github.com/muravjev)

---

[⬅ Back](../../README.md)

---
