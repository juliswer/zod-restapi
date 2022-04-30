import { Router } from "express";
import { createProduct } from "../controllers/product.controller";
import {schemaValidation} from '../middlewares/schemaValidator.middleware'

const router = Router();

router.post("/products", schemaValidation, createProduct);

export default router;
