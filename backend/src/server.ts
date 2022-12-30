import express from "express";
import cors from "cors";
import routes from "./routes";
import sessionMiddleware from "./middlewares/session.middleware";
import morganMiddleware from "./middlewares/morgan.middleware";
import bodyParserMiddleware from "./middlewares/body-parser.middleware";
import corsMiddleware from "./middlewares/cors.middleware";

const app = express();

const PORT = 3001;

app.use(corsMiddleware);

app.use(morganMiddleware);

app.use(sessionMiddleware);

app.use(bodyParserMiddleware);

app.use(routes);

if (process.env.NODE_ENV !== "testing") {
  app.listen(PORT, () => {
    console.log(`[START] Server running on port ${PORT} 🤖`);
  });
}

export default app;
