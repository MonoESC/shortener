-- CreateTable
CREATE TABLE "Redirection" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "name" TEXT,
    "description" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Redirection_code_key" ON "Redirection"("code");
