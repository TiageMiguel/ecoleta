# Next Level Week

![Ecoleta server](/assets/ecoleta.png)
[![runs with expo](https://img.shields.io/badge/code%20style-universe-lightgrey?style=flat-square)](https://github.com/expo/expo/tree/master/packages/eslint-config-universe) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## 🚀 Overview

Ecoleta backend its made with Node.js, and written in Typescript.

Built with:

- express
- sqlite
- knex
- multer

First clone this repo, then:

```sh
cd server

# Install the project dependencies.
yarn

# Up database.
yarn knex:migrate

# Seed the database with some values.
yarn knex:seed

# Run the project.
yarn dev
```
