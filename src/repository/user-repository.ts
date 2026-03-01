import User, {  UserAttributes, UserCreateAttributes } from "../model/user-model";

class UserRepository {
  static async getUsers(): Promise<UserAttributes[]> {
    return await User.findAll();
  }

  static async getUserById(id: string): Promise<UserAttributes | null> {
    return await User.findOne({ where: { id } });
  }

  static async createUser(
    userData: UserCreateAttributes,
  ): Promise<UserAttributes | null> {
    return await User.create({ ...userData });
  }
}

export default UserRepository;
