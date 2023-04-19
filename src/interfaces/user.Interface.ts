import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  listUsersSchema,
  userReturnSchema,
  userSchema,
} from "../schema/user.schema";

type IUserRequest = z.infer<typeof userSchema>;
type IUsers = z.infer<typeof listUsersSchema>;
type IUser = z.infer<typeof userReturnSchema>;
type IUserUpdate = DeepPartial<IUserRequest>;

export { IUser, IUserRequest, IUserUpdate, IUsers };
