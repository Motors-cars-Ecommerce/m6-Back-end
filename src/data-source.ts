import "reflect-metadata";
import "dotenv/config";
import { DataSource, DataSourceOptions } from "typeorm";
import Address from "./entities/address.entity";
import Car from "./entities/car.entity";
import Comment from "./entities/comment.entity";
import Image from "./entities/image.entity";
import ModelsCar from "./entities/modelCar.entity";
import User from "./entities/user.entity";
import { InitialMigration1681411654011 } from "./migrations/1681411654011-InitialMigration";
import { CarMigration1681943950468 } from "./migrations/1681943950468-carMigration";
import { Descriptionuser1682689667595 } from "./migrations/1682689667595-Descriptionuser";

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
          InitialMigration1681411654011,
          CarMigration1681943950468,
          Descriptionuser1682689667595,
        ],
      }
);

// falta preencher as entities e migrations

export default AppDataSource;
