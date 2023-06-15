# I'm dyslexic and I've been ready MySQL instead of SQLite all day long :sobs in developer:

## Set Up Prisma ORM

in `packages/database` directory `npm init` for the `package.json`

<!-- make directory `prisma` and files `schema.prisma` and `seed.ts` (this is wrong, there's a command that will do it for you when you init prisma, see below)
make directory `src` with file `index.ts` -->

`npm install typescript ts-node @types/node --save-dev`
add workspace: `npm init -w ./packages/database`
initialize TypeScript: `npx tsc --init`
install prisma client: `npm install prisma --save-dev`
set up Prisma: `npx prisma init --datasource-provider sqlite` (this sets up prisma directory and schema file)
(next add models to schema file)

--- From Terminal: ---
Next steps:

1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, [read](https://pris.ly/d/getting-started)
2. Run prisma db pull to turn your database schema into a Prisma schema.
3. Run prisma generate to generate the Prisma Client. You can then start querying your database.

---

`brew install sqlite`
`brew install --cask dbeaver-community`
[ref](https://dbeaver.com/2022/03/03/how-to-create-database-connection-in-dbeaver/)
`npx prisma migrate dev --name init` (This command creates SQL migration file and runs it against db, also creates db files and dotenv file)
follow along [here](https://www.prisma.io/docs/getting-started/quickstart)

## SQLite, a 'Database Connector', and Prisma

[Prisma doc for sqlite connection](https://www.prisma.io/docs/concepts/database-connectors/sqlite)
[sqlite.org](https://www.sqlite.org/index.html)

configure `datasource` block in the prisma schema file:
(not sure whether this is done automatically for you with the prisma init command?)

```prisma
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}
```

## Seeding DB

will need script in package.json file to seed db

```json
"prisma": {
  "seed": "ts-node prisma/seed.ts"
}
```

[on seeding db](https://www.prisma.io/docs/guides/migrate/seed-database#how-to-seed-your-database-in-prisma)

## Query Database

(see #4 in the prisma quickstart for boilerplate setup)
[#4](https://www.prisma.io/docs/getting-started/quickstart#4-explore-how-to-send-queries-to-your-database-with-prisma-client)
make a `scripts.ts` file to contain Prisma's database queries
add new 'create' query to the main() function and then `npx ts-node script.ts ` to execute script file (see in terminal 😊)
the scripts file needs:

- Import the PrismaClient constructor from the @prisma/client node module
- Instantiate PrismaClient
- Define an async function named main to send queries to the database
- Call the main function
- Close the database connections when the script terminates

check out `npx prisma studio` GUI to see database data

## Adding Express Server

1. Add dependencies:

- `npm install --save express`
- `npx tsc --init`
- in tsconfig uncommented `outDir` and set it to `./dist` (check reasoning for this?)
  (Q. does "main" in `package.json` mean anything important?)
- `npm i @types/express --save-dev`
- `npm i @types/node --save-dev`
- `npm i ts-node --save-dev`
- `npm install -D typescript`
