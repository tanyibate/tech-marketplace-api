/*
  Warnings:

  - You are about to drop the column `desktopImageUrl` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `mobileImageUrl` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `tabletImageUrl` on the `Image` table. All the data in the column will be lost.
  - Added the required column `desktop` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobile` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tablet` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Image" DROP COLUMN "desktopImageUrl",
DROP COLUMN "mobileImageUrl",
DROP COLUMN "tabletImageUrl",
ADD COLUMN     "desktop" TEXT NOT NULL,
ADD COLUMN     "mobile" TEXT NOT NULL,
ADD COLUMN     "tablet" TEXT NOT NULL;
