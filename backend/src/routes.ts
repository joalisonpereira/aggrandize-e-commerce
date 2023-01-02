import { Router } from "express";
import ProductsController from "./controllers/products.controller";

const routes = Router();

routes.get("/", new ProductsController().index);

export default routes;
