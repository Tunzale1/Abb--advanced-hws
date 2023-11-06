import express from "express";
import { AppDataSource } from "./app-data-source.ts";
import dotenv from "dotenv";
dotenv.config();
import loggingMiddleware from "./middlewares/logging.ts";
import router from "./routes/news.ts";
import userRouter from "./routes/auth.ts";
import authenticate from "./middlewares/auth.ts";
import passport from "./passport.ts";
import swaggerDocument from './swagger_output.json' assert { type: 'json' };
import swaggerUi from "swagger-ui-express";

const Appp = async () => {
  try {
    await AppDataSource.initialize()
      .then(() => {
        console.log("Connection has established");
      })
      .catch((err) => {
        console.error(err);
      });
  } catch (err) {
    console.error(err, "There is error occurred error the connection.");
  }
};

(async () => {
  await Appp();
})();

const app = express();

app.use(express.json());
const port = process.env.PORT;


app.use(passport.initialize());

app.use(loggingMiddleware);


app.use("/api/newsposts", authenticate, router);
app.use("/auth", userRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(port, () => {
  console.log(`server running on ${port}...`);
});
