import { ZodError } from "zod";
import { loginSchema } from "../schemas/auth.schema";
import { Request, Response } from "express";

export const postUser = (req: Request, res: Response) => {
  try {
    console.log(req.body);
    res.send("login");
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json(
        error.issues.map((issue) => ({
          message: issue.message,
        }))
      );
    }
    return res.status(500).json({ message: "Intenal server error" });
  }
};
