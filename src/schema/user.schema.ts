import { z } from "zod";
import { listAddressSchema } from "./address.schema";
import { listCarSchema } from "./car.schemas";

const userSchema = z.object({
  name: z.string(),
  email: z.string(),
  cpf: z.string(),
  password: z.string(),
  phone: z.string(),
  birthday: z.date(),
  seller: z.boolean(),
  isActive: z.boolean(),
  addresses: z.any(),
});

const userUpdateSchema = userSchema.partial();

const userReturnSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  cpf: z.string(),
  phone: z.string(),
  birthday: z.date(),
  seller: z.boolean(),
  isActive: z.boolean(),
  address: listAddressSchema,
});

const listUsersSchema = userReturnSchema.array();

export { userSchema, userUpdateSchema, userReturnSchema, listUsersSchema };
