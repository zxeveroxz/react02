import {connect} from "../database";

export const getLogin = async (req,res)=>{
    const db = await connect();
    const [rows] = await db.query("SELECT * FROM tbl_usuarios");
    res.json(rows);
}