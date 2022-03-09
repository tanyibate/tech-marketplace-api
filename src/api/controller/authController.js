const passport = require("passport");

const getAuthenticatedUser = async (req, res) => {
  const user = req.user;
  delete user.password;
  res.json(user);
};

const callGoogleLogin = passport.authenticate("google", {
  scope: ["profile", "email"],
});

module.exports = {
  getAuthenticatedUser,
  callGoogleLogin,
};
