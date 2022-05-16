import { connect } from "../database";

export const getTasks = async (req, res) => {
    const db = await connect();
    const [rows] = await db.query("select * from tbl_user ");
    res.json(rows)
}

export const getTask = async (req, res) => {
    const db = await connect();
    const [rows] = await db.query("select * from tbl_user where idx=?",[req.params.id]);
    res.json(rows[0]);
}

export const getTasksCount = async (req, res) => {
    const db = await connect();
    const [rows] = await db.query("SELECT count(*) total FROM tbl_user ");
    res.json(rows[0]);
}

export const saveTasks = async (req, res) => {
    const db = await connect();
    //const r = db.query("INSERT INTO tbl_user (id) values(?)",[req.params.id])
    //res.send("esto es para insertar\n id: "+req.body.id);
    res.json({...req.body});
}

export const deleteTasks = async  (req, res) => {
    const db = await connect();
    
    res.sendStatus(204);
}

export const updateTasks = async (req, res) => {
    res.send("hiiiii");
}
