/*
  Warnings:

  - You are about to drop the column `bluePlayerId` on the `BattleLog` table. All the data in the column will be lost.
  - You are about to drop the column `blueScore` on the `BattleLog` table. All the data in the column will be lost.
  - You are about to drop the column `redPlayerId` on the `BattleLog` table. All the data in the column will be lost.
  - You are about to drop the column `redScore` on the `BattleLog` table. All the data in the column will be lost.
  - Added the required column `blue_player_id` to the `BattleLog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `blue_score` to the `BattleLog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `red_player_id` to the `BattleLog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `red_score` to the `BattleLog` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BattleLog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "red_player_id" INTEGER NOT NULL,
    "red_score" INTEGER NOT NULL,
    "blue_player_id" INTEGER NOT NULL,
    "blue_score" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "BattleLog_red_player_id_fkey" FOREIGN KEY ("red_player_id") REFERENCES "Player" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BattleLog_blue_player_id_fkey" FOREIGN KEY ("blue_player_id") REFERENCES "Player" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BattleLog" ("id") SELECT "id" FROM "BattleLog";
DROP TABLE "BattleLog";
ALTER TABLE "new_BattleLog" RENAME TO "BattleLog";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
