/*
  Warnings:

  - You are about to drop the column `name` on the `Accessories` table. All the data in the column will be lost.
  - Added the required column `item` to the `Accessories` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Accessories" DROP COLUMN "name",
ADD COLUMN     "item" TEXT NOT NULL;
