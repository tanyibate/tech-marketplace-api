const express = require("express");
const passport = require("passport");
const { googleAuth } = require("../middlewares/auth");
const getAuthenticatedUser =
  require("./controller/authController").getAuthenticatedUser;

const router = express.Router();

router.get(
  "/login/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/auth/google/callback", googleAuth, getAuthenticatedUser);

module.exports = router;
