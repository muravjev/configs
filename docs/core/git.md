# Git configuration

The purpose of the **[git ↗](https://git-scm.com/)** is handling version control.

## Contents

- [Setup](#setup)
- [License](#license)

## Setup

- Create git repo

  ```sh
  git init
  ```

- Add git ignore file:

  ```sh
  # .gitignore

  node_modules/
  ```

- Add git attributes file:

  ```sh
  # .gitattributes

  **/pnpm-lock.yaml -diff
  ```

## License

[MIT](../../LICENSE) © [Sergey Muravjev](https://github.com/muravjev)

---

[⬅ Back](../../README.md)

---
