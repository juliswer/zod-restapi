import { Router } from "express";
import { postUser } from "../controllers/auth.controller";
import { schemaValidation } from "../middlewares/schemaValidator.middleware";
import { loginSchema } from "../schemas/auth.schema";

const router = Router();

router.post("/login", schemaValidation(loginSchema), postUser);

export default router;
