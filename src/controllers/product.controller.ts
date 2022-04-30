import { Request, Response } from "express";
import {
  ProductType,
  UpdateProductBodyType,
  UpdateProductQueryType,
  UpdateProductParamsType,
} from "../schemas/product.schema";

export const createProduct = (
  req: Request<unknown, unknown, ProductType>,
  res: Response
) => {
  console.log(req.body);
  res.send("Product created");
};

export const updateProduct = (
  req: Request<
    UpdateProductParamsType,
    unknown,
    UpdateProductBodyType,
    UpdateProductQueryType
  >,
  res: Response
) => {
  console.log(req.body);
  res.send("Product updated");
};
