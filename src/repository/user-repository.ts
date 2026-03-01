import User, {
  UserAttributes,
  UserCreateAttributes,
} from "../model/user-model";

class UserRepository {
  static async getUsers(): Promise<UserAttributes[]> {
    return await User.findAll({
      attributes: {
        exclude: ["password", "id"],
      },
      order: [["createdAt", "DESC"]],
      raw: true,
    });
  }

  static async getUserById(id: string): Promise<UserAttributes | null> {
    return await User.findOne({ where: { id }, attributes: { exclude: ["password"] } });
    
  }

  static async createUser(
    userData: UserCreateAttributes,
  ): Promise<UserAttributes | null> {
    return await User.create({ ...userData });
  }
}

export default UserRepository;
