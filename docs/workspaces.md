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

## Setup Server

`npx tsc --init` for `tsconfig.json` file
uncomment `outDir` in the tsconfig file and change it to `"outDir": "./dist"` (?)
change `app.js` to `app.ts` and change "main" in the `package.json`
`npm install -D concurrently nodemon`
add scripts

```json
    "build": "npx tsc",
    "start": "node dist/app.ts",
    "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/app.ts\""
```

now you can run `npm run dev`
`npm run build`
should have a dist folder now

[this was great!](https://blog.logrocket.com/how-to-set-up-node-typescript-express/)

### Commands Record

`npm install --save express`
`npx tsc --init`
`npm install -D concurrently nodemon` (I think I removed 'concurrently' because it didn't make sense to me at the time?)
`npm install cors`
`npm install errorhandler`
`npm i node-notifier`
`npm i --save-dev @types/cors`
`npm i --save-dev @types/node-notifier`
`npm i --save-dev @types/errorhandler`
`npm i moment --save`

## Express Trivia

[I like this FAQ](https://expressjs.com/en/starter/faq.html#how-should-i-structure-my-application)
With Express.js, how do I define models?
Express has no notion of a database. This concept is left up to third-party Node modules, allowing you to interface with nearly any database.

Which template engines does Express.js support?
Express supports any template engine that conforms with the (path, locals, callback) signature.

How should I structure my application?
There is no definitive answer to this question. The answer depends on the scale of your application and the team that is involved. To be as flexible as possible, Express makes no assumptions in terms of structure.

Express.js and Middleware:
Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.
Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.

Bind application-level middleware to an instance of the app object by using the app.use() and app.METHOD() functions, where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.

_Error-handling middleware_ in Express.js always takes four arguments. You must provide four arguments to identify it as an error-handling middleware function. Even if you don’t need to use the next object, you must specify it to maintain the signature. Otherwise, the next object will be interpreted as regular middleware and will fail to handle errors.
