# Soulara Test

## Setup

[Install Node version manager](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) if you haven't already and make sure you're running the expected version of node

```sh
nvm use
```

Then install the required dependencies using yarn

```sh
yarn install
```

## Development

Running the development server locally.

```sh
yarn dev
```

Alternatively, you can develop components in isolation with additional developer tools using Storybook.

```sh
yarn storybook
```

This is especially useful when developing components that require specialized state, context or are behind a specific flow, like authentication.

## Testing

Test files are defined with the `*.test.*` naming convention and can be run using Vitest using

```sh
yarn test
```

## Deployment

First, build your app for production:

```sh
yarn build
```

Then run the app in production mode:

```sh
yarn start
```

If everything behaves as expected, you're ready to deploy.

```sh
yarn deploy
```

Or deploy to production with

```sh
yarn deploy:prod
```

Normally this would be handled by continuous delivery pipelines, but these haven't been configured for this project.