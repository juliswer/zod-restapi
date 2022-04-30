import { NextFunction, Request, Response } from "express";
import {AnyZodObject} from 'zod'

export const schemaValidation = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    console.log('exejucted');
    next()
}