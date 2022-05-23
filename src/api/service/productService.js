const prisma = require("../../utils/prismaClient");

const getProductBySlug = async (slug) =>
  await prisma.product.findFirst({
    where: {
      slug: slug,
    },
    include: {
      image: true,
      accessories: true,
      gallery: true,
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

const getOtherProducts = async (slug) =>
  await prisma.product.findMany({
    skip: 0,
    take: 3,
    where: {
      NOT: [{ slug: slug }, { otherImage: null }],
    },
    include: {
      otherImage: true,
    },
  });

module.exports = {
  getProductBySlug,
  getProductsByCategory,
  getOtherProducts,
};
