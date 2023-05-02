import AppDataSource from "../../data-source";
import Car from "../../entities/car.entity";

export const getCarsService = async () => {
  const carsRepo = AppDataSource.getRepository(Car);

  const cars = await carsRepo.find({
    relations: {
      model_car: true,
      user: true,
      comments: true,
      images: true,
    },
  });

  return cars;
};
