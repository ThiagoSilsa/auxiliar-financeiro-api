import "reflect-metadata";
import express from "express";
import indexRoute from "./route/index";

const app = express();

app.use(express.json());

// Rotas
indexRoute.forEach((route) => {
  app.use(`/v1${route.base}${route.path}`, route.handler);
});

console.log("Express inicializado");
export default app;
