import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

const ensureDataAddressIsValidMiddleware =
  (schema: ZodTypeAny) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedData = schema.parse(req.body);

      req.body = validatedData;
    } catch (error) {
      return res.status(400).json({
        error: error.errors,
      });
    }
  };

export default ensureDataAddressIsValidMiddleware;
