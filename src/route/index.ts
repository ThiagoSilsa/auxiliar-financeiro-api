import userRoutes from "./user-route";
import { Router } from "express";

const router = Router();

// Indexa todas as rotas da aplicação
const routes = [
  {
    router: userRoutes,
  },
];

routes.forEach((route) => {
  router.use(route.router);
});

export default router;
