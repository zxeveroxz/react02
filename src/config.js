import { config as dotenv } from "dotenv";
dotenv();

export const config = {
    host:   process.env.DB_HOST || 'localhost',
    user:   process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_BD
}
