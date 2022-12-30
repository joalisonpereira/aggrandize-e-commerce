import session from "express-session";
import connectRedis from "connect-redis";
import { createClient } from "redis";
import { SESSION_KEY } from "src/common/constants";

const RedisStore = connectRedis(session);

const url =
  process.env.NODE_ENV === "production" ? "redis://redis:6379" : undefined;

const redisClient = createClient({ url });

redisClient.connect().catch(console.error);

const sessionMiddleware = session({
  store: new RedisStore({ client: redisClient }),
  saveUninitialized: false,
  secret: SESSION_KEY,
  resave: false,
});

export default sessionMiddleware;
