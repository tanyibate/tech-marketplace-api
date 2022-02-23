const prisma = require("../../utils/prismaClient");

const createNewUser = async (data) => {
  return await prisma.user.create({
    data,
  });
};

const getUserById = async (id) => {
  return await prisma.user.findUnique({
    where: {
      id,
    },
  });
};

const getUserByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
};

const upsertGoogleUser = async (profile) => {
  return await prisma.user.upsert({
    where: {
      googleId: profile.id,
    },
    update: {
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
      email: profile.emails[0].value,
      googleId: profile.id,
      profilePictureUrl: profile.photos[0].value,
    },
    create: {
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
      email: profile.emails[0].value,
      googleId: profile.id,
      profilePictureUrl: profile.photos[0].value,
    },
  });
};

module.exports = {
  createNewUser,
  getUserById,
  getUserByEmail,
  upsertGoogleUser,
};
