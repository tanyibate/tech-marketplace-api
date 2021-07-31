const express = require("express");
const middlewares = require("../middlewares/auth");

const router = express.Router();

router.get("/auth/user", middlewares.checkAuthenticated, async (req, res) => {
  res.json(req.user);
});

module.exports = router;
