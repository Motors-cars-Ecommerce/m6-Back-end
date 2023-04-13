import { Request, Response} from "express"
import { IUserRequest, IUserUpdate } from "../../interfaces/Users/user.Interface"
import { createdUserService } from "../../services/User/createdUserService"
import { getUserService } from "../../services/User/getUserService"
import { updateUserService } from "../../services/User/updateUserService"
import { deleteUserService } from "../../services/User/deleteUserService"

export const createdUserController = async (req:Request, res:Response)=>{
    const userDataBody:IUserRequest = req.body
    const newUser =  await createdUserService(userDataBody)
    return res.status(201).json(newUser)
}

export const getUserController = async (req:Request, res:Response) => {
    const listUsers = await getUserService()

    return res.status(200).json(listUsers)
}

export const updateUserController = async (req:Request, res:Response) => {
    const updateUserBody:IUserUpdate= req.body

    const id:string = req.user.id

    const updateUser = await updateUserService(updateUserBody, id)

    return res.status(200).json(updateUser)
}

export const deleteUserController = async (req:Request, res:Response) => {
    const id:string = req.user.id
    const deleteUser= await deleteUserService(id)
    return res.status(204).json(deleteUser)


}
