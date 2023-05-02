import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";

export const deleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const userExists = await userRepository.findOneBy({
    id,
  });

  await userRepository.remove(userExists);
};
