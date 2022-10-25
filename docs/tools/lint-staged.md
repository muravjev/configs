# Lint-staged configuration

The purpose of the `lint-staged` is to lint and to format indexed files before they got committed.

## Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Usage](#usage)
- [License](#license)

## Prerequisites

- [➡ remark](../../packages/remark/README.md) - linting and formatting `markdown` files.
- [➡ prettier](../../packages/prettier/README.md) - formatting `js`, `ts`, `tsx`, `md`, `json`, `yaml` files.
- [➡ eslint](../../packages/eslint-ts/README.md) - linting `javascipt` and `typescript` languages.

## Setup

- Add reference to `lint-staged`:

  ```sh
  # add `-w` flag for installing into monorepo root
  # add `-D` for installing as dev dependencies

  pnpm add lint-staged
  ```

- Add lint-staged configuration file:

  ```js
  // .lintstagedrc.mjs

  export default {
    '*.md': 'pnpm remark:fix',
    '*.{mjs,js,ts,tsx,md,json,yaml}': 'pnpm format:fix',
    '*.{mjs,js,ts,tsx}': 'pnpm lint:fix'
  };
  ```

- Continue with [➡ husky](./husky.md) setup to schedule `lint-staged` execution on commit.

## Usage

- **Automatic** linting and formatting of staged files on commit.\
  In case of any failures, commit will be rejected.

## License

[MIT](../../LICENSE) © [Sergey Muravjev](https://github.com/muravjev)

---

[⬅ Back](../../README.md)

---
