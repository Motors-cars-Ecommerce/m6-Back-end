import {Router} from "express"
import { createdUserController, getUserController, updateUserController } from "../controllers/User/usersControllers"
import { verifyAutheticationOfToken } from "../middlewares/ensureAuth.middleware"

const userRouter = Router()

//Criação de usuario 
userRouter.post("",createdUserController)

//Leitura de todos usuarios
userRouter.get("", getUserController)

//Update usuario
userRouter.patch("",verifyAutheticationOfToken ,updateUserController)



export default userRouter
