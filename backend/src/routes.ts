import { Router } from "express";
import FavoritesController from "./controllers/favorites.controller";
import ProductsController from "./controllers/products.controller";

const routes = Router();

routes.get("/", new ProductsController().index);

routes.get("/favorites", new FavoritesController().index);

routes.post("/favorites", new FavoritesController().store);

routes.delete("/favorites/:id", new FavoritesController().destroy);

export default routes;
