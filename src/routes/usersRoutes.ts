import {Router} from "express"
import { createdUserController, deleteUserController, getUserController, updateUserController } from "../controllers/User/usersControllers"
import { ensureAuthMiddleware } from "../middleware/ensureAuth.middleware"

const userRouter = Router()

//Criação de usuario 
userRouter.post("",createdUserController)

//Leitura de todos usuarios
userRouter.get("", getUserController)

//Update usuario
userRouter.patch("",ensureAuthMiddleware ,updateUserController)

//deletar usuario
userRouter.delete("", ensureAuthMiddleware, deleteUserController)



export default userRouter
