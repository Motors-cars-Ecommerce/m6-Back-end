import { Request, Response, NextFunction } from "express";
import "dotenv/config";
import { AppError } from "../errors/AppError";
import AppDataSource from "../data-source";
import Car from "../entities/car.entity";

export const ensureCarDoesntExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const carRepository = AppDataSource.getRepository(Car);
  const existingCar = await carRepository.findOne({
    where: {
      user: req.user,
      color: req.body.color,
      km: req.body.km,
      price: req.body.price,
      model_car: req.body.model_car,
    },
    relations: {
      model_car: true,
    },
  });

  if (existingCar) {
    throw new AppError("Car already registered", 409);
  }

  return next();
};
