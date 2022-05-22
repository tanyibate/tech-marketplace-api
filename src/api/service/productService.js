const prisma = require("../../utils/prismaClient");

const getProductBySlug = async (slug) =>
  await prisma.product.findFirst({
    where: {
      slug: slug,
    },
    include: {
      image: true,
    },
  });

const getProductsByCategory = async (category) =>
  await prisma.product.findMany({
    where: {
      category: category,
    },
    include: {
      categoryImage: true,
    },
  });

module.exports = {
  getProductBySlug,
  getProductsByCategory,
};
