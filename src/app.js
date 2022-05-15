import express from "express";
import cors from "cors";
import morgan from "morgan";
import tasksRoutes from "./routers/tasks";


const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(tasksRoutes);
export default app;