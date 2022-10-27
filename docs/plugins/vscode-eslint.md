# ESlint vscode plugin configuration

The purpose of the `eslint vscode plugin` is integration eslint with vscode environment.

## Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Usage](#usage)
- [License](#license)

## Prerequisites

- [➡ eslint](../../packages/eslint-ts/README.md) - linting and formatting indexed files before commit.

## Setup

- Install vs code `eslint` plugin by using Quick Open (`Ctrl` + `P`) and running the following command:

  ```sh
  ext install dbaeumer.vscode-eslint
  ```

- Configure vs code `eslint` plugin, by adding following settings:

  ```jsonc
  // .vscode/settings.json

  {
    ...
    "eslint.enable": true,
    "eslint.alwaysShowStatus": true,
    "eslint.debug": false,
    "eslint.workingDirectories": [
      // Monorepo directories
      { "pattern": "./apps/*/" },
      { "pattern": "./packages/*/" }
    ]
    ...
  }
  ```

## Usage

- **Automatic** linting file with `eslint` on save.

## License

[MIT](../../LICENSE) © [Sergey Muravjev](https://github.com/muravjev)

---

[⬅ Back](../../README.md)

---
