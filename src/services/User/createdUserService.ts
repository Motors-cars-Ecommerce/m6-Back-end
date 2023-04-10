import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUserRequest } from "../../interfaces/Users/user.Interface";

export const createdUserService = async (dataBody:IUserRequest)=>{
    const userRepository = AppDataSource.getRepository(User)


    const userExist = await userRepository.findOneBy({
        email:dataBody.email
    })

    if (userExist){
        throw new AppError("Client already exists", 400)
    }

    const createUser = userRepository.create(dataBody)
    await userRepository.save(createUser)
    return createUser

}