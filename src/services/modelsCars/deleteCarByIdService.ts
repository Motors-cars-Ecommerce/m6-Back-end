import AppDataSource from "../../data-source"
import ModelsCar from "../../entities/modelCar.entity"
import { AppError } from "../../errors/AppError"

export const deleteCarByIdService = async (id: string)=>{
    const modelRepository = AppDataSource.getRepository(ModelsCar)

    const modelCarExists = await modelRepository.findOneBy({
        id
    })

    if(!modelCarExists) {
        throw new AppError("Model not found", 404)
    }

    await modelRepository.delete(id)
}