# Shared typescript configuration

The purpose of the [typescript](https://www.typescriptlang.org/) is to add strong typing to `javascript`.

> This configuration targets **app next** packages.

---

## Contents

- [Setup](#setup)
- [Donation](#donation)
- [License](#license)

## Setup

- Add workspace reference to `@muravjev/configs-ts-next` and its peers dependencies:

  ```sh
  pnpm add -w @muravjev/configs-ts-next typescript react react-dom @types/node @types/react @types/react-dom
  ```

- Add typescript configuration file

  ```jsonc
  // apps/foo/tsconfig.json

  {
    "extends": "@muravjev/configs-ts-next",
    "compilerOptions": {
      "baseUrl": "src",
      "rootDir": "src"
    },
    "include": ["next-env.d.ts", "src"]
  }
  ```

- Turn **on** `next` externalDir experimental function:

  ```js
  // apps/foo/next.config.js

  {
    ...
    "experimental": {
      "externalDir": true //< for workspaces
    }
    ...
  }
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
