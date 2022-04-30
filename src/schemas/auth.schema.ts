import { z } from "zod";

export function checkPassword(password: string) {
  const regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (!regularExpression.test(password)) {
    throw new Error(
      "Password must container at least one nombre and special character"
    );
  } else {
    return true;
  }
}

export const loginSchema = z.object({
  body: z.object({
    email: z.string().nonempty("Email is required").email({
      message: "Email is invalid",
    }),
    password: z.string().nonempty("Password is required").min(6, {
      message: "Password must be at least 6 characters",
    }),
  }),
});
