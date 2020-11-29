import express from "express";
import wordsRoutes from "./routes/wordsRoutes";
import configRoutes from "./routes/configRoutes";
import bodyParser from "body-parser";
import cors from "cors";
import { DBConnection } from './config/DBConnection';
const app = express();

// DB Connection
DBConnection();

// 3th party middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());

// Words routes
app.use('/words', wordsRoutes);

// Config routes
// app.use('/config', configRoutes);

export default app;