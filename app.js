const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();
const session = require("express-session");
let RedisStore = require("connect-redis")(session);
const redis = require("redis");
const prisma = require("./utils/client");

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
});
const initializePassport = require("./auth/passport");

//require("./auth/passport");
require("./auth/passportGoogleSSO");

const middlewares = require("./middlewares");
const api = require("./api");
const passport = require("passport");

const app = express();

app.use(express.json());

app.use(morgan("dev"));
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

initializePassport(
  passport,
  async (email) =>
    await prisma.user.findUnique({
      where: {
        email: email,
      },
    }),
  async (id) =>
    await prisma.user.findUnique({
      where: {
        id: id,
      },
    })
);
app.use(express.json());

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
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
