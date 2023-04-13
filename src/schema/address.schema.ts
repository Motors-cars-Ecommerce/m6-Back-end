import { z } from "zod";

const addressSchema = z.object({
  cep: z.string(),
  street: z.string(),
  city: z.string(),
  number: z.string(),
  complement: z.string(),
  user: z.any(),
});

const addressUpdatedSchema = addressSchema.partial();

const responseAddressSchema = addressSchema.extend({
  id: z.string(),
});

export { addressSchema, responseAddressSchema, addressUpdatedSchema };
