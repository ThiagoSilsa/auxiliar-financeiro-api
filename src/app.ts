import "reflect-metadata";
import express from "express";
import indexRoute from "./route/index";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(morgan(":method :url :status :response-time ms"));

// Rotas
indexRoute.forEach((route) => {
  app.use(`/v1${route.base}${route.path}`, route.handler);
});

console.log("Express inicializado");
export default app;
