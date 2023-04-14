import AppDataSource from "../../data-source";
import ModelsCar from "../../entities/modelCar.entity";
import { AppError } from "../../errors/AppError";
import { ICarModelUpdate } from "../../interfaces/ModelsCars/models.interface";
import { carModelUpdateSchema } from "../../schema/modelCar.schemas";

export const updateModelCarByIdService = async (id:string,dataBody:ICarModelUpdate)=>{
        const modelRepository = AppDataSource.getRepository(ModelsCar)

        const modelExists = await modelRepository.findOneBy({
            id
        })

        if(!modelExists){
            throw new AppError("Model not found", 404)
        }

        const dataTratament = {
            ...dataBody,
            branded: dataBody.branded ? dataBody.branded.charAt(0).toUpperCase() + dataBody.branded.slice(1).toLowerCase() : modelExists.branded,
            model:dataBody.model?  dataBody.model.charAt(0).toUpperCase() + dataBody.model.slice(1).toLowerCase(): modelExists.model,
            fuel:dataBody.fuel?  dataBody.fuel.charAt(0).toUpperCase() + dataBody.fuel.slice(1).toLowerCase():modelExists.fuel
        }

        const validatedDataBody = await carModelUpdateSchema.validate(dataTratament, {stripUnknown:true})

        await modelRepository.update({id:id}, {...validatedDataBody})

        const updateModel = await modelRepository.findOneBy({
            id
        })

        return  updateModel



}