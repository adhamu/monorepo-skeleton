# Monorepo Skeleton

A skeleton boilerplate mono repo for a React app with an API backend using Lerna and Yarn Workspaces.

## Technologies

- React
- Typescript
- Koa

## Tooling

- [Vite](https://vite.dev)
- [React Router](https://reactrouter.com)
- [Zero](https://github.com/adhamu/zero)

## Testing

- Jest
- Testing Library
- Supertest

## Getting Started

This repository is set as a template.

You can click the `Use this template` on the repository homepage to create a new repository based off this one.

Once you have done so.

```sh
$ git clone https://github.com/<username>/<project>
$ cd <project>
$ yarn
```

## Development

```sh
$ yarn dev
```

Open up [http://localhost:5173](http://localhost:5173)

## Workspace command examples

```sh
# Add a dependency
yarn workspace ui add lodash -D

# Run a script
yarn workspace api test

# Add a global dependency
yarn add lodash -W
```
