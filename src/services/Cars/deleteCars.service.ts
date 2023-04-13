import AppDataSource from "../../data-source";
import Car from "../../entities/car.entity";

export const deleteCarService = async (carId: string, userId: string) => {
  const carRepository = AppDataSource.getRepository(Car);

  const car = await carRepository.findOne({
    where: {
      id: carId,
      user: {
        id: userId,
      },
    },
  });

  if (!car) {
    throw new Error("Car not found or you don't have permission to delete it");
  }

  await carRepository.delete(carId);
};
