import "dotenv/config";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import Address from "./entities/address.entity";
import Car from "./entities/car.entity";
import Comment from "./entities/comment.entity";
import Image from "./entities/image.entity";
import ModelsCar from "./entities/modelCar.entity";
import User from "./entities/user.entity";
import { CreateTables1683245465557 } from "./migrations/1683245465557-createTables";
import path from "path";

const dataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
  const migrationsPath: string = path.join(
    __dirname,
    "./migrations/**.{ts,js}"
  );

  const dbUrl: string | undefined = process.env.DATABASE_URL;

  if (!dbUrl) {
    throw new Error("Env var DATABASE_URL does not exists");
  }

  const nodeEnv: string | undefined = process.env.NODE_ENV;

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [entitiesPath],
    };
  }

  return {
    type: "postgres",
    url: dbUrl,
    synchronize: false,
    logging: true,
    migrations: [migrationsPath],
    entities: [entitiesPath],
  };
};

const AppDataSource = new DataSource(dataSourceConfig());

export default AppDataSource;
