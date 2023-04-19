import { Router } from "express";
import { loginController } from "../controllers/Login/loginControllers";

const loginRouter = Router()

//login 
loginRouter.post('', loginController)

export default loginRouter