import "reflect-metadata";
import "express-async-errors";
import express from "express";
import "reflect-metadata";
import cors from "cors";
import handleError from "./errors/handleError";
import userRouter from "./routes/usersRoutes";
import addressRoutes from "./routes/address.routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/address", addressRoutes);

app.use(handleError);

export default app;
