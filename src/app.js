const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const initializePassport = require("./auth/passport");

const middlewares = require("./middlewares");
const api = require("./api/routes");
const passport = require("passport");
//require("../auth/passportGoogleSSO");

const app = express();

const store = new MongoDBStore({
  uri: process.env.MONGO_URI,
  collection: process.env.MONGO_SESSION_COLLECTION,
});

app.use(express.json());

app.use(morgan("dev"));
app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONT_END_URL,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

initializePassport(passport);
app.use(express.json());

app.use(
  session({
    store: store,
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
      sameSite: "None",
      secure: process.env.FRONT_END_URL.includes("https") ? true : false,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

app.use("/api/v1", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
