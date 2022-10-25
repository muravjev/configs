# Shared remark configuration

The purpose of the `remark` is linting, formatting and autogenerate contents of markdown files (.md).

---

## Contents

- [Setup](#setup)
- [Automation](#automation)
- [Usage](#usage)
- [License](#license)

## Setup

- Add reference to `@muravjev/configs-remark` and its peer dependencies:

  ```sh
  # add `-w` flag for installing into monorepo root
  # add `-D` for installing as dev dependencies

  pnpm add @muravjev/configs-remark remark remark-cli
  ```

- Add remark configuration file:

  ```js
  // .remarkrc.mjs

  import config from '@muravjev/configs-remark';
  export default config;
  ```

- Add remark ignore patterns file:

  ```sh
  # .remarkignore

  node_modules/
  ...
  ```

- Add remark scripts:

  ```jsonc
  // package.json

  "scripts": {
    ...
    "remark": "remark",
    "remark:fix": "pnpm remark . --output"
    ...
  }
  ```

## Automation

- Setup [➡ lint-staged](../../docs/tools/lint-staged.md) to run `remark` automatically on commit.
- Setup [➡ remark vscode plugin](../../docs/plugins/vscode-remark.md) to integrate `remark` with vscode environment.

## Usage

- **Automatic** validation of staged files with `remark` on commit.
- **Automatic** validation file with `remark` on save.
- Manual usage from command line:

  ```sh
  pnpm remark .
  pnpm remark:fix .
  ```

## License

[MIT](LICENSE) © [Sergey Muravjev](https://github.com/muravjev)

---

[⬅ Back](../../README.md)

---
