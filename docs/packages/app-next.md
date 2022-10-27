# App | `next`

## Setup

- Create next-app `foo` app:

  ```sh
  pnpm create next-app --ts apps/foo
  ```

- Separate `foo` code from `foo` configuration:

  ```sh
  # Create src folder
  mkdir apps/foo/src

  # Move `pages` and `styles` to `src` folder
  mv apps/foo/pages apps/foo/src
  mv apps/foo/styles apps/foo/src
  ```

- Add scripts

  ```jsonc
  // apps/foo/package.json

  "scripts": {
    ...
    "clean": "rimraf .next .build .coverage tsconfig.tsbuildinfo",
    "export": "pnpm build && next export -o .build",
    ...
  }
  ```
