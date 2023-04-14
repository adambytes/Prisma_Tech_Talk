# My Prisma Schema

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
