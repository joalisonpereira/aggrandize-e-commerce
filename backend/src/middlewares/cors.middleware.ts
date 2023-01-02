import cors from "cors";
import { Application } from "express";

export default (app: Application) => app.use(cors());
