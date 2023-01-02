import { Application } from "express";
import morgan from "morgan";

export default (app: Application) => app.use(morgan("common"));
