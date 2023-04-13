import { Request, Response} from "express"
import { ICarModelRequest } from "../../interfaces/ModelsCars/models.interface";
import { createdModelsCarsService } from "../../services/modelsCars/createdModelCarsService";


export const createdModelController = async (req:Request, res:Response)=>{
    const dataBody: ICarModelRequest = req.body;
    const createdModel = await createdModelsCarsService(dataBody)
    return res.status(201).json(createdModel)
}

