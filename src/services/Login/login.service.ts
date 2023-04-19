import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { IUserLogin } from "../../interfaces/login.interface";
import { AppError } from "../../errors/AppError";

export const loginService = async (data: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);

  const userExist = await userRepository.findOneBy({
    email: data.email,
  });

  const passwordMatch = await compare(data.password, userExist.password);

  if (!userExist.email) {
    throw new AppError("Email or password invalid 1", 403);
  }

  if (!userExist.isActive) {
    throw new AppError("non-active user", 400);
  }

  if (!passwordMatch) {
    throw new AppError("Email or password invalid", 403);
  }

  const token = jwt.sign(
    {
      isActive: userExist.isActive,
      id: userExist.id,
    },
    process.env.SECRET_KEY,
    {
      subject: String(userExist.id),
      expiresIn: "24h",
    }
  );

  return { token };
};
