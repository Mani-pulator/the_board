/*
  Warnings:

  - Added the required column `creatorEmail` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "creatorEmail" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_creatorEmail_fkey" FOREIGN KEY ("creatorEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
