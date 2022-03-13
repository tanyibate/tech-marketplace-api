/*
  Warnings:

  - The values [Headphones,Speakers,Laptops,Desktops,Mobiles,Televisions,Fridges,Freezers,Earphones] on the enum `Categories` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Categories_new" AS ENUM ('headphones', 'speakers', 'laptops', 'desktops', 'mobiles', 'televisions', 'fridges', 'freezers', 'earphones');
ALTER TABLE "Product" ALTER COLUMN "category" TYPE "Categories_new" USING ("category"::text::"Categories_new");
ALTER TYPE "Categories" RENAME TO "Categories_old";
ALTER TYPE "Categories_new" RENAME TO "Categories";
DROP TYPE "Categories_old";
COMMIT;
