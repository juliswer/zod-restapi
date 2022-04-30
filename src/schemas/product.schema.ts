import { z } from "zod";

export const productSchema = z.object({
  body: z.object({
    name: z.string().nonempty(),
    price: z.number().nonnegative(),
  }),
});

export const updateSchema = z.object({
  body: z.object({
    name: z.string(),
    price: z.number().nonnegative().optional(),
  }),
  params: z.object({
    id: z.string().min(3),
  }),
});
