import { NextFunction, Request, Response } from "express";
import AppDataSource from "../../data-source";
import Address from "../../entities/address.entity";
import { AppError } from "../../errors/AppError";

const isAddressMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const addressRepo = AppDataSource.getRepository(Address);

  const address = await addressRepo.findOne({ where: { id: req.params.id } });

  if (!address) {
    throw new AppError("Address not found", 404);
  }

  next();
};

export default isAddressMiddleware;
