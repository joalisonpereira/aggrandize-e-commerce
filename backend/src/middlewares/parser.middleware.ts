import express, { Application } from "express";

export default (app: Application) => {
  app.use(express.urlencoded({ extended: true }));

  app.use(express.json());

  return app;
};
