import { Request, Response } from "express";

export const postUser = (req: Request, res: Response) => {
  try {
    console.log(req.body);
    res.send("login");
  } catch (error) {
    return res.status(500).json({ message: "Intenal server error" });
  }
};
