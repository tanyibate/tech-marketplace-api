const express = require("express");
const middlewares = require("../../middlewares/auth");
const authController = require("../controller/authController");

const router = express.Router();

router.get(
  "/auth/user",
  middlewares.checkAuthenticated,
  authController.getAuthenticatedUser
);

module.exports = router;
