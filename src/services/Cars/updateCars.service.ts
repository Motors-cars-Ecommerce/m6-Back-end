import Car from "../../entities/car.entity";
import { ICarUpdated } from "../../interfaces/cars.interface";
import AppDataSource from "../../data-source";

export const updateCarService = async (
  id: string,
  updateFields: ICarUpdated
) => {
  const carRepository = AppDataSource.getRepository(Car);
  const oldCar = await carRepository.findOneBy({
    id: id,
  });

  const car = carRepository.create({
    ...oldCar,
    ...updateFields,
  });

  await carRepository.save(car);

  return car;
};

export default updateCarService;
