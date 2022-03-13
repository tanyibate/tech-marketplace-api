const express = require("express");
const registerApi = require("./register");
const loginApi = require("./login");

const loginWithGoogleApi = require("./loginWithGoogle");
const userApi = require("./user");
const productApi = require("./product");

const router = express.Router();

router.use(registerApi);
router.use(loginApi);
router.use(loginWithGoogleApi);
router.use(userApi);
router.use(productApi);

module.exports = router;
