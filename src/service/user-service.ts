import User, { CreateUserAttributes } from "../model/user-model";
import UserRepository from "../repository/user-repository";

class UserService {
  static async getUsers(): Promise<User[]> {
    try {
      const users = await UserRepository.getUsers();
      return users;
    } catch (error) {
      throw new Error("Falha ao buscar usuários");
    }
  }

  static async getUserById(id: string): Promise<User | null> {
    try {
      const user = await UserRepository.getUserById(id);
      return user;
    } catch (error) {
      throw new Error("Falha ao buscar usuário pelo ID");
    }
  }

  static async createUser(userData: CreateUserAttributes): Promise<User | null> {
    try {
      const newUser = await UserRepository.createUser(userData);
      return newUser;
    } catch (error) {
      throw new Error("Falha ao criar usuário");
    }
  }
}

export default UserService;
