const data = [
  { id: 1, name: "User A", email: "userA@example.com" },
  { id: 2, name: "User B", email: "userB@example.com" },
];

export class UserRepository {
  public async getUsers(): Promise<any[]> {
    return data;
  }

  public async getUserById(id: number): Promise<any | null> {
    const user = data.find((user) => user.id === id);
    return user || null;
  }
}

export default new UserRepository();
