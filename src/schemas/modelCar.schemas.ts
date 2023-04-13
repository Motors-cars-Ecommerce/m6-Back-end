import { z } from "zod";

export const modelCarSchema = z.object({
  branded: z.string().nonempty(),
  model: z.string(),
  year: z.number(),
  fuel: z.string(),
});

export const modelCarReturnSchema = z.object({
  id: z.string(),
  branded: z.string().nonempty(),
  model: z.string(),
  year: z.number(),
  fuel: z.string(),
});
