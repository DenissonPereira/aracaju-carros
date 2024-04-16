import express from "express";
import cors from 'cors';
import { routes } from "./routes";
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors({
    origin: '*'
}));

app.set("view engine", "ejs"); 

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.set("views", path.join(__dirname, "views")); 

app.use(express.json());
app.use(routes);
app.use(express.static(path.join(__dirname, 'static')));

app.get("/", (req, res) => {
    res.render("index"); 
});

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
