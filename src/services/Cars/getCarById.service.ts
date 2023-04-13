import Car from '../../entities/car.entity';
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";

export const getCarByIdService = async (id: string) => {

    const carRepository = AppDataSource.getRepository(Car)
    const car = await carRepository.findOneBy({
      id: id
  })

    if (!car) {
      throw new AppError("Car not found", 409)
    }

    return car;
  }


export default getCarByIdService;
