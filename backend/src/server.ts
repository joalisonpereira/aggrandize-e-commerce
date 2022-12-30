import express from "express";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes";

const app = express();

const PORT = 3001;

app.options("*", cors());

app.use(morgan("common"));

app.use(routes);

if (process.env.NODE_ENV !== "testing") {
  app.listen(PORT, () => {
    console.log(`[START] Server running on port ${PORT} 🤖`);
  });
}

export default app;
