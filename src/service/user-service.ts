import User, {
  UserAttributes,
  UserCreateAttributes,
} from "../model/user-model";
import UserRepository from "../repository/user-repository";

class UserService {
  static async getUsers(): Promise<UserAttributes[]> {
    try {
      const users = await UserRepository.getUsers();
      return users;
    } catch (error) {
      throw new Error("Falha ao buscar usuários" + error);
    }
  }

  static async getUserById(id: string): Promise<UserAttributes | null> {
    try {
      const user = await UserRepository.getUserById(id);
      return user;
    } catch (error) {
      throw new Error("Falha ao buscar usuário pelo ID" + error);
    }
  }

  static async createUser(
    userData: UserCreateAttributes,
  ): Promise<UserAttributes | null> {
    try {
      const newUser = await UserRepository.createUser(userData);
      return newUser;
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      throw new Error("Falha ao criar usuário" + error);
    }
  }
}

export default UserService;
