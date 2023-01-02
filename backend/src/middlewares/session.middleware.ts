import session from "express-session";
import connectRedis from "connect-redis";
import { createClient } from "redis";
import { SESSION_KEY } from "src/common/constants";
import { Application } from "express";

const RedisStore = connectRedis(session);

const url =
  process.env.NODE_ENV === "production" ? "redis://redis:6379" : undefined;

const redisClient = createClient({ url });

redisClient.connect().catch(console.error);

export default (app: Application) =>
  app.use(
    session({
      store: new RedisStore({ client: redisClient }),
      saveUninitialized: false,
      secret: SESSION_KEY,
      resave: false,
    })
  );
