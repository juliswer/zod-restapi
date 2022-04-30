import { NextFunction, Request, Response } from "express";
import { productSchema } from "../schemas/product.schema";
import { AnyZodObject } from "zod";

export const schemaValidation =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    console.log("exejucted");
    schema.parse(req.body);
    next();
  };
