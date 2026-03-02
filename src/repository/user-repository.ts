import User, {
  UserAttributes,
  UserCreateAttributes,
} from "../model/user-model";

class UserRepository {
  static async getUsers(): Promise<Omit<UserAttributes, "password" | "id">[]> {
    return await User.findAll({
      attributes: {
        exclude: ["password", "id"],
      },
      order: [["createdAt", "DESC"]],
      raw: true,
    });
  }

  static async getUserById(
    id: string,
  ): Promise<Omit<UserAttributes, "password" | "id"> | null> {
    return await User.findOne({
      where: { id },
      attributes: { exclude: ["password", "id"] },
      raw: true,
    });
  }

  static async createUser(
    userData: UserCreateAttributes,
  ): Promise<Omit<UserAttributes, "password"> | null> {
    const userCreation = await User.create({ ...userData });
    // Exclui a senha do objeto retornado
    const { password, ...userCreated } = userCreation.get({ plain: true });
    return userCreated;
  }
}

export default UserRepository;
