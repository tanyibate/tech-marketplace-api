const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

let prisma = new PrismaClient();
prisma.$use(async (params, next) => {
  if (params.model == "User" && params.action == "create") {
    const password = params.args.data.password;
    const hashedPassword = await bcrypt.hash(password, 10); // hashing password for security so if db gets comprimised passwords cannot get retrieved
    params.args.data.password = hashedPassword;
  }
  return next(params);
});

module.exports = prisma;
