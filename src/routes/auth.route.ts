import {Router} from 'express';
import {postUser} from '../controllers/auth.controller'

const router = Router();

router.post("/login", postUser)

export default router;