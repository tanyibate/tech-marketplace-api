-- RenameIndex
ALTER INDEX "Image_categoryImageId_unique" RENAME TO "Image_categoryImageId_key";

-- RenameIndex
ALTER INDEX "Image_heroImageId_unique" RENAME TO "Image_heroImageId_key";

-- RenameIndex
ALTER INDEX "Image_homePageImageId_unique" RENAME TO "Image_homePageImageId_key";

-- RenameIndex
ALTER INDEX "Image_otherImageId_unique" RENAME TO "Image_otherImageId_key";

-- RenameIndex
ALTER INDEX "Image_productImageId_unique" RENAME TO "Image_productImageId_key";

-- RenameIndex
ALTER INDEX "Product_homePageFirstProductId_unique" RENAME TO "Product_homePageFirstProductId_key";

-- RenameIndex
ALTER INDEX "Product_homePageHeroProductId_unique" RENAME TO "Product_homePageHeroProductId_key";

-- RenameIndex
ALTER INDEX "Product_homePageSecondProductId_unique" RENAME TO "Product_homePageSecondProductId_key";

-- RenameIndex
ALTER INDEX "Product_homePageThirdProductId_unique" RENAME TO "Product_homePageThirdProductId_key";

-- RenameIndex
ALTER INDEX "User.email_unique" RENAME TO "User_email_key";

-- RenameIndex
ALTER INDEX "User.googleId_unique" RENAME TO "User_googleId_key";
