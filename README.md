# Monorepo config

Common config for monorepos with `pnpm` + `eslint` + `prettier` + `husky` + `lintstaged` + `commitlint` + `changesets` etc.

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

  ```sh
  git init
  ```

- Add git ignore file `./.gitignore`

  ```sh
  # .gitignore

  node_modules
  ```

- Add git attributes file `./.gitattributes`

  ```sh
  # .gitattributes

  **/pnpm-lock.yaml -diff
  ```

## Package

- Create package file `./package.json`

  ```sh
  pnpm init
  ```

## Scripts

- Add global `rimraf`

  ```sh
  npm add -g rimraf
  ```

- Add common scripts to `./package.json`

  ```json5
  // package.json

  "scripts": {
    ...
    "clean": "rimraf \"**/node_modules\" && pnpm -r clean",
    "fresh": "pnpm clean && pnpm i"
    ...
  }
  ```

## Workspace

- Add pnpm workspace file `./pnpm-workspace.yaml`

  ```yaml
  # pnpm-workspace.yaml

  packages:
    - 'packages/*'
  ```

# Configure monorepo

## Prettier

- Add reference to `@muravjev/prettier-config` and its peer dependencies

  ```sh
  pnpx install-peerdeps @muravjev/prettier-config --pnpm
  ```

- Add prettier configuration file `./.prettierrc.js`

  ```js
  // .prettierrc.js

  module.exports = require('@muravjev/prettier-config');
  ```

- Add prettier ignore patterns file `./.prettierignore`

  ```sh
  # .prettierignore

  **/node_modules
  pnpm-lock.yaml
  ```

- Add prettier scripts to `./package.json`

  ```json5
  // package.json

  "scripts": {
    ...
    "format": "prettier",
    "format:check": "pnpm format --check --debug-check",
    "format:fix": "pnpm format --write"
    ...
  }
  ```

- If you using vs code `prettier` plugin, configure it, by adding these settings to `./.vscode/settings.json`

  ```json5
  // settings.json

  {
    ...
    "files.eol": "\n",
    "prettier.requireConfig": true,
    ...
  }
  ```

- Use `prettier`

  ```sh
  pnpm format:check .
  pnpm format:fix .
  ```

## ESLint

- Add reference to `@muravjev/eslint-config` and its peer dependencies

  ```sh
  pnpx install-peerdeps @muravjev/eslint-config --pnpm
  ```

- Add eslint configuration file `./.eslintrc.js`

  ```js
  // .eslintrc.js

  module.exports = require('@muravjev/eslint-config');
  ```

- Add eslint ignore patterns file `./.eslintignore`

  ```sh
  # .eslintignore

  **/node_modules
  ```

- Add eslint scripts to `./package.json`

  ```json5
  // package.json

  "scripts": {
    ...
    "lint": "eslint",
    "lint:fix": "pnpm lint --fix"
    ...
  }
  ```

- If you using vs code `eslint` plugin, configure it, by adding these settings to `./.vscode/settings.json`

  ```json5
  // settings.json

  {
    ...
    "eslint.enable": true,
    "eslint.alwaysShowStatus": true,
    "eslint.debug": false,
    "eslint.workingDirectories": [{ "pattern": "./packages/*/" }]
    ...
  }
  ```

- Use `eslint`

  ```sh
  pnpm lint .
  pnpm lint:fix .
  ```

## Husky

- Add reference to `husky`

  ```sh
  pnpm add -w -D husky
  ```

- Add husky's install hooks script to `./package.json`

  ```json5
  // package.json

  "scripts": {
    ...
    "prepare": "husky install"
    ...
  }
  ```

## LintStaged

- Add reference to `lint-staged`

  ```sh
  pnpm add -w -D lint-staged
  ```

- Add husky `pre-commit` hook

  > `Husky` shall be installed

  ```sh
  pnpx husky add .husky/pre-commit 'pnpx lint-staged --quiet'
  ```

- Add lint-staged section to `./package.json`

  > `Prettier` and `ESLint` shall be installed

  ```json5
  // package.json

  "lint-staged": {
    "*.{js,json}": "pnpm format:fix",
    "*.js": "pnpm lint:fix"
    ...
  }
  ```

## CommitLint

- Add reference to `@muravjev/commitlint-config` and its peer dependencies

  ```sh
  pnpx install-peerdeps @muravjev/commitlint-config --pnpm
  ```

- Add commitlint configuration file `./.commitlintrc.js`

  ```js
  // .commitlintrc.js

  module.exports = require('@muravjev/commitlint-config');
  ```

- Add commitlint script to `./package.json`

  ```json5
  // package.json

  "scripts": {
    ...
    "commitlint": "commitlint"
    ...
  }
  ```

- Add husky hook `commit-msg`

  > `Husky` shall be installed

  ```sh
  pnpx husky add .husky/commit-msg 'pnpm commitlint --edit $1'
  ```

## Changesets

- Add reference to `@changesets/cli`

  ```sh
  pnpm add -w -D @changesets/cli
  ```

- Initialize changesets

  ```sh
  pnpm changeset init

  ```

- Use changesets

  ```sh
  # create changeset
  pnpm changeset add

  # ... make changes

  # create changelogs and update versions
  pnpm changeset version

  # commit changes
  git add .
  git commit -m "chore: release"

  # add and commit tags
  pnpm changeset tag
  git push --follow-tags

  # publish package
  pnpm publish --access=public

  ```
