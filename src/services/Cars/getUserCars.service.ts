import Car from "../../entities/car.entity";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";

export const getUserCarsService = async (id: any) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({
    id: id,
  });

  const carRepository = AppDataSource.getRepository(Car);
  const cars = await carRepository.find({
    where: {
      user: !user,
    },
    relations: {
      images: true,
      model_car: true,
      comments: true,
      user: true,
    },
  });

  console.log(id);
  return cars;
};

export default getUserCarsService;
