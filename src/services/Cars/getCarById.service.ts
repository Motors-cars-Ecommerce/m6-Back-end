import Car from "../../entities/car.entity";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import { carReturnSchema } from "../../schema/car.schemas";

export const getCarByIdService = async (id: string) => {
  const carRepository = AppDataSource.getRepository(Car);
  const car = await carRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      images: true,
      user: true,
      model_car: true,
      comments: true,
    },
  });

  if (!car) {
    throw new AppError("Car not found", 409);
  }

  return car;
};

export default getCarByIdService;
