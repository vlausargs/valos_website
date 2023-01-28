/*
  Warnings:

  - Made the column `desc` on table `Tag` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tag" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "desc" TEXT NOT NULL
);
INSERT INTO "new_Tag" ("desc", "id") SELECT "desc", "id" FROM "Tag";
DROP TABLE "Tag";
ALTER TABLE "new_Tag" RENAME TO "Tag";
CREATE UNIQUE INDEX "Tag_id_key" ON "Tag"("id");
CREATE UNIQUE INDEX "Tag_desc_key" ON "Tag"("desc");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
