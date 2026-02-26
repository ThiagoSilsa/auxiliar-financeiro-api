import app from "./app";
import env from "./config/env";
import sequelize from "./config/sequelize";

const PORT = env.PORT;
// Sincroniza o banco de dados
sequelize
  .then(async (db) => {
    try {
      // Inicia o servidor
      app.listen(PORT, () => {
        console.log(`🌐 Servidor rodando em http://localhost:${PORT}`);
      });
    } catch (error) {
      // Caso ocorra algum erro durante a sincronização ou inicialização do servidor
      console.error("Erro na inicialização do servidor:", error);
      process.exit(1);
    }
  })
  .catch((error) => {
    // Caso ocorra falha na conexão inicial com o banco de dados
    console.error("Erro de conexão com o banco de dados:", error);
    process.exit(1);
  });





