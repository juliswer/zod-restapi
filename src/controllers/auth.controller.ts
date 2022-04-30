import { z, ZodError } from "zod";

const loginSchema = z.object({
  email: z.string().email().nonempty("Email is required"),
  password: z.string().nonempty("Password is required"),
});

export const postUser = (req: any, res: any) => {
  try {
    loginSchema.parse(req.body);

    res.send("hello world");
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
