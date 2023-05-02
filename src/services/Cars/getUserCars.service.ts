import Car from "../../entities/car.entity";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";

export const getUserCarsService = async (id: any) => {
  const carRepository = AppDataSource.getRepository(Car);
  const cars = await carRepository.find({
    where: {
      user: {
        id: id,
      },
    },
    relations: {
      images: true,
      model_car: true,
      comments: true,
      user: true,
    },
  });

  return cars;
};

export default getUserCarsService;
