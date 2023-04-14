import { Router } from "express";
import { ensureAuthMiddleware } from "../middleware/ensureAuth.middleware";
import { createdImageController, deleteImageController, listImagesControllers, updatedImageController } from "../controllers/Image/imageControllers";


const imageRouter = Router()

//Criar imagem 
imageRouter.post ("", ensureAuthMiddleware, createdImageController)

//Listar Imagens
imageRouter.get ("", ensureAuthMiddleware, listImagesControllers)

//Update imagem
imageRouter. patch("/:id", ensureAuthMiddleware, updatedImageController)

//Deleção de imagem pelo id
imageRouter.delete("/:id", ensureAuthMiddleware, deleteImageController)

export default imageRouter