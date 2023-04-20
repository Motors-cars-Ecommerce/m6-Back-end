import { Request, Response } from "express";
import { ICar, ICarRequest } from "../../interfaces/cars.interface";
import createdCarService from "../../services/Cars/createCars.service";
import { getCarsService } from "../../services/Cars/getCars.service";
import getCarByIdService from "../../services/Cars/getCarById.service";
import updateCarService from "../../services/Cars/updateCars.service";
import { deleteCarService } from "../../services/Cars/deleteCars.service";
import getUserCarsService from "../../services/Cars/getUserCars.service";

export const createdCarsController = async (req: Request, res: Response) => {
  const carDataBody = req.body;
  const newCar = await createdCarService(carDataBody);

  return res.status(201).json(newCar);
};

export const getCarsController = async (req: Request, res: Response) => {
  const cars = await getCarsService();
  return res.status(200).json(cars);
};

export const getCarByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const car = await getCarByIdService(id);
  if (!car) {
    return res.status(404).json({ message: "Car not found" });
  }
  return res.json(car);
};

export const getUserCarsController = async (req: Request, res: Response) => {
  const id = req.params.id;
  console.log(id);
  const cars = await getUserCarsService(id);

  return res.status(200).json(cars);
};

export const updateCarController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const carDataBody: ICarRequest = req.body;
  const updatedCar = await updateCarService(id, carDataBody);
  if (!updatedCar) {
    return res.status(404).json({ message: "Car not found" });
  }
  return res.json(updatedCar);
};

export const deleteCarController = async (req: Request, res: Response) => {
  const carId = req.params.id;
  const userId = req.user.id;

  await deleteCarService(carId, userId);

  return res.status(204).send();
};
