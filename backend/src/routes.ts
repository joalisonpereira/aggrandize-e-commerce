import { Router } from "express";
import ProductsController from "./controllers/products.controller";

const routes = Router();

routes.get("/", new ProductsController().index);

routes.get("/favorites", new ProductsController().favorites);

routes.post("/favorites", new ProductsController().putFavorite);

export default routes;
