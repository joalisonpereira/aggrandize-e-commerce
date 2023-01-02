import dotEnv from "dotenv";
dotEnv.config();

import express from "express";
import routes from "./routes";
import morganMiddleware from "./middlewares/morgan.middleware";
import corsMiddleware from "./middlewares/cors.middleware";
import parserMiddleware from "./middlewares/parser.middleware";
import Env from "./common/env";

const app = express();

corsMiddleware(app);

morganMiddleware(app);

parserMiddleware(app);

app.use(routes);

if (process.env.NODE_ENV !== "test") {
  app.listen(Env.get("PORT", 4000), () => {
    console.log(`[START] Server running on port ${Env.get("PORT", 4000)} 🤖`);
  });
}

export default app;
