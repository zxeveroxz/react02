import {connect} from "../database";
import md5 from  'js-md5';

export const getLogin = async (req,res)=>{
    const db = await connect();
    const [rows] = await db.query("SELECT * FROM tbl_usuarios");
    res.json(rows);
}

export const checkDev = async (req,res)=>{
    const db = await connect();
    
    const [rows]  = await db.query("SELECT * FROM tbl_token WHERE dispositivo=? ",[req.body.dispositivo]);
        if(rows.length==1){
           const [rows1] =  await db.query("SELECT * FROM tbl_usuarios WHERE idx=? ",[rows[0].usuario]);
           res.json({'token':rows[0].token,'correo':rows1[0].correo,'idx':rows1[0].idx});
        }else{
            res.sendStatus(500);
        }
    
}

/**Verificamos las credenciales */
export const checkLogin = async (req, res) => {
    const db = await connect();
  
    console.log(md5(req.body.pass));
    const [rows] = await db.query("SELECT * FROM tbl_usuarios WHERE correo=? AND pass=?",[req.body.uzer,req.body.pass])
    //res.send("esto es para insertar\n id: "+req.body.id);
    if(rows.length==1){
        try {
        const token = md5(req.body.dev)+" "+md5(req.body.dev+rows.admin);
        const rt = await db.query("INSERT INTO tbl_token values(0,?,?,?,UNIX_TIMESTAMP(NOW()))" ,[rows[0].admin,req.body.dev,token],);
        console.log(rt);
        res.json(rows);

        }catch(err){                      
            res.status(500).send({success:false, message:err});
        }    
    }        
    else
        res.sendStatus(404);
}