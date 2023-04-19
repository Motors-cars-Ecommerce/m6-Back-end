import AppDataSource from "../../data-source";
import Address from "../../entities/address.entity";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUser, IUserRequest } from "../../interfaces/user.Interface";

export const createdUserService = async (
  dataBody: IUserRequest
): Promise<IUser> => {
  console.log(dataBody.addresses);
  const { addresses, ...res } = dataBody;

  const userRepository = AppDataSource.getRepository(User);
  const addressRepository = AppDataSource.getRepository(Address);

  const createUser = userRepository.create(res);
  await userRepository.save(createUser);

  const user = await userRepository.findOne({
    where: { email: dataBody.email },
  });

  const createAddres = addressRepository.create({
    ...addresses,
    user: user,
  });

  await addressRepository.save(createAddres);

  return user;
};
