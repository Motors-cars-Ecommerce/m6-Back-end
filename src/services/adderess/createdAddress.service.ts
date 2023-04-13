import AppDataSource from "../../data-source";
import Address from "../../entities/address.entity";
import User from "../../entities/user.entity";
import {
  IAddress,
  IAddressResponse,
} from "../../interfaces/address.interfaces";

const createdAddressService = async (
  data: IAddress,
  userId: string
): Promise<IAddressResponse> => {
  const addressRepo = AppDataSource.getRepository(Address);
  const userRepo = AppDataSource.getRepository(User);

  const userObj = await userRepo.findOneBy({ id: userId });

  const newAddress = addressRepo.create({
    user: userObj,
    ...data,
  });

  await addressRepo.save(newAddress);

  return newAddress;
};

export default createdAddressService;
