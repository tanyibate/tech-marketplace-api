const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const getUserByEmail = require("../api/service/userService").getUserByEmail;

const authenticateUser = async (email, password, done) => {
  const user = await getUserByEmail(email);
  if (user == null) {
    return done(null, false, { message: "No user with that email" });
  }

  try {
    if (await bcrypt.compare(password, user.password)) {
      // encrypt provided password and compare to the users actual password
      return done(null, user);
    } else {
      return done(null, false, { message: "Password incorrect" });
    }
  } catch (e) {
    return done(e);
  }
};

const LocalSignIn = new LocalStrategy(
  { usernameField: "email" },
  authenticateUser
);

module.exports = LocalSignIn;
