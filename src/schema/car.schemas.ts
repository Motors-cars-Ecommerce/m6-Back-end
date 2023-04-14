import { z } from "zod";
import { modelCarReturnSchema } from "./modelCar.schemas";

export const carSchema = z.object({
  km: z.number(),
  price: z.number(),
  color: z.string(),
  description: z.string(),
  model_car: z.any(),
  user: z.any()
});

export const carReturnSchema = carSchema.extend({
  id: z.string(),
  km: z.number(),
  price: z.number(),
  color: z.string(),
  description: z.string(),
  model_car: modelCarReturnSchema,
  user: z.any()
});

export const carUpdateSchema = z.object({
  km: z.number().nullable(),
  price: z.number().nullable(),
  color: z.string().nullable(),
  description: z.string().nullable(),
  image: z.any().nullable(),
  model_car: modelCarReturnSchema.nullable(),
});
