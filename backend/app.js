import express from "express" 
import cors from "cors"
import dotenv from "dotenv"
import { dbconnection } from "./database/dbconnection.js"
import { errorMiddleware } from "./error/error.js";

import reservationRouter from './routes/reservationRoutes.js'

const app=express();
dotenv.config({path:"./config/config.env"})

app.use(
    cors({
        origin:[process.env.FRONTEND_URL],
        method:["post"],
        credentials:true,
    })
);

app.use(express.json())
app.use(express.urlencoded({extended:true}));
dbconnection();
app.use(errorMiddleware)

app.use('/api/v1/reservation',reservationRouter)

export default app;