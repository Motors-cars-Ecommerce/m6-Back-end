import "reflect-metadata";
import "dotenv/config";
import { DataSource, DataSourceOptions } from "typeorm";
import Address from "./entities/address.entity";
import Car from "./entities/car.entity";
import Comment from "./entities/comment.entity";
import Image from "./entities/image.entity";
import ModelsCar from "./entities/modelCar.entity";
import User from "./entities/user.entity";
import { initialCreateEntities1680724391536 } from "./migrations/1680724391536-initialCreateEntities";

const setDataSourceConfig = (): DataSourceOptions => {
  if (process.env.NODE_ENV === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [],
    };
  }

  return {
    type: "postgres",
    host: process.env.PGHOST!,
    port: parseInt(process.env.PGPORT!),
    username: process.env.PGUSER!,
    password: process.env.PGPASSWORD!,
    database: process.env.PGDATABASE!,
    logging: true,
    synchronize: false,
    entities: [Address, Car, Comment, Image, ModelsCar, User],
    migrations: [initialCreateEntities1680724391536],
  };
};
// falta preencher as entities e migrations

const dataSourceConfig = setDataSourceConfig();
export default new DataSource(dataSourceConfig);
