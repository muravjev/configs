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

  ```yaml
  # package.json

  "scripts": {
    ...
    "clean": "rimraf \"**/node_modules\"",
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

- Add reference to `@muravjev/prettier-config`

  ```sh
  pnpm add -w -D @muravjev/prettier-config
  ```

- Add prettier configuration file `./configs/.prettierrc.js`

  ```js
  // .prettierrc.js

  module.exports = require('@muravjev/prettier-config');
  ```

- Add prettier ignore patterns file `./configs/.prettierignore`

  ```sh
  # .prettierignore

  **/node_modules
  ```

- Add prettier scripts to `./package.json`

  ```yaml
  # package.json

  "scripts": {
    ...
    "format": "prettier --config ./configs/.prettierrc.js --ignore-path ./configs/.prettierignore"
    "format:fix": "pnpm format --write"
    ...
  }
  ```

- If you using vs code `prettier` plugin, configure it, by adding these settings to `./.vscode/settings.json`

  ```yaml
  # settings.json

  {
    ...
    "prettier.requireConfig": true,
    "prettier.ignorePath": "./configs/.prettierignore",
    "prettier.configPath": "./configs/.prettierrc.js"
    ...
  }
  ```

- Use `prettier`

  ```sh
  pnpm format {path} -c
  pnpm format:fix {path}
  ```

## ESLint

- Add reference to `@muravjev/eslint-config-monorepo`

  ```sh
  pnpm add -w -D @muravjev/eslint-config-monorepo
  ```

- Add eslint configuration file `./configs/.eslintrc.js`

  ```js
  // .eslintrc.js

  module.exports = require('@muravjev/eslint-config-monorepo');
  ```

- Add eslint ignore patterns file `./configs/.eslintignore`

  ```sh
  # .eslintignore

  **/node_modules
  ```

- Add eslint scripts to `./package.json`

  ```yaml
  # package.json

  "scripts": {
    ...
    "lint": "eslint --config ./configs/.eslintrc.js --ignore-path ./configs/.eslintignore"
    "lint:fix": "pnpm lint --fix"
    ...
  }
  ```

- Use `eslint`

  ```sh
  pnpm lint {path} -c
  pnpm lint:fix {path}
  ```

## Husky

- Add reference to `husky`

  ```sh
  pnpm add -w -D husky
  ```

- Add husky's install hooks script to `./package.json`

  ```yaml
  # package.json

  "scripts": {
    ...
    "prepare": "husky install ./configs/.husky"
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
  pnpx husky add configs/.husky/pre-commit 'pnpx lint-staged --quiet'
  ```

- Add lint-staged section to `./package.json`

  > `Prettier` and `ESLint` shall be installed

  ```yaml
  # package.json

  "lint-staged": {
    "*.{js,json}": "pnpm format:fix",
    "*.js": "pnpm lint:fix"
    ...
  }
  ```

## CommitLint

- Add reference to `@muravjev/commitlint-config`

  ```sh
  pnpm add -w -D @muravjev/commitlint-config
  ```

- Add reference to peer dependency `@commitlint/cli`

  ```sh
  pnpm add -w -D @commitlint/cli
  ```

- Add commitlint configuration file `./configs/.commitlintrc.js`

  ```js
  // .commitlintrc.js

  module.exports = require('@muravjev/commitlint-config');
  ```

- Add commitlint script to `./package.json`

  ```yaml
  # package.json

  "scripts": {
    ...
    "commitlint": "commitlint -e-config ./configs/.commitlintrc.js"
    ...
  }
  ```

- Add husky hook `commit-msg`

  > `Husky` shall be installed

  ```sh
  pnpx husky add configs/.husky/commit-msg 'pnpm commitlint --edit $1'
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
  # create changesets
  pnpm changesets

  # ... make changes

  # create changelogs and update versions
  pnpm changesets version

  # commit changes
  git add .
  git commit -m "chore: release"

  # add and commit tags
  pnpm changesets tag
  git push --follow-tags

  # publish package
  pnpm publish

  ```
