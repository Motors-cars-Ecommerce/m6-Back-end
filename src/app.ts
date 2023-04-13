import "reflect-metadata";
import "express-async-errors";
import express from "express";
import "reflect-metadata";
import cors from "cors";
import handleError from "./errors/handleError";
import userRouter from "./routes/usersRoutes";
import loginRouter from "./routes/loginRoutes";
import carsRouter from "./routes/cars.routes";


const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRouter)
app.use("/login", loginRouter);
app.use("/cars", carsRouter)



app.use(handleError)


export default app;
