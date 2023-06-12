# Workspaces

[main](https://docs.npmjs.com/cli/v9/using-npm/workspaces)
[blog](https://ruanmartinelli.com/posts/npm-7-workspaces-1)
[for pnpm but interesting](https://vedanshmehra.hashnode.dev/setting-up-a-monorepo-with-vite-typescript-and-pnpm-workspaces)

[for creating a package.json file](https://docs.npmjs.com/creating-a-package-json-file)

## Setup

mkdir `directory-name`
cd into `directory-name`
`npm -v` (v7 or more)
`npm init` in root to set up `package.json` file

add root-level dependencies:
`npm install -D typescript`
`git init`

add workspaces property:

```json
"workspaces": [
    "packages/a"
]
```

define a new workspace with `npm init -w ./packages/a` where 'a' is the workspace, or navigate to `packages` and create workspace (`npm create vite@latest some-workspace-name` for instance) then do `npm init -w ./packages/some-workspace-name` to add workspace to root

WORKSPACE
`mkdir server`
cd into `/packages/server`
`npm init` and type `app.js` for entrypoint
`npm install express dotenv`
`touch app.js` and add the Hello World express basics, for instance:
[reference](https://expressjs.com/en/starter/hello-world.html)
[reference2](https://www.linode.com/docs/guides/using-nodejs-typescript-and-express-to-build-a-web-server/)
`touch .env` and add PORT=8000
`node app.js` to run
once setup, add it to packages in the root `package.json` with the command: `npm init -w ./packages/server`
`npm install typescript ts-node @types/node @types/express --save-dev`

## Useful Terminal Commands

```t
# Run "test" script on all packages
npm run test --workspaces

# Tip - this also works:
npm run test  -ws

# Runs "test" only on package-a
npm run test --workspace package-a

# Tip - this also works:
npm run test -w package-a
```

```t
# Install `lodash` on `package-a`
npm install lodash --workspace package-a

# Install `tap` on `package-b` as a dev dependency
npm install tap --workspace package-b --save-dev

# Install `package-a` on `package-b`
npm install package-a --workspace package-b

# Install `eslint` in all packages
npm install eslint --workspaces
```
