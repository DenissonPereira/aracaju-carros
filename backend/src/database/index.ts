import knex from "knex";
import dotenv from 'dotenv'

dotenv.config();

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

const dataBaseDados = {
    host: `${DB_HOST}`,
    user: `${DB_USER}`,
    password: `${DB_PASSWORD}`,
    database: "aracaju_carros"
};

export const databaseConnection = knex({
    client: "mysql2",
    connection: dataBaseDados
})