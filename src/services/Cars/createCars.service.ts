import AppDataSource from "../../data-source";
import Car from "../../entities/car.entity";
import { ICar, ICarReturn } from "../../interfaces/Cars/cars.interface";
import { Repository } from "typeorm";
import { carReturnSchema } from "../../schema/car.schemas";

export const createdCarService = async (dataBody: any): Promise<ICarReturn> => {
  const data: ICar = dataBody.body;
  const carRepository: Repository<Car> = AppDataSource.getRepository(Car);
  const createCar: Car = carRepository.create(data);
  await carRepository.save(createCar);
  console.log(createCar)
  const treco = carReturnSchema.parse(createCar);

  return treco;
};
