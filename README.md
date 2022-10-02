# Muravjev's monorepo config

Common config for monorepo with `pnpm` + `eslint` + `prettier` + `husky` + `lintstaged` + `commitlint` + `changesets` etc.

The purpose of these config is to define a common set of strict rules to validate the coding standards in monorepo.

# Setup

- [Setup Monorepo](#setup-monorepo)
  - [Git](#git)
  - [Package](#package)
  - [Scripts](#scripts)
  - [Workspace](#workspace)

# Setup monorepo

## Git

- Create git repo

  ```
  git init
  ```

- Add git ignore file `./.gitignore`

  ```
  // .gitignore

  node_modules
  ```

- Add git attributes file `./.gitattributes`

  ```
  // .gitattributes

  **/pnpm-lock.yaml -diff
  ```

## Package

- Add package file `./package.json`

  ```
  pnpm init
  ```

## Scripts

- Add global `rimraf`

  ```
  npm add -g rimraf
  ```

- Add common scripts to `./package.json`

  ```
  // package.json

  "scripts": {
    ...
    "clean": "rimraf \"**/node_modules\"",
    "fresh": "pnpm clean && pnpm i"
    ...
  }
  ```

## Workspace

- Add pnpm workspace file `./pnpm-workspace.yaml`

  ```
  // pnpm-workspace.yaml

  packages:
    - 'packages/*'
  ```
