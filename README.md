# auxiliar-financeiro-api

API do aplicativo de assistente financeiro.

## Status do Projeto

`Em construção`.

Este projeto ainda está em desenvolvimento ativo. Estrutura, rotas, regras de negócio e documentação podem mudar sem aviso.

## Tecnologias

- Node.js
- TypeScript
- Express
- Sequelize
- MySQL
- Docker Compose

## Pré-requisitos

- Node.js 18+
- npm
- Docker e Docker Compose (opcional, para subir o banco via container)

## Configuração do Ambiente

1. Instale as dependências:

```bash
npm install
```

2. Crie o arquivo de variáveis de ambiente com base no exemplo:

```bash
cp env.example .env
```

3. Ajuste os valores no `.env` conforme seu ambiente.

## Banco de Dados (Docker)

Para subir o MySQL com Docker Compose:

```bash
docker compose up -d
```

Para parar os containers:

```bash
docker compose down
```

## Scripts

- `npm run dev`: compila em watch e inicia a API com nodemon
- `npm run build`: compila o TypeScript para `dist/`
- `npm start`: executa a versão compilada

## Estrutura Inicial

```text
src/
	config/
	controller/
	model/
	repository/
	route/
	service/
```

## Observações

- O projeto está em fase inicial.
- Algumas funcionalidades podem estar incompletas.
- Novas seções deste README serão adicionadas conforme o desenvolvimento avançar.
