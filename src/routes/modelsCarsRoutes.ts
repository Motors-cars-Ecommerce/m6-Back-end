import { Router } from "express";
import { createdModelController } from "../controllers/ModelsCars/modelCarsControllers";
import { ensureAuthMiddleware } from "../middleware/ensureAuth.middleware";


const modelRouter = Router()

//Criar model 
modelRouter.post("", ensureAuthMiddleware,createdModelController)


export default modelRouter