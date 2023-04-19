import AppDataSource from "../../data-source"
import User from "../../entities/user.entity"
import { AppError } from "../../errors/AppError"

export const deleteUserService = async(id:string)=>{
    const userRepository = AppDataSource.getRepository(User)

    const userExists = await userRepository.findOneBy({
        id
    })

    if(!userExists){
        throw new AppError("User not found", 404)
    }

    if(!userExists.isActive){
        throw new AppError("User desabilit", 400)
    }

    userExists.isActive = false
    await userRepository.save(userExists)
    return {message:"remove user"}
}