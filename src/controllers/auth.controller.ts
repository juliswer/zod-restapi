import { ZodError } from "zod";
import {loginSchema} from '../schemas/auth.schema'

export const postUser = (req: any, res: any) => {
  try {
    const schemaRes = loginSchema.parse(req.body);
    console.log(schemaRes);

    res.send("login");
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json(
        error.issues.map((issue) => ({
          message: issue.message,
        }))
      );
    }
    return res.statsu(500).json({ message: "Intenal server error" });
  }
};
