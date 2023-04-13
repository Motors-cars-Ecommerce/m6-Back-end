import {z} from 'zod'
import { modelCarReturnSchema } from './modelCar.schemas'

export const carSchema = z.object({
    km: z.number(),
    price: z.number(),
    color: z.string(),
    fuel: z.string(),
    description: z.string(),
    image: z.any(),
    comment: z.string().nullable(),
    model: modelCarReturnSchema
})

export const carReturnSchema = z.object({
    id: z.string(),
    km: z.number(),
    price: z.number(),
    color: z.string(),
    fuel: z.string(),
    description: z.string(),
    image: z.any(),
    comment: z.string().nullable(),
    model: modelCarReturnSchema
})

export const carUpdateSchema = z.object({
    km: z.number().nullable(),
    price: z.number().nullable(),
    color: z.string().nullable(),
    fuel: z.string().nullable(),
    description: z.string().nullable(),
    image: z.any().nullable(),
    model: modelCarReturnSchema
})