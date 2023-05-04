import { string, z } from "zod";
import { modelCarReturnSchema, modelCarSchema } from "./modelCar.schemas";
import { userReturnSchema, userSchemaResponse } from "./user.schema";
import { listImagesSchema } from "./image.schema";
import { returnCommentsArraySchema } from "./comments.schema";

export const carSchema = z.object({
  km: z.number(),
  price: z.number(),
  color: z.string(),
  description: z.string(),
  main_image: z.string(),
  model_car: z.any(),
  user: z.any(),
  images: z.any(),
});

export const carResponseSchema = z.object({
  id: z.string(),
  km: z.number(),
  price: z.number(),
  color: z.string(),
  description: z.string(),
  main_image: z.string(),
  isActive: z.boolean(),
});

export const carReturnSchema = z.object({
  id: z.string(),
  km: z.number(),
  price: z.number(),
  color: z.string(),
  description: z.string(),
  main_image: z.string(),
  isActive: z.boolean(),
  model_car: modelCarSchema,
  images: listImagesSchema,
  comments: returnCommentsArraySchema,
  user: userSchemaResponse,
});

export const carUpdateSchema = z.object({
  km: z.number().nullable(),
  price: z.number().nullable(),
  color: z.string().nullable(),
  description: z.string().nullable(),
  image: z.any().nullable(),
  isActive: z.boolean().nullable(),
  model_car: modelCarReturnSchema.nullable(),
});

export const listCarSchema = carReturnSchema.array();
