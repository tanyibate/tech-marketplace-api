const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const prisma = require("../utils/client");
const GOOGLE_CALLBACK_URL = "http://localhost:5000/api/v1/auth/google/callback";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: GOOGLE_CALLBACK_URL,
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, done) => {
      console.log(profile);
      const user = await prisma.user.upsert({
        where: {
          googleId: profile.id,
        },
        update: {
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          email: profile.emails[0].value,
          googleId: profile.id,
          profilePictureUrl: profile.photos[0].value,
        },
        create: {
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          email: profile.emails[0].value,
          googleId: profile.id,
          profilePictureUrl: profile.photos[0].value,
        },
      });
      if (!user) {
        return done(null, false, { message: "Error" });
      }
      return done(null, user);
    }
  )
);

const getUserById = async (id) => {
  return await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
};

passport.serializeUser((user, done) => done(null, user.id)); // save user to session
passport.deserializeUser(async (id, done) => {
  const user = await getUserById(id);
  return done(null, user);
}); //remove user from session
