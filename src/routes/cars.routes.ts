import { Router } from "express";
import { ensureCarDoesntExists } from "../middleware/ensureCarDoesntExists.middleware";
import { ensureAuthMiddleware } from "../middleware/ensureAuth.middleware";
import {
  createdCarsController,
  deleteCarController,
  getCarByIdController,
  getCarsController,
  updateCarController,
} from "../controllers/Cars/carsControllers";

const carsRouter = Router();

carsRouter.post("", createdCarsController);

carsRouter.get("", getCarsController);

carsRouter.get("/:id", getCarByIdController);

carsRouter.patch("/:id", ensureAuthMiddleware, updateCarController);

carsRouter.delete("/:id", ensureAuthMiddleware, deleteCarController);

export default carsRouter;
