-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_galleryImageId_fkey";

-- AlterTable
ALTER TABLE "Image" ALTER COLUMN "galleryImageId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_galleryImageId_fkey" FOREIGN KEY ("galleryImageId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
