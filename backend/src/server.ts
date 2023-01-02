import express from "express";
import routes from "./routes";
import sessionMiddleware from "./middlewares/session.middleware";
import morganMiddleware from "./middlewares/morgan.middleware";
import corsMiddleware from "./middlewares/cors.middleware";
import parserMiddleware from "./middlewares/parser.middleware";

const app = express();

const PORT = 3001;

corsMiddleware(app);

morganMiddleware(app);

sessionMiddleware(app);

parserMiddleware(app);

app.use(routes);

if (process.env.NODE_ENV !== "testing") {
  app.listen(PORT, () => {
    console.log(`[START] Server running on port ${PORT} 🤖`);
  });
}

export default app;
