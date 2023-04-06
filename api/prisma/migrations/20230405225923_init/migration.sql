-- CreateTable
CREATE TABLE "Player" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "high_score" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "BattleLog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "redPlayerId" INTEGER NOT NULL,
    "redScore" INTEGER NOT NULL,
    "bluePlayerId" INTEGER NOT NULL,
    "blueScore" INTEGER NOT NULL,
    CONSTRAINT "BattleLog_redPlayerId_fkey" FOREIGN KEY ("redPlayerId") REFERENCES "Player" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BattleLog_bluePlayerId_fkey" FOREIGN KEY ("bluePlayerId") REFERENCES "Player" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Player_name_key" ON "Player"("name");
