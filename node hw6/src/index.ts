import "reflect-metadata";
import * as dotenv from "dotenv";
import loggingMiddleware from "./middlewares/logginMiddleware";
dotenv.config();

const host = process.env.HOST ?? "127.0.0.1";
const port = +(process.env.PORT ?? "3000");

import express from "express";
import { router as newsRouter } from "./routes/news";
import { router as authRouter } from "./routes/auth";
import "./utils/passport";
import { AppDataSource } from "./app-data-source";
import passport from "passport";
import cookieParser from "cookie-parser";

AppDataSource.initialize();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(loggingMiddleware);


app.use(
    "/api/newsposts",
    passport.authenticate("jwt", { session: false }),
    newsRouter
);
app.use("/api/auth", authRouter);

app.listen(port, host, () => {
    console.log(`server running on ${port} : ${host}`);
});
