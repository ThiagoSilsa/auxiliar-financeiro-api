// Express
import { Request, Response } from "express";

// Service
import UserService from "../service/user-service";

export class UserController {
  public async getUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await UserService.getUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Falha ao buscar usuários" });
    }
  }

  public async getUserById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const parsedId = Number(id);
    if (isNaN(parsedId)) {
      res.status(400).json({ error: "ID inválido fornecido" });
      return;
    }

    try {
      const user = await UserService.getUserById(parsedId);
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
