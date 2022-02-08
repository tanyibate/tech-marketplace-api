/*
  Warnings:

  - You are about to drop the column `categoryImage` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `imageGallery` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `othersImage` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `productImage` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - Added the required column `category` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Categories" AS ENUM ('Headphones', 'Speakers', 'Laptops', 'Desktops', 'Mobiles', 'Televisions', 'Fridges', 'Freezers', 'Earphones');

-- DropForeignKey
ALTER TABLE "Accessories" DROP CONSTRAINT "Accessories_productId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "categoryImage",
DROP COLUMN "imageGallery",
DROP COLUMN "othersImage",
DROP COLUMN "productImage",
ADD COLUMN     "category" "Categories" NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Accessories" ADD CONSTRAINT "Accessories_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "User.email_unique" RENAME TO "User_email_key";

-- RenameIndex
ALTER INDEX "User.googleId_unique" RENAME TO "User_googleId_key";
