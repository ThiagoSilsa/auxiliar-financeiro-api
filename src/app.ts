import "reflect-metadata";
import express from "express";
import indexRoute from "./route/index";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(morgan(":method :url :status :response-time ms"));

// Rotas
app.use("/api/v1", indexRoute);

console.log("Express inicializado");
export default app;
