import cors from "cors";
import { Application } from "express";
import Env from "src/common/env";

export default (app: Application) =>
  app.use(
    cors({
      credentials: true,
      methods: ["GET", "POST", "DELETE"],
      origin: Env.get("FRONT_URL", "http://localhost:3000"),
    })
  );
