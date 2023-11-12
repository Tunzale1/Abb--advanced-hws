import express from "express";
import { AppDataSource } from "./app-data-source.ts";
import dotenv from "dotenv";
dotenv.config();
import loggingMiddleware from "./middlewares/logging.ts";
import router from "./routes/news.ts";
import userRouter from "./routes/auth.ts";
import passport from "./passport.ts";
import authenticate from "./middlewares/auth.ts";

const initApp = async () => {
  try {
    await AppDataSource.initialize()
      .then(() => {
        console.log("Connection has established...");
      })
      .catch((err) => {
        console.error(err);
      });
  } catch (err) {
    console.error(err, "There's an error with the connection. Fix it!");
  }
};

(async () => {
  await initApp();
})();

const app = express();

app.use(express.json());
app.use(passport.initialize());

app.use(loggingMiddleware);


app.use("/api/newsposts",authenticate, router);
app.use("/auth", userRouter);


const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
