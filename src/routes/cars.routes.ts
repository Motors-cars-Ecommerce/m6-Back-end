import { Router } from "express";
import { ensureCarDoesntExists } from "../middleware/ensureCarDoesntExists.middleware";
import { ensureAuthMiddleware } from "../middleware/ensureAuth.middleware";
import { createdCarService } from "../services/Cars/createCars.service";
import { deleteCarController, getCarByIdController, getCarsController, updateCarController } from "../controllers/Cars/carsControllers";

const carsRouter = Router();

carsRouter.post(
  "",
  ensureAuthMiddleware,
  ensureCarDoesntExists,
  createdCarService
);

carsRouter.get("", getCarsController)

carsRouter.get("/id", getCarByIdController)

carsRouter.patch("/id", ensureAuthMiddleware, updateCarController)

carsRouter.delete("/id", ensureAuthMiddleware, deleteCarController)

export default carsRouter;
