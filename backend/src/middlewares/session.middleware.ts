import session from "express-session";
import connectRedis from "connect-redis";
import { createClient } from "redis";
import { SESSION_KEY } from "src/common/constants";

const RedisStore = connectRedis(session);

const redisClient = createClient({ legacyMode: true });

redisClient.connect().catch(console.error);

const host = process.env.NODE_ENV === "production" ? "redis" : undefined;

const sessionMiddleware = session({
  store: new RedisStore({ client: redisClient, host }),
  saveUninitialized: false,
  secret: SESSION_KEY,
  resave: false,
});

export default sessionMiddleware;
