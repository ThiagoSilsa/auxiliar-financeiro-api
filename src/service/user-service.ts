import { UserAttributes, UserCreateAttributes } from "../model/user-model";
import UserRepository from "../repository/user-repository";

class UserService {
  static async getUsers(): Promise<Omit<UserAttributes, "password" | "id">[]> {
    try {
      const users = await UserRepository.getUsers();
      return users;
    } catch (error) {
      throw new Error("Falha ao buscar usuários" + error);
    }
  }

  static async getUserById(
    id: string,
  ): Promise<Omit<UserAttributes, "password" | "id"> | null> {
    try {
      const user = await UserRepository.getUserById(id);
      return user;
    } catch (error) {
      throw new Error("Falha ao buscar usuário pelo ID" + error);
    }
  }

  static async createUser(
    userData: UserCreateAttributes,
  ): Promise<Omit<UserAttributes, "password" | "id"> | null> {
    try {
      const newUser = await UserRepository.createUser(userData);
      return newUser;
    } catch (error) {
      throw new Error("Falha ao criar usuário" + error);
    }
  }
}

export default UserService;
