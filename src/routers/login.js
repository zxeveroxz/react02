import { Router } from "express";
import { getLogin } from "../controllers/login";

const router = Router();

router.get('/',getLogin);
router.get('/login/:id',getLogin);

export default router;