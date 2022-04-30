import { z, ZodError } from "zod";

const loginSchema = z.object({
  email: z.string().nonempty("Email is required").email({
    message: "Email is invalid"
  }),
  password: z.string().nonempty("Password is required"),
});

export const postUser = (req: any, res: any) => {
  try {
    const schemaRes = loginSchema.parse(req.body);
    console.log(schemaRes)

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
