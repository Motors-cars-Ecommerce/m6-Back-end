import AppDataSource from "../../data-source";
import ModelsCar from "../../entities/modelCar.entity";
import { AppError } from "../../errors/AppError";
import { ICarModelRequestGetModel } from "../../interfaces/ModelsCars/models.interface";

export const listCarsModelsService = async(data:ICarModelRequestGetModel)=>{
    const modelRepository = AppDataSource.getRepository(ModelsCar)

    const models = await modelRepository.find({
        where:{
            model:data.model.charAt(0).toUpperCase() + data.model.slice(1).toLowerCase()
        }
    })

    if(models.length === 0){
        throw new AppError("Model is car non-existent", 400)
    }

    return models


}