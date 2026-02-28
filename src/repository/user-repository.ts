import User from "../model/user-model";

class UserRepository {
  static async getUsers(): Promise<User[]> {
    return await User.findAll();
  }

  static async getUserById(id: string): Promise<any | null> {
    return await User.findOne({ where: { id } });
  }
}

export default UserRepository;
