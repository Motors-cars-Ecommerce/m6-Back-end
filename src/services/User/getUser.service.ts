import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";

export const getUserService = async () => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find({
    relations: {
      addresses: true,
      cars: true,
    },
  });

  return users;
};
