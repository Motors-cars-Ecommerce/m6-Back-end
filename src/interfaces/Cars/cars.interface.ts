import { UUID } from "crypto";
import {z} from 'zod'
import { DeepPartial } from 'typeorm'
import { carReturnSchema, carSchema, carUpdateSchema } from "../../schemas/car.schemas";

export type ICar = z.infer<typeof carSchema>
export type ICarReturn = z.infer<typeof carReturnSchema>
export type ICarUpdated = z.infer<typeof carUpdateSchema>


export interface ICarRequest {
  km: number;
  price: number;
  color: string;
  description: string;
  user: any;
  model_car: any;
  image: [];
  comment: [];
}

export interface ICarResponse {
  id: UUID;
  km: number;
  price: number;
  color: string;
  description: string;
  user: string;
  model_car: string;
}

export interface ICarUpdate {
  km?: number;
  price?: number;
  color?: string;
  description?: string;
  phone?: string;
}
