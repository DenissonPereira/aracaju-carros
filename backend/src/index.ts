import express from "express";
import cors from 'cors';
import { routes } from "./routes";
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors({
    origin: '*'
}))

app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));