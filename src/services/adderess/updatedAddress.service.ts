import AppDataSource from "../../data-source";
import Address from "../../entities/address.entity";
import {
  IAddress,
  IAddressResponse,
} from "../../interfaces/address.interfaces";

const updatedAddressService = async (
  data: IAddress,
  addressId: string
): Promise<IAddressResponse> => {
  const addressRepo = AppDataSource.getRepository(Address);

  const address = await addressRepo.findOne({
    where: {
      id: addressId,
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
