import { NextFunction, Request, Response } from "express";
import { checkPassword } from "../schemas/auth.schema";
import { AnyZodObject, ZodError } from "zod";

export const schemaValidation =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.body.password) checkPassword(req.body.password);
      schema.parse({
        body: req.body,
        params: req.params,
        query: req.query,
      });
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json(
          error.issues.map((issue) => ({
            message: issue.message,
            path: issue.path,
          }))
        );
      }
      console.log(error);
      res.status(400).json({ message: "internal server error" });
    }
  };
