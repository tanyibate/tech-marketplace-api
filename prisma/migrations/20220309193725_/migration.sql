/*
  Warnings:

  - You are about to alter the column `price` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - A unique constraint covering the columns `[homePageHeroProductId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[homePageFirstProductId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[homePageSecondProductId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[homePageThirdProductId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Accessories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `features` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isNew` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Accessories" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "features" TEXT NOT NULL,
ADD COLUMN     "homePageFirstProductId" INTEGER,
ADD COLUMN     "homePageHeroProductId" INTEGER,
ADD COLUMN     "homePageSecondProductId" INTEGER,
ADD COLUMN     "homePageThirdProductId" INTEGER,
ADD COLUMN     "isNew" BOOLEAN NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL,
ALTER COLUMN "price" SET DATA TYPE INTEGER;

-- CreateTable
CREATE TABLE "HomePage" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HomePage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InventoryItem" (
    "id" SERIAL NOT NULL,
    "serialNumber" INTEGER NOT NULL,

    CONSTRAINT "InventoryItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "mobileImageUrl" TEXT NOT NULL,
    "tabletImageUrl" TEXT NOT NULL,
    "desktopImageUrl" TEXT NOT NULL,
    "categoryImageId" INTEGER,
    "heroImageId" INTEGER,
    "homePageImageId" INTEGER,
    "productImageId" INTEGER,
    "otherImageId" INTEGER,
    "galleryImageId" INTEGER NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Image_categoryImageId_key" ON "Image"("categoryImageId");

-- CreateIndex
CREATE UNIQUE INDEX "Image_heroImageId_key" ON "Image"("heroImageId");

-- CreateIndex
CREATE UNIQUE INDEX "Image_homePageImageId_key" ON "Image"("homePageImageId");

-- CreateIndex
CREATE UNIQUE INDEX "Image_productImageId_key" ON "Image"("productImageId");

-- CreateIndex
CREATE UNIQUE INDEX "Image_otherImageId_key" ON "Image"("otherImageId");

-- CreateIndex
CREATE UNIQUE INDEX "Product_homePageHeroProductId_key" ON "Product"("homePageHeroProductId");

-- CreateIndex
CREATE UNIQUE INDEX "Product_homePageFirstProductId_key" ON "Product"("homePageFirstProductId");

-- CreateIndex
CREATE UNIQUE INDEX "Product_homePageSecondProductId_key" ON "Product"("homePageSecondProductId");

-- CreateIndex
CREATE UNIQUE INDEX "Product_homePageThirdProductId_key" ON "Product"("homePageThirdProductId");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_homePageHeroProductId_fkey" FOREIGN KEY ("homePageHeroProductId") REFERENCES "HomePage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_homePageFirstProductId_fkey" FOREIGN KEY ("homePageFirstProductId") REFERENCES "HomePage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_homePageSecondProductId_fkey" FOREIGN KEY ("homePageSecondProductId") REFERENCES "HomePage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_homePageThirdProductId_fkey" FOREIGN KEY ("homePageThirdProductId") REFERENCES "HomePage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_categoryImageId_fkey" FOREIGN KEY ("categoryImageId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_heroImageId_fkey" FOREIGN KEY ("heroImageId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_homePageImageId_fkey" FOREIGN KEY ("homePageImageId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_productImageId_fkey" FOREIGN KEY ("productImageId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_otherImageId_fkey" FOREIGN KEY ("otherImageId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_galleryImageId_fkey" FOREIGN KEY ("galleryImageId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
