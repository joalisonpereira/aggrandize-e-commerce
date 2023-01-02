import session, { Store } from "express-session";
import connectRedis from "connect-redis";
import { createClient } from "redis";
import { Application } from "express";
import Env from "src/common/env";

let store: Store | undefined;

if (Env.get("NODE_ENV") === "production") {
  const RedisStore = connectRedis(session);

  const redisClient = createClient({
    legacyMode: true,
    url: Env.get("REDIS_URL", ""),
  });

  redisClient.connect().catch(console.error);

  store = new RedisStore({ client: redisClient });
}

export default (app: Application) =>
  app.use(
    session({
      store,
      saveUninitialized: true,
      secret: Env.get("SESSION_KEY", "1234"),
      resave: false,
    })
  );
