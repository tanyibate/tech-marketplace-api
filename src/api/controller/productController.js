const productService = require("../service/productService");

const getProductBySlug = async (req, res) => {
  const { slug } = req.params;
  try {
    const product = await productService.getProductBySlug(slug);
    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "unable to get product",
    });
  }
};

const getProductsByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const products = await productService.getProductsByCategory(category);
    console.log(products);
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "unable to get products",
    });
  }
};

const getOtherProducts = async (req, res) => {
  const { slug } = req.params;
  try {
    const products = await productService.getOtherProducts(slug);
    console.log(products);
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "unable to get products",
    });
  }
};

module.exports = {
  getProductBySlug,
  getProductsByCategory,
  getOtherProducts,
};
