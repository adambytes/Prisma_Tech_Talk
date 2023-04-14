# My Prisma Schema

1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource mysql {
  provider = "mysql"
  url      = env("MYSQL_DATABASE_URL")
}

datasource postgresql {
  provider = "postgresql"
  url      = env("POSTGRESQL_DATABASE_URL")
}

datasource sqlite {
  provider = "sqlite"
  url      = file(../database/dev.db)
}

model Movie {
  id      Int     @id @default(autoincrement())
  title   String
  rating  Int
  watched Boolean @default(false)

  @@index([title])
}

```
