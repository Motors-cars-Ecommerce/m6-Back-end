import "reflect-metadata";
import "dotenv/config";
import { DataSource, DataSourceOptions } from "typeorm";
import Address from "./entities/address.entity";
import Car from "./entities/car.entity";
import Comment from "./entities/comment.entity";
import Image from "./entities/image.entity";
import ModelsCar from "./entities/modelCar.entity";
import User from "./entities/user.entity";
import { CreateTables1683245465557 } from "./migrations/1683245465557-createTables";

const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: [],
      }
    : {
        type: "postgres",
        host: process.env.PGHOST!,
        port: parseInt(process.env.PGPORT!),
        username: process.env.PGUSER!,
        password: process.env.PGPASSWORD!,
        database: process.env.PGDATABASE!,
        logging: true,
        synchronize: false,
        entities: [Address, Car, Comment, Image, ModelsCar, User],
        migrations: [
          CreateTables1683245465557
        ],
      }
);

export default AppDataSource;
