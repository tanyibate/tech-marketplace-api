const express = require("express");
const passport = require("passport");
const { checkNotAuthenticated } = require("../../middlewares/auth");
const loginController = require("../controller/loginController");

const router = express.Router();

router.post(
  "/login",
  [checkNotAuthenticated, passport.authenticate("local")],
  loginController.succesfulLogin
);

module.exports = router;
