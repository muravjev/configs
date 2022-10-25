# Husky configuration

The purpose of the `husky` is running tasks on certain git actions.

## Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Usage](#usage)
- [License](#license)

## Prerequisites

- [➡ lint-staged](./lint-staged.md) - linting and formatting indexed files before commit
- [➡ commitlint](../../packages/commitlint/README.md) - linting commit message

## Setup

- Add reference to `husky`:

  ```sh
  # add `-w` flag for installing into monorepo root
  # add `-D` for installing as dev dependencies

  pnpm add -husky
  ```

- Add husky's install hooks script:

  ```jsonc
  // package.json

  "scripts": {
    ...
    "prepare": "husky install"
    ...
  }
  ```

- Add `pre-commit` hook for linting and formatting indexed files using [lint-staged](./lint-staged.md):

  ```sh
  pnpx husky add .husky/pre-commit 'pnpx lint-staged --quiet'
  ```

- Add `commit-msg` hook for linting of commit message using [commitlint](../../packages/commitlint/README.md):

  ```sh
  pnpx husky add .husky/commit-msg 'pnpm commitlint --edit $1'
  ```

## Usage

- **Automatic** execution [lint-staged](./lint-staged.md) and [commitlint](../../packages/commitlint/README.md) on commit.\
  In case of any failures, commit will be rejected.

## License

[MIT](../../LICENSE) © [Sergey Muravjev](https://github.com/muravjev)

---

[⬅ Back](../../README.md)

---
