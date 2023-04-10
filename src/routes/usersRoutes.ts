import {Router} from "express"
import { createdUserController, getUserController } from "../controllers/User/usersControllers"

const userRouter = Router()

//Criação de usuario 
userRouter.post("",createdUserController)

//Leitura de todos usuarios
userRouter.get("", getUserController)



export default userRouter
