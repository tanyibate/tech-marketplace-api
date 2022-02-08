const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();
const prisma = require("../utils/client");

router.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  let newUser;
  const hashedPassword = await bcrypt.hash(password, 10); // hashing password for security so if db gets comprimised passwords cannot get retrieved
  try {
    newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
      },
    });
  } catch (err) {
    console.log(err);
  }
  if (newUser) res.json(newUser);
  else res.status(409).send("Could not create user");
});

module.exports = router;
