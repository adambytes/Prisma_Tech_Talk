-- CreateTable
CREATE TABLE "Movie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "watched" BOOLEAN NOT NULL DEFAULT false
);

-- CreateIndex
CREATE INDEX "Movie_title_idx" ON "Movie"("title");
