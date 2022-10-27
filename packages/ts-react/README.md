# Shared typescript configuration

The purpose of the [typescript](https://www.typescriptlang.org/) is to add strong typing to `javascript`.

> This configuration targets **lib react** packages.

---

## Contents

- [Setup](#setup)
- [License](#license)

## Setup

- Add workspace reference to `@muravjev/configs-ts-react` and its peers dependencies:

  ```sh
  pnpm add -w @muravjev/configs-ts-react typescript @types/node @types/react @types/react-dom
  ```

- Add typescript configuration file

  ```json
  // packages/bar/tsconfig.json

  {
    "extends": "@muravjev/configs-ts-react",
    "compilerOptions": {
      "baseUrl": "src",
      "rootDir": "src"
    },
    "include": ["src"]
  }
  ```

## License

[MIT](LICENSE) © [Sergey Muravjev](https://github.com/muravjev)

---

[⬅ Back](../../README.md)

---
