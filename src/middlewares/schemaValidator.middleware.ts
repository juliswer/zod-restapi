import { NextFunction, Request, Response } from "express";
import { productSchema } from "../schemas/product.schema";
import { AnyZodObject, ZodError } from "zod";

export const schemaValidation =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json(
          error.issues.map((issue) => ({
            message: issue.message,
          }))
        );
      }
      console.log(error);
      res.status(400).json({ message: "internal server error" });
    }
  };
