import session from "express-session";
import connectRedis from "connect-redis";
import { createClient } from "redis";
import { Application } from "express";
import Env from "src/common/env";

const RedisStore = connectRedis(session);

const redisClient = createClient({
  legacyMode: true,
  url: Env.get("REDIS_URL"),
});

redisClient.connect().catch(console.error);

export default (app: Application) =>
  app.use(
    session({
      store: new RedisStore({ client: redisClient }),
      saveUninitialized: true,
      secret: Env.get("SESSION_KEY"),
      resave: false,
    })
  );
