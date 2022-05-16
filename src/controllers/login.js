import {connect} from "../database";
import md5 from  'js-md5';

export const getLogin = async (req,res)=>{
    const db = await connect();
    const [rows] = await db.query("SELECT * FROM tbl_usuarios");
    res.json(rows);
}

/**Verificamos las credenciales */
export const checkLogin = async (req, res) => {
    const db = await connect();
  
    console.log(md5(req.body.pass));
    const [rows] = await db.query("SELECT * FROM tbl_usuarios WHERE correo=? AND pass=?",[req.body.uzer,req.body.pass])
    //res.send("esto es para insertar\n id: "+req.body.id);
    if(rows.length==1)
        res.json(rows);
    else
        res.sendStatus(404);
}