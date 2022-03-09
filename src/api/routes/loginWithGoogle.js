const express = require("express");
const passport = require("passport");
const { googleAuth } = require("../../middlewares/auth");
const authController = require("../controller/authController");

const router = express.Router();

router.get("/login/google", authController.callGoogleLogin);

router.get(
  "/auth/google/callback",
  googleAuth,
  authController.getAuthenticatedUser
);

module.exports = router;
