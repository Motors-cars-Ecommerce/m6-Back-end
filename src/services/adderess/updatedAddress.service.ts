import AppDataSource from "../../data-source";
import Address from "../../entities/address.entity";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import {
  IAddress,
  IAddressResponse,
  IAddressUpdated,
} from "../../interfaces/address.interfaces";

const updatedAddressService = async (
  data: IAddressUpdated,
  userId: string
): Promise<IAddressResponse> => {
  const addressRepo = AppDataSource.getRepository(Address);
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOne({
    where: {
      id: userId,
    },
    relations: {
      address: true,
    },
  });

  if (!user) {
    throw new AppError("user not found", 409);
  }

  const address = await addressRepo.findOne({
    where: {
      id: user.address[0].id,
    },
  });

  const updatedAddress = addressRepo.create({
    ...address,
    ...data,
  });

  await addressRepo.save(updatedAddress);

  return updatedAddress;
};

export default updatedAddressService;
