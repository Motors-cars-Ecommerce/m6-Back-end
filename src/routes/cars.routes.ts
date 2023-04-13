import { Router } from "express";
import { ensureCarDoesntExists } from "../middlewares/ensureCarDoesntExists.middleware";
import { verifyAutheticationOfToken } from "../middlewares/ensureAuth.middleware";
import { createdCarService } from "../services/Cars/createCars.service";
import { deleteCarController, getCarByIdController, getCarsController, updateCarController } from "../controllers/Cars/carsControllers";

const carsRouter = Router();

carsRouter.post(
  "",
  verifyAutheticationOfToken,
  ensureCarDoesntExists,
  createdCarService
);

carsRouter.get("", getCarsController)

carsRouter.get("/id", getCarByIdController)

carsRouter.patch("/id", verifyAutheticationOfToken, updateCarController)

carsRouter.delete("/id", verifyAutheticationOfToken, deleteCarController)

export default carsRouter;
