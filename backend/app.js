import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbconnection } from "./database/dbconnection.js";
import { errorMiddleware } from "./error/error.js";

import reservationRouter from "./routes/reservationRoutes.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

// Middleware for CORS
app.use(
  cors({
    // origin: process.env.FRONTEND_URL, // Allow only your frontend's URL
    origin: ["cafe-site-iu8n.vercel.app", "cafe-site-eta.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed HTTP methods
    credentials: true, // Allow credentials (cookies, etc.)
  })
);


// Explicitly handle preflight OPTIONS requests
app.options("*", cors());

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to the database
dbconnection();

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP", message: "Server is healthy!" });
});

// Root route for testing
app.get("/", (req, res) => {
  res.status(200).send("Welcome to the API. The server is running successfully!");
});

// Use custom error middleware
app.use(errorMiddleware);

// API routes
app.use("/api/v1/reservation", reservationRouter);

// Log the frontend URL for debugging
console.log("Frontend URL:", process.env.FRONTEND_URL);

export default app;
