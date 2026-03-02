// Express
import { Request, Response } from "express";

// Service
import UserService from "../service/user-service";

class UserController {
  async getUsers(req: Request, res: Response) {
    try {
      const users = await UserService.getUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Falha ao buscar usuários" });
    }
  }

  async getUserById(req: Request, res: Response) {
    const { id } = req.params;
    const stringId = String(id);
    try {
      const user = await UserService.getUserById(stringId);
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

  async createUser(req: Request, res: Response) {
    const { name, email, password } = req.body;
    // Validação básica do payload
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !password.trim()
    ) {
      return res.status(400).json({
        error: "Payload inválido: name, email e password são obrigatórios.",
      });
    }
    try {
      const newUser = await UserService.createUser({ name, email, password });
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: "Falha ao criar usuário" });
    }
  }
}
export default new UserController();
