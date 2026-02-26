import UserRepository from "../repository/user-repository";

export class UserService {
  public async getUsers(): Promise<any[]> {
    try {
      const users = await UserRepository.getUsers();
      return users;
    } catch (error) {
      throw new Error("Falha ao buscar usuários");
    }
  }

  public async getUserById(id: string): Promise<any> {
    try {
      const user = await UserRepository.getUserById(id);
      return user;
    } catch (error) {
      throw new Error("Falha ao buscar usuário pelo ID");
    }
  }
}

export default new UserService();
