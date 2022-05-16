import { Router } from "express";
import { getLogin,checkLogin } from "../controllers/login";

const router = Router();

router.get('/',getLogin);
router.post('/login/check',checkLogin)
router.get('/login/:id',getLogin);

export default router;