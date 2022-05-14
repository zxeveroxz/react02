import express from "express";
import tasksRoutes from "./routers/tasks";

const app = express();

app.use(tasksRoutes);
export default app;