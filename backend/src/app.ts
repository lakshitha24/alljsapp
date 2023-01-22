import express, { Express, Request, Response } from "express";
import { connectMongoDB } from "./config/connection";
import employeRote from './route/employe.route';
import cors from 'cors';


const app = express();
connectMongoDB();

app.use(cors());
app.use(express.json());
app.use('/api',employeRote);

export { app };
