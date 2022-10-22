# Configuration

Common configs for projects with `pnpm` + `eslint` + `prettier` + `remark` + `husky` + `lintstaged` + `commitlint` + `changesets` + `typescript` etc.

The purpose of these configs is to define a common set of strict rules to validate the coding standards.

## Contents

- [Setup monorepo](#setup-monorepo)
  - [Git](#git)
  - [Package](#package)
  - [Scripts](#scripts)
  - [Workspace](#workspace)
- [Configure monorepo](#configure-monorepo)
  - [Prettier](#prettier)
  - [ESLint](#eslint)
  - [Remark](#remark)
  - [Husky](#husky)
  - [LintStaged](#lintstaged)
  - [CommitLint](#commitlint)
  - [Changesets](#changesets)
- [Configure app (ts + next)](#configure-app-ts--next)
  - [ESLint (ts + next)](#eslint-ts--next)
  - [Typescript (ts + next)](#typescript-ts--next)
- [Configure lib (ts + react)](#configure-lib-ts--react)
  - [ESLint (ts + react)](#eslint-ts--react)
  - [Typescript (ts + react)](#typescript-ts--react)

## Setup monorepo

### Git

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

### Package

- Create package file `./package.json`

  ```sh
  pnpm init
  ```

### Scripts

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

### Workspace

- Add pnpm workspace file `./pnpm-workspace.yaml`

  ```yaml
  # pnpm-workspace.yaml

  packages:
    - 'apps/*'
    - 'packages/*'
  ```

## Configure monorepo

### Prettier

- Add reference to `@muravjev/configs-prettier` and its peer dependencies

  ```sh
  pnpx install-peerdeps @muravjev/configs-prettier --pnpm --extra-args "-w"
  ```

- Add prettier configuration file `./.prettierrc.js`

  ```js
  // .prettierrc.js

  module.exports = require('@muravjev/configs-prettier');
  ```

- Add prettier ignore patterns file `./.prettierignore`

  ```sh
  # .prettierignore

  node_modules/
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

- Configure vs code `prettier` plugin, by adding these settings to `./.vscode/settings.json`

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

### ESLint

- Add reference to `@muravjev/configs-eslint-ts` and its peer dependencies

  ```sh
  pnpx install-peerdeps @muravjev/configs-eslint-ts --pnpm --extra-args "-w"
  ```

- Add eslint configuration file `./.eslintrc.js`

  ```js
  // .eslintrc.js

  module.exports = require('@muravjev/configs-eslint-ts');
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

- Configure vs code `eslint` plugin, by adding these settings to `./.vscode/settings.json`

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

### Remark

- Add reference to `@muravjev/configs-remark` and its peer dependencies

  ```sh
  pnpx install-peerdeps @muravjev/configs-remark --pnpm --extra-args "-w"
  ```

- Add prettier configuration file `./.remarkrc.mjs`

  ```js
  // .remarkrc.mjs

  import config from '@muravjev/configs-remark';
  export default config;
  ```

- Add prettier ignore patterns file `./.remarkignore`

  ```sh
  # .remarkignore

  node_modules/
  ...
  ```

- Add remark scripts to `./package.json`

  ```json5
  // package.json

  "scripts": {
    ...
    "remark": "remark",
    "remark:fix": "pnpm remark . --output"
    ...
  }
  ```

- Configure vs code `prettier` plugin, by adding these settings to `./.vscode/settings.json`

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

### Husky

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

### LintStaged

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
    "*.{js,ts,tsx,md,json,yaml}": "pnpm format:fix",
    "*.{js,ts,tsx}": "pnpm lint:fix"
    ...
  }
  ```

### CommitLint

- Add reference to `@muravjev/configs-commitlint` and its peer dependencies

  ```sh
  pnpx install-peerdeps @muravjev/configs-commitlint --pnpm --extra-args "-w"
  ```

- Add commitlint configuration file `./.commitlintrc.js`

  ```js
  // .commitlintrc.js

  module.exports = require('@muravjev/configs-commitlint');
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

### Changesets

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

  # publish all changed packages and add version tags
  pnpm changeset publish
  git push --follow-tags

  # OR

  # add version tags
  pnpm changeset tag
  git push --follow-tags

  # manually publish package
  pnpm publish --access=public

  ```

## Configure app (ts + next)

### ESLint (ts + next)

- Add reference to `@muravjev/configs-eslint-ts-next` and its peer dependencies

  ```sh
  pnpx install-peerdeps @muravjev/configs-eslint-ts-next --pnpm --extra-args "-D"
  ```

- Add eslint configuration file `./.eslintrc.js`

  ```js
  // .eslintrc.js

  module.exports = require('@muravjev/configs-eslint-ts-next');
  ```

### Typescript (ts + next)

- Add reference to `@muravjev/configs-ts-next` and its peer dependencies

  ```sh
  pnpx install-peerdeps @muravjev/configs-ts-next --pnpm --extra-args "-D"
  ```

- Add typescript configuration file `./tsconfig.json`

  ```json
  // tsconfig.json

  {
    "extends": "@muravjev/configs-ts-next",
    "compilerOptions": {
      "baseUrl": "src",
      "rootDir": "src"
    },
    "include": ["next-env.d.ts", "src"]
  }
  ```

## Configure lib (ts + react)

### ESLint (ts + react)

- Add reference to `@muravjev/configs-eslint-ts-react` and its peer dependencies

  ```sh
  pnpx install-peerdeps @muravjev/configs-eslint-ts-react --pnpm --extra-args "-D"
  ```

- Add eslint configuration file `./.eslintrc.js`

  ```js
  // .eslintrc.js

  module.exports = require('@muravjev/configs-eslint-ts-react');
  ```

### Typescript (ts + react)

- Add reference to `@muravjev/configs-ts-react` and its peer dependencies

  ```sh
  pnpx install-peerdeps @muravjev/configs-ts-react --pnpm --extra-args "-D"
  ```

- Add typescript configuration file `./tsconfig.json`

  ```json
  // tsconfig.json

  {
    "extends": "@muravjev/configs-ts-react",
    "compilerOptions": {
      "baseUrl": "src",
      "rootDir": "src"
    },
    "include": ["src"]
  }
  ```
