import express from "express";
import { AppDataSource } from "./app-data-source.ts";
import dotenv from "dotenv";
dotenv.config();
import loggingMiddleware from "./middlewares/logginMiddleware.ts";
import router from "./routes/news.route.ts";

const initApp = async () => {
  try {
    await AppDataSource.initialize()
      .then(() => {
        console.log("connection has established...");
      })
      .catch((err) => {
        console.error(err);
      });
  } catch (err) {
    console.error(err, "connection has failed");
  }
};

initApp();

const app = express();

app.use(express.json());
app.use(loggingMiddleware);
app.use("/api/newsposts", router);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
