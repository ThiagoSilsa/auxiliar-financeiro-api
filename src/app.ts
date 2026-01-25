import express from 'express';


const app = express();

app.use(express.json());

console.log('express incializado');
export default app;
