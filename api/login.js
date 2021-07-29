const express = require("express");
const passport = require("passport");

const router = express.Router();

router.post(
  "/login",
  [checkNotAuthenticated, passport.authenticate("local")],
  (req, res) => {
    res.send("succesful signin");
  }
);

module.exports = router;
