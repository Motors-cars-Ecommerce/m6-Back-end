import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUserUpdate } from "../../interfaces/user.Interface";

export const updateUserService = async (dataBody: IUserUpdate, id) => {
  const userRepository = AppDataSource.getRepository(User);

  const userExists = await userRepository.findOneBy({
    id,
  });

  if (!userExists) {
    throw new AppError("user does not exist", 404);
  }

  await userRepository.update({ id: id }, { ...dataBody });

  const updateUser = await userRepository.findOneBy({
    id,
  });

  return updateUser;
};
