const prisma = require("../../utils/prismaClient");

const getProductBySlug = async (slug) =>
  await prisma.product.findFirst({
    where: {
      slug: slug,
    },
    include: {
      categoryImage: true,
      otherImage: true,
      image: true,
      heroImage: true,
      homePageImage: true,
    },
  });

const getProductsByCategory = async (category) =>
  await prisma.product.findMany({
    where: {
      category: category,
    },
  });

module.exports = {
  getProductBySlug,
  getProductsByCategory,
};
