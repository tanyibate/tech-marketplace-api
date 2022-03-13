const router = require("express").Router();
const productController = require("../controller/productController");

router.get("/products/:slug", productController.getProductBySlug);
router.get(
  "/products/category/:category",
  productController.getProductsByCategory
);

module.exports = router;
