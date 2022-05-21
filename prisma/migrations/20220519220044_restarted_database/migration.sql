-- AlterIndex
ALTER INDEX "Image_categoryImageId_key" RENAME TO "Image_categoryImageId_unique";

-- AlterIndex
ALTER INDEX "Image_heroImageId_key" RENAME TO "Image_heroImageId_unique";

-- AlterIndex
ALTER INDEX "Image_homePageImageId_key" RENAME TO "Image_homePageImageId_unique";

-- AlterIndex
ALTER INDEX "Image_otherImageId_key" RENAME TO "Image_otherImageId_unique";

-- AlterIndex
ALTER INDEX "Image_productImageId_key" RENAME TO "Image_productImageId_unique";

-- AlterIndex
ALTER INDEX "Product_homePageFirstProductId_key" RENAME TO "Product_homePageFirstProductId_unique";

-- AlterIndex
ALTER INDEX "Product_homePageHeroProductId_key" RENAME TO "Product_homePageHeroProductId_unique";

-- AlterIndex
ALTER INDEX "Product_homePageSecondProductId_key" RENAME TO "Product_homePageSecondProductId_unique";

-- AlterIndex
ALTER INDEX "Product_homePageThirdProductId_key" RENAME TO "Product_homePageThirdProductId_unique";

-- AlterIndex
ALTER INDEX "User_email_key" RENAME TO "User.email_unique";

-- AlterIndex
ALTER INDEX "User_googleId_key" RENAME TO "User.googleId_unique";
