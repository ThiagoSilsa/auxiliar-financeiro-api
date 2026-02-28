import { Sequelize } from "sequelize-typescript";
import env from "./env";

import IndexModels from "../model/index-models";
async function setupDatabase() {
  // 1. Cria banco de dados se não existir
  const sequelize = new Sequelize({
    dialect: "mysql",
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    host: env.DB_HOST,
    port: Number(env.DB_PORT),
  });
  try {
    await sequelize.query(
      `CREATE DATABASE IF NOT EXISTS \`${env.DB_NAME || "auxiliar_financeiro"}\`;`,
    );
    console.log("Banco de dados criado ou já existe");
  } catch (error) {
    console.error("Não foi possível conectar ao banco de dados:", error);
  } finally {
    await sequelize.close();
  }
  // 2. Cria instancia conectada ao banco
  const sequelizeConnected = new Sequelize({
    dialect: "mysql",
    username: env.DB_USER || "root",
    password: env.DB_PASSWORD || "password",
    database: env.DB_NAME || "auxiliar_financeiro",
    host: env.DB_HOST || "localhost",
    port: Number(env.DB_PORT) || 3306,
    logging: false,
    models: IndexModels,
    timezone: "-03:00",
  });
  await sequelizeConnected.sync();
  return sequelizeConnected;
}

const sequelize = (async () => await setupDatabase())();

export default sequelize;
