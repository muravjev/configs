# Shared syncpack configuration

The purpose of the [syncpack](https://www.npmjs.com/package/syncpack) is formatting package jsons and validating dependecies versions.

---

## Contents

- [Setup](#setup)
- [Usage](#usage)
- [License](#license)

## Setup

- Add workspace reference to `@muravjev/configs-syncpack` and its peer dependencies:

  ```sh
  pnpm add -w @muravjev/configs-syncpack syncpack
  ```

- Add syncpack configuration file:

  ```js
  // .syncpackrc.js

  module.exports = require('@muravjev/configs-syncpack');
  ```

- Add syncpack scripts:

  ```jsonc
  // package.json

  "scripts": {
    ...
    "syncpack:fix": "syncpack format && syncpack fix-mismatches"
    ...
  }
  ```

## Usage

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
