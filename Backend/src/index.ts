
import cors from "cors";
import express, { Request, Response } from "express";
import "dotenv/config";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";

import MyUserRoute from "./routes/MyUserRoutes";


mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to database!"));

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/my/user" , MyUserRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(7000, () => {
  console.log("server started on localhost:7000");
});