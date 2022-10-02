# Muravjev's monorepo config

Common config for monorepo with `pnpm` + `eslint` + `prettier` + `husky` + `lintstaged` + `commitlint` + `changesets` etc.

The purpose of these config is to define a common set of strict rules to validate the coding standards in monorepo.

# Setup

- [Setup Monorepo](#setup-monorepo)
  - [Git](#git)
  - [Package](#package)
  - [Scripts](#scripts)
  - [Workspace](#workspace)
- [Configure monorepo](#configure-monorepo)
  - [Prettier](#prettier)
  - [ESLint](#eslint)
  - [Husky](#husky)
  - [LintStaged](#lintstaged)
  - [CommitLint](#commitlint)
  - [Changesets](#changesets)

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

# Configure monorepo

## Prettier

- Add reference to `@muravjev/prettier-config`

  ```
  pnpm add -w -D @muravjev/prettier-config
  ```

- Add prettier configuration file `./configs/.prettierrc.js`

  ```
  // .prettierrc.js

  module.exports = require('@muravjev/prettier-config');
  ```

- Add prettier ignore patterns file `./configs/.prettierignore`

  ```
  // .prettierignore

  **/node_modules
  ```

- Add prettier scripts to `./package.json`

  ```
  // package.json

  "scripts": {
    ...
    "format": "prettier --config ./configs/.prettierrc.js --ignore-path ./configs/.prettierignore"
    "format:fix": "pnpm format --write"
    ...
  }
  ```

- If you using vs code `prettier` plugin, configure it, by adding these settings to `./.vscode/settings.json`

  ```
  // settings.json

  {
    ...
    "prettier.requireConfig": true,
    "prettier.ignorePath": "./configs/.prettierignore",
    "prettier.configPath": "./configs/.prettierrc.js"
    ...
  }
  ```

> **USAGE**:
>
> - pnpm format {path} -c
> - pnpm format:fix {path}

## ESLint

- Add reference to `@muravjev/eslint-config-monorepo`

  ```
  pnpm add -w -D @muravjev/eslint-config-monorepo
  ```

- Add eslint configuration file `./configs/.eslintrc.js`

  ```
  // .eslintrc.js

  module.exports = require('@muravjev/eslint-config-monorepo');
  ```

- Add eslint ignore patterns file `./configs/.eslintignore`

  ```
  // .eslintignore

  **/node_modules
  ```

- Add eslint scripts to `./package.json`

  ```
  // package.json

  "scripts": {
    ...
    "lint": "eslint --config ./configs/.eslintrc.js --ignore-path ./configs/.eslintignore"
    "lint:fix": "pnpm lint --fix"
    ...
  }
  ```

> **USAGE**:
>
> - pnpm lint {files}
> - pnpm lint:fix {files}

## Husky

- Add reference to `husky`

  ```
  pnpm add -w -D husky
  ```

- Add husky's install hooks script to `./package.json`

  ```
  // package.json

  "scripts": {
    ...
    "prepare": "husky install ./configs/.husky"
    ...
  }
  ```

## LintStaged

- Add reference to `lint-staged`

  ```
  pnpm add -w -D lint-staged
  ```

- Add husky `pre-commit` hook

  > `Husky` shall be installed

  ```
  pnpx husky add configs/.husky/pre-commit 'pnpx lint-staged --quiet'
  ```

- Add lint-staged section to `./package.json`

  > `Prettier` and `ESLint` shall be installed

  ```
  // package.json

  "lint-staged": {
    "*.{js,json}": "pnpm format:fix",
    "*.js": "pnpm lint:fix"
  }
  ```

## CommitLint

- Add reference to `@muravjev/commitlint-config`

  ```
  pnpm add -w -D @muravjev/commitlint-config
  ```

- Add reference to peer dependency `@commitlint/cli`

  ```
  pnpm add -w -D @commitlint/cli
  ```

- Add commitlint configuration file `./configs/.commitlintrc.js`

  ```
  // .commitlintrc.js

  module.exports = require('@muravjev/commitlint-config');
  ```

- Add commitlint script to `./package.json`

  ```
  // package.json

  "scripts": {
    ...
    "commitlint": "commitlint -e-config ./configs/.commitlintrc.js"
    ...
  }
  ```

- Add husky hook `commit-msg`

  > `Husky` shall be installed

  ```
  pnpx husky add configs/.husky/commit-msg 'pnpm commitlint --edit $1'
  ```

## Changesets

- Add reference to `@changesets/cli`

  ```
  pnpm add -w -D @changesets/cli
  ```

- Initialize changesets

  ```
  pnpm changeset init
  ```

- Use changesets

  ```bash
  pnpm changesets

  # ... make changes

  pnpm changesets version

  # ... commit chore: release

  pnpm publish

  ```
