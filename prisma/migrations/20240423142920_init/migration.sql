-- CreateTable
CREATE TABLE "Redirection" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "urlCode" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "name" TEXT,
    "description" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Redirection_urlCode_key" ON "Redirection"("urlCode");
