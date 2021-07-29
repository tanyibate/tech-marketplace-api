const express = require("express");

const router = express.Router();
const prisma = require("../utils/client");

router.post("/register", async (req, res) => {
  const { fullName, email, password } = req.body;
  let newUser;
  try {
    newUser = await prisma.user.create({
      data: {
        name: fullName,
        email: email,
        password: password,
      },
    });
  } catch (err) {
    console.log(err);
  }
  if (newUser) res.json(newUser);
  else res.status(409).send("Could not create user");
});

module.exports = router;
