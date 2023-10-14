import express from "express";
import loggingMiddleware from "./middleware/logging.js";
import router from './routes/route.js';
 
const app = express();
app.use(express.json());
app.use(loggingMiddleware);
app.use(router);

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

app.listen(port, host, () => console.log(`Server is running on ${host}:${port}`));
