import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUserUpdate } from "../../interfaces/user.Interface";

export const updateUserService = async (dataBody: IUserUpdate, id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const userExists = await userRepository.findOneBy({
    id,
  });

  const user = userRepository.create({
    ...userExists,
    ...dataBody,
  });

  await userRepository.save(user);

  return user;
};
