const getUserById = require("../api/service/userService").getUserById;
const LocalSignIn = require("./LocalStrategy");
const GoogleSignIn = require("./GoogleStrategy");

function initialize(passport) {
  passport.use(LocalSignIn);
  passport.use(GoogleSignIn);
  passport.serializeUser((user, done) => done(null, user.id)); // save user to session
  passport.deserializeUser(async (id, done) => {
    const user = await getUserById(id);
    return done(null, user);
  }); //remove user from session
}

module.exports = initialize;
