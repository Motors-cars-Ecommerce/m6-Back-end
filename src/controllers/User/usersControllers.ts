import { Request, Response} from "express"
import { IUserRequest } from "../../interfaces/Users/user.Interface"
import { createdUserService } from "../../services/User/createdUserService"

export const createdUserController = async (req:Request, res:Response)=>{
    const userDataBody:IUserRequest = req.body
    const newUser =  await createdUserService(userDataBody)
    return res.status(201).json(newUser)
}
