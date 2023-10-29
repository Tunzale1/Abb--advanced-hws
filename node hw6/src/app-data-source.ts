import * as dotenv from "dotenv";
dotenv.config();

import { DataSource } from "typeorm";
import { News } from "./models/News.entity";
import { User } from "./models/User.entity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    url: process.env.DB_URL,
    synchronize: true,
    entities: [User, News],
    subscribers: [],
    migrations: [],
});
