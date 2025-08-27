import cookieParser from "cookie-parser";
import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // Assuming cores is a custom middleware for handling CORS
import mongoose from "mongoose";
import { errorMiddleware } from "./middlewares/errorMiddleware.js"; // Custom error handling middleware
const app = express();
dotenv.config();
const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log("Connected to MongoDB");
  })

  .catch((error) => {
    console.log("error");
  });
app.use(
  cors({
    origin: [process.env.FRONTEND_URL], // Allowed origin for CORS requests
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    credentials: true, // Allow credentials to be sent
  })
); // Middleware for handling CORS

app.use(cookieParser()); // Middleware for parsing cookies
app.use(express.json()); // Middleware for parsing JSON data
app.use(express.urlencoded({ extended: true })); // Middleware for parsing JSON and URL-encoded data
app.use(errorMiddleware); // Custom error handling middleware

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
