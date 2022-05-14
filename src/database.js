import mysql from 'mysql2/promise';
import { config } from "./config";

const connect = async () =>{
    return await mysql.createConnection(config);     
};
connect();
