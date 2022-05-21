const passport = require("passport");
const successLoginUrl = `${process.env.FRONT_END_URL}/login/success`;
const errorLoginUrl = `${process.env.FRONT_END_URL}/login/error`;

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.status(401).send("unauthorized");
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    res.send("session is already in place");
  }
  next();
}

const googleAuth = passport.authenticate("google", {
  failureMessage: "Cannot login to Google, please try again later!",
  failureRedirect: errorLoginUrl,
  successRedirect: successLoginUrl,
});
module.exports = {
  checkAuthenticated,
  checkNotAuthenticated,
  googleAuth,
};
