const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GOOGLE_CALLBACK_URL = "http://localhost:5000/api/v1/auth/google/callback";
const upsertGoogleUser = require("../api/service/userService").upsertGoogleUser;

const authenticateUser = async (
  req,
  accessToken,
  refreshToken,
  profile,
  done
) => {
  const user = await upsertGoogleUser(profile);
  console.log(user);
  if (!user) {
    return done(null, false, { message: "Error" });
  }
  return done(null, user);
};

const GoogleSignIn = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: GOOGLE_CALLBACK_URL,
    passReqToCallback: true,
  },
  authenticateUser
);

module.exports = GoogleSignIn;
