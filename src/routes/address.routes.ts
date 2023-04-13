import { Router } from "express";
import {
  createdAddressController,
  listAddressController,
  updatedAddressController,
} from "../controllers/address.controllers";

const addressRoutes = Router();

addressRoutes.get("", listAddressController);
addressRoutes.post("", createdAddressController);
addressRoutes.patch("/:id", updatedAddressController);
addressRoutes.delete("");

export default addressRoutes;
