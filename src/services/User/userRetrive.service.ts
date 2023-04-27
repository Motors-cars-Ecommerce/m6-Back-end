import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { userReturnSchema } from "../../schema/user.schema";

export const retriveUserService = async (userId: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      address: true,
      cars: true,
    },
  });

  const returnedUser = userReturnSchema.parse(user);

  return returnedUser;
};
