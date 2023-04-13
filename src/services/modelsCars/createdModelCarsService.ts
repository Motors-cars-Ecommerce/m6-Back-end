import AppDataSource from "../../data-source";
import ModelsCar from "../../entities/modelCar.entity";
import { AppError } from "../../errors/AppError";
import { ICarModelRequest } from "../../interfaces/ModelsCars/models.interface";

export const createdModelsCarsService = async(data:ICarModelRequest)=>{
    const modelRepository = AppDataSource.getRepository(ModelsCar)

    const modelExists = await modelRepository.findOneBy({
        model: data.model,
        year:data.year,
        fuel:data.fuel
    })

    if(modelExists){
        throw new AppError("Model exists", 409)
    }

    const createdModel =  modelRepository.create(data)
    await modelRepository.save(createdModel)
    return createdModel

}