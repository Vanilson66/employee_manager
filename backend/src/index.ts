import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import http from "http";
import mongoose from "mongoose";
import { expressConfig, mongoConfig } from "./config/express";

import routes from "./routes";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/", routes);

const server = http.createServer(app);

server.listen(expressConfig.port, () => {
  console.log(`Server running on http://localhost:${expressConfig.port}`);
});

mongoose.Promise = Promise;
mongoose.connect(mongoConfig.url);
mongoose.connection.on("error", (error: Error) => console.log(error));
