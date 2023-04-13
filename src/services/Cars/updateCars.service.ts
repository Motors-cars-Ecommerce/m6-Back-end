import Car from '../../entities/car.entity';
import { ICarUpdate } from '../../interfaces/Cars/cars.interface';
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";

export const updateCarService = async (id: string, updateFields: ICarUpdate) => {

    const carRepository = AppDataSource.getRepository(Car)
    const car = await carRepository.findOneBy({
      id: id
  })


    if (!car) {
      throw new AppError("Car not found", 409)
    }

    if ('km' in updateFields) {
      car.km = updateFields.km;
    }
    
    if ('price' in updateFields) {
      car.price = updateFields.price;
    }

    if ('color' in updateFields) {
      car.color = updateFields.color;
    }

    if ('description' in updateFields) {
      car.description = updateFields.description;
    }

    await carRepository.save(car);

    return car;
  }


export default updateCarService;
