import { Router } from "express";
import { createdModelController, deleteCarByIdController, listCarByIdController, listCarsModelsController } from "../controllers/ModelsCars/modelCarsControllers";
import { ensureAuthMiddleware } from "../middleware/ensureAuth.middleware";


const modelRouter = Router()

//Criar model 
modelRouter.post("", ensureAuthMiddleware,createdModelController)

//lista de todos os carros referentes a modelo
modelRouter.get("", ensureAuthMiddleware,listCarsModelsController)

//lista de carro pelo id
modelRouter.get("/:id", ensureAuthMiddleware, listCarByIdController)

//Deletar carro pelo id 
modelRouter.delete("/:id", ensureAuthMiddleware, deleteCarByIdController)


export default modelRouter