import AppDataSource from "../../data-source";
import ModelsCar from "../../entities/modelCar.entity";
import { AppError } from "../../errors/AppError";
import { ICarModelRequest } from "../../interfaces/models.interface";

export const createdModelsCarsService = async (data: ICarModelRequest) => {
  const modelRepository = AppDataSource.getRepository(ModelsCar);

  const modelExists = await modelRepository.findOneBy({
    model:
      data.model.charAt(0).toUpperCase() + data.model.slice(1).toLowerCase(),
    year: data.year,
    fuel: data.fuel.charAt(0).toUpperCase() + data.fuel.slice(1).toLowerCase(),
  });

  if (modelExists) {
    throw new AppError("Model exists", 409);
  }

  const dataTratament = {
    ...data,
    branded:
      data.branded.charAt(0).toUpperCase() +
      data.branded.slice(1).toLowerCase(),
    model:
      data.model.charAt(0).toUpperCase() + data.model.slice(1).toLowerCase(),
    fuel: data.fuel.charAt(0).toUpperCase() + data.fuel.slice(1).toLowerCase(),
  };

  const createdModel = modelRepository.create(dataTratament);
  await modelRepository.save(createdModel);
  return createdModel;
};
