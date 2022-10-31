# Shared commitlint configuration

The purpose of the `commitlint` is linting of a commit message to conform the following format:

```js
type(scope?): subject
```

---

## Contents

- [Setup](#setup)
- [Automation](#automation)
- [Usage](#usage)
- [Donation](#donation)
- [License](#license)

## Setup

- Add workspace reference to `@muravjev/configs-commitlint` and its peer dependencies:

  ```sh
  pnpm add -w @muravjev/configs-commitlint @commitlint/cli
  ```

- Add commitlint configuration file:

  ```js
  // .commitlintrc.js

  module.exports = require('@muravjev/configs-commitlint');
  ```

- Add commitlint scripts:

  ```jsonc
  // package.json

  "scripts": {
    ...
    "commitlint": "commitlint"
    ...
  }
  ```

## Automation

- Setup [➡ husky](../../docs/tools/husky.md) to schedule `commitlint` execution on commit.

## Usage

- **Automatic** validation of commit message with `commitlint` on commit.\
  In case of invalid message, commit will be rejected.

## Donation

If you found this project helpful, consider\
[**buying me a coffee**](https://www.buymeacoffee.com/muravjev), [**donate by paypal**](https://www.paypal.me/muravjev) or just [**leave a star**](../../../..)⭐\
Thanks for your support, it is much appreciated!

## License

[MIT](LICENSE) © [Sergey Muravjev](https://github.com/muravjev)

---

[⬅ Back](../../README.md)

---
