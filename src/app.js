import express from "express";
import cors from "cors";
import morgan from "morgan";
import tasksRoutes from "./routers/tasks";
import loginRoutes from "./routers/login"


const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(loginRoutes);
//app.use(tasksRoutes);
export default app;