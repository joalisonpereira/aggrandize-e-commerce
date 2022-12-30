import express from "express";
import ProductsController from "./controllers/products.controller";

const routes = express.Router();

routes.get("/", new ProductsController().index);

export default routes;
