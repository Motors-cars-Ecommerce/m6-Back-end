import { Request, Response} from "express"
import { ICarModelRequest, ICarModelRequestGetModel } from "../../interfaces/ModelsCars/models.interface";
import { createdModelsCarsService } from "../../services/modelsCars/createdModelCarsService";
import { listCarsModelsService } from "../../services/modelsCars/listCarsModelsService";
import { listCarByIdService } from "../../services/modelsCars/listCarByIdService";
import { deleteCarByIdService } from "../../services/modelsCars/deleteCarByIdService";


export const createdModelController = async (req:Request, res:Response)=>{
    const dataBody: ICarModelRequest = req.body;
    const createdModel = await createdModelsCarsService(dataBody)
    return res.status(201).json(createdModel)
}

export const listCarsModelsController = async (req:Request, res:Response)=>{
    const dataBody: ICarModelRequestGetModel= req.body;
    const service = await listCarsModelsService(dataBody)
    return res.status(200).json(service)
}

export const listCarByIdController = async (req:Request, res:Response)=>{
    const id:string = req.params.id
    const car = await listCarByIdService(id)
    return res.status(200).json(car)
}

export const deleteCarByIdController = async (req:Request, res:Response)=>{
    const id:string = req.params.id
    const deleteCar= await deleteCarByIdService(id)
    return res.status(204).json(deleteCar)
}

