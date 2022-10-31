# Package configuration

The purpose of the **[package ↗](https://docs.npmjs.com/about-packages-and-modules)** is keeping app/lib information (version, name, description, dependencies, scripts etc.).

## Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [License](#license)

## Prerequisites

- [➡ rimraf](../tools/rimraf.md) - cross-platform way to remove files and folders

## Setup

- Create `package.json` file:

  ```jsonc
  // package.json

  {
    // Package info

    "name": "monorepo",
    "private": true,
    "description": "...",
    "author": "...",
    "license": "MIT",

    // Common scripts

    "scripts": {
      "clean": "rimraf \"**/node_modules\" && pnpm -r clean",
      "fresh": "pnpm clean && pnpm i",
      "nuke": "rimraf pnpm-lock.yaml && pnpm fresh"
    },

    // Prevent using other package menagers except pnpm

    "engines": {
      "node": ">=14.16.0",
      "pnpm": ">=7.10.0",
      "npm": "please-use-pnpm",
      "yarn": "please-use-pnpm"
    },
    "packageManager": "pnpm@7.10.0"
  }
  ```

- Add npm configuration file:

  ```yaml
  # .npmrc

  engine-strict = true
  auto-install-peers = true
  ```

- Add pnpm workspace file:

  ```yaml
  # pnpm-workspace.yaml

  packages:
    - 'apps/*'
    - 'packages/*'
  ```

## License

[MIT](../../LICENSE) © [Sergey Muravjev](https://github.com/muravjev)

---

[⬅ Back](../../README.md)

---
