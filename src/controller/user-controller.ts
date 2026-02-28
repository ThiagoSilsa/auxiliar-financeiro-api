// Express
import { Request, Response } from "express";

// Service
import UserService from "../service/user-service";

class UserController {
  async getUsers(req: Request, res: Response) {
    try {
      const users = UserService.getUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Falha ao buscar usuários" });
    }
  }

  async getUserById(req: Request, res: Response) {
    const { id } = req.params;
    const stringId = String(id);
    try {
      const user = UserService.getUserById(stringId);
      if (user) {
        res.status(200).json(user);
      } else {
        res
          .status(404)
          .json({ error: "Nenhum usuário encontrado com o ID fornecido" });
      }
    } catch (error) {
      res.status(500).json({ error: "Falha ao buscar usuário pelo ID" });
    }
  }
}
export default new UserController();
