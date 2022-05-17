import { Router } from "express";
import { getLogin,checkLogin,checkDev } from "../controllers/login";

const router = Router();

//router.get('/',getLogin);
router.post('/login/dev',checkDev)
router.post('/login/check',checkLogin)
router.get('/login/:id',getLogin);

export default router;