import "src/config/dotenv";
import express from "express";
import routes from "./routes";
import sessionMiddleware from "./middlewares/session.middleware";
import morganMiddleware from "./middlewares/morgan.middleware";
import corsMiddleware from "./middlewares/cors.middleware";
import parserMiddleware from "./middlewares/parser.middleware";
import Env from "./common/env";

const app = express();

corsMiddleware(app);

morganMiddleware(app);

parserMiddleware(app);

sessionMiddleware(app);

app.use(routes);

if (process.env.NODE_ENV !== "testing") {
  app.listen(Env.get("PORT"), () => {
    console.log(`[START] Server running on port ${Env.get("PORT")} 🤖`);
  });
}

export default app;
