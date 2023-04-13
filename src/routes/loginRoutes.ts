import { Router } from "express";
import { loginController } from "../controllers/Login/loginControllers";
import { verifyAutheticationOfToken } from "../middlewares/ensureAuth.middleware";

const loginRouter = Router()

//login 
loginRouter.post('', loginController)

export default loginRouter