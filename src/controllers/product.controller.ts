import { Request, Response } from "express";

export const createProduct = (req: Request, res: Response) => {
  console.log(req.body)
  res.send("Product created");
};

export const updateProduct = (req: Request, res: Response) => {
  console.log(req.body)
  res.send("Product updated");
}
