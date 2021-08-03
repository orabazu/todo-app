# todo app

Todo app with react, redux, and tailwindcss. Custom scss and scss modules are enabled by webpack as well.

### Project Structure

#### Directory Tree

- actions -> redux actions
- assets -> assets
- components -> reusable components
- const -> app-wise constants
- hooks -> custom hooks if need be
- lib -> utils and other various components used all around the app.
- reducers -> redux reducers
- services -> http request managers
- types -> TS types
- views -> might be used with react-router if need be
- .vscode -> .vscode settings i prefer

### Installation

```
git clone git@github.com:zhunor/todo-app.git
cd todo-app
```

### Usage

#### with yarn

```
yarn && yarn start
```

#### with docker-compose

notes: docker is set up only for development purposes, for now do not use it for production builds, live-reloading enabled by a volume for files under `/src`

```
docker compose up
```

### Build

Generate all js/css bundles

```
yarn build
```

#### some notes about webpack

- dev and prod configs are provided
- scss and scss.module loaders are added anyway for further needs and @teamsupercell/typings-for-css-modules-loader is used to get auto-generated types

### Live

Go to `localhost:8080` or `0.0.0.0:8080` to see your project live!
