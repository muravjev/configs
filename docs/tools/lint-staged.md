# Lint-staged configuration

The purpose of the `lint-staged` is to lint and to format indexed files before they got committed.

## Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Usage](#usage)
- [License](#license)

## Prerequisites

- [➡ eslint](../../packages/eslint-ts/README.md) - linting `javascript` and `typescript` languages.
- [➡ prettier](../../packages/prettier/README.md) - formatting `js`, `ts`, `tsx`, `md`, `json`, `yaml` files.
- [➡ remark](../../packages/remark/README.md) - linting and formatting `markdown` files.

## Setup

- Add workspace reference to `lint-staged`:

  ```sh
  pnpm add -w lint-staged
  ```

- Add lint-staged configuration file:

  ```js
  // .lintstagedrc.mjs

  export default {
    '*.md': ['pnpm remark:fix', 'pnpm format:fix'],
    '*.{mjs,js,ts,tsx,json,yaml}': 'pnpm format:fix',
    '*.{mjs,js,ts,tsx}': 'pnpm lint:fix'
  };
  ```

## Usage

- **Automatic** linting and formatting of staged files on commit.\
  In case of any failures, commit will be rejected.

## License

[MIT](../../LICENSE) © [Sergey Muravjev](https://github.com/muravjev)

---

[⬅ Back](../../README.md)

---
