# Shared typescript configuration

The purpose of the [typescript](https://www.typescriptlang.org/) is to add strong typing to `javascript`.

> This configuration targets **app next** packages.

---

## Contents

- [Setup](#setup)
- [License](#license)

## Setup

- Add reference to `@muravjev/configs-ts-next` and its peers dependencies:

  ```sh
  # add reference to app `foo`

  pnpm add @muravjev/configs-ts-next typescript @types/react -D --filter foo
  ```

- Add typescript configuration file

  ```json
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

## License

[MIT](LICENSE) © [Sergey Muravjev](https://github.com/muravjev)

---

[⬅ Back](../../README.md)

---
