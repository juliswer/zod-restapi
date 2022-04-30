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
  query: z.object({
    title: z.string(),
  }),
});

export type ProductType = z.infer<typeof productSchema>["body"];

export type UpdateProductBodyType = z.infer<typeof updateSchema>["body"];
export type UpdateProductParamsType = z.infer<typeof updateSchema>["params"];
export type UpdateProductQueryType = z.infer<typeof updateSchema>["query"];
