import { beforeAll, expect, test } from "vitest";
import UserService from "./user-service";
import sequelize from "../config/sequelize";


beforeAll(async () => {
  await sequelize;
});

test("Deve criar um usuário", async () => {
  const newUser = await UserService.createUser({
    name: "Test User",
    email: "testaaa@example.com",
    password: "password123",
  });

  expect(newUser?.name).toBe("Test User");
  expect(newUser?.email).toBe("testaaa@example.com");
});
