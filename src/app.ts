import "reflect-metadata";
import "express-async-errors";
import express from "express";
import "reflect-metadata";
import cors from "cors";
import handleError from "./errors/handleError";
import userRouter from "./routes/usersRoutes";
import commentsRouter from "./routes/comments.routes";


const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRouter)
app.user("/comments", commentsRouter)


app.use(handleError)


export default app;
