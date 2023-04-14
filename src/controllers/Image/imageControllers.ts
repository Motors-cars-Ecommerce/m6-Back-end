import { Response, Request } from "express";
import { listImagesServices } from "../../services/images/listImagesService";
import { createdImageService } from "../../services/images/createdImageService";
import { updateImageService } from "../../services/images/updateImageService";
import { deleteImageService } from "../../services/images/deleteImageService";


export const listImagesControllers  = async(req:Request, res: Response)=>{
    const images  = await listImagesServices()
    return res.status(200).json(images)
}

export const createdImageController = async (req:Request, res: Response)=>{
    const dataBody = req.body
    const imageCreated = await createdImageService(dataBody)
    return res.status(201).json(imageCreated)
}

export const updatedImageController = async (req:Request, res: Response)=>{
    const id:string = req.params.id
    const dataBody = req.body
    const updateImage = await updateImageService(id, dataBody)
    return res.status(201).json(updateImage)
}

export const deleteImageController = async (req:Request, res: Response)=>{
    const id:string = req.params.id
    const deleteImage = await deleteImageService(id)
    return res.status(204).json(deleteImage)
}