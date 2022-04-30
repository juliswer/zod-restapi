import { NextFunction, Request, Response } from "express";
import { productSchema } from "../schemas/product.schema";
import { AnyZodObject } from "zod";

export const schemaValidation =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "internal server error" });
    }
  };
