import {Router} from "express"
import { createdUserController } from "../controllers/User/usersControllers"

const userRouter = Router()

//Criação de usuario 
userRouter.post("",createdUserController)

export default userRouter
