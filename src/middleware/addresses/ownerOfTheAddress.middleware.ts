import { NextFunction, Request, Response } from "express";
import AppDataSource from "../../data-source";
import Address from "../../entities/address.entity";
import { AppError } from "../../errors/AppError";
import User from "../../entities/user.entity";

const ownerOfTheAddressMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const addressRepo = AppDataSource.getRepository(Address);
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOne({ where: { id: req.user.id } });

  if (!user) {
    throw new AppError("User not found", 403);
  }

  let validate = require("uuid-validate");
  if (!validate(req.params.id)) {
    throw new AppError("Address not exist", 404);
  }

  const address = await addressRepo.findOne({
    where: { id: req.params.id },
    relations: { user: true },
  });

  if (address.user.id !== user.id) {
    throw new AppError("you don't own the address", 403);
  }

  next();
};

export default ownerOfTheAddressMiddleware;
