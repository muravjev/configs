# Shared typescript configuration

The purpose of the [typescript](https://www.typescriptlang.org/) is to add strong typing to `javascript`.

> This configuration targets **lib typescript** packages.

---

## Contents

- [Setup](#setup)
- [License](#license)

## Setup

- Add reference to `@muravjev/configs-ts` and its peers dependencies:

  ```sh
  # add reference to packages/baz

  pnpm add @muravjev/configs-ts typescript @types/react -D --filter baz
  ```

- Add typescript configuration file

  ```json
  // packages/baz/tsconfig.json

  {
    "extends": "@muravjev/configs-ts",
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
