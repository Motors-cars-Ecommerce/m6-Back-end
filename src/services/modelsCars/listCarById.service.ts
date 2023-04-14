import AppDataSource from "../../data-source"
import ModelsCar from "../../entities/modelCar.entity"
import { AppError } from "../../errors/AppError"

export const listCarByIdService = async(id:string)=>{

    const modelRepository = AppDataSource.getRepository(ModelsCar)

    const modelExists = await modelRepository.findOneBy({
        id
    })

    if(!modelExists){
        throw new AppError("id not found",404)
    }

    return modelExists
}