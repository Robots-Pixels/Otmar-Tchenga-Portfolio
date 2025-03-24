import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import messageRoute from "./routes/message.route.js";

dotenv.config();

const app = new express();

app.use(express.json());
app.use(cors({origin: "*"}));
app.use("/api/message/", messageRoute);

mongoose
    .connect((process.env.MONGO))
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(3000, () => {
            console.log("Server is running on port 3000...")
        });
    })
    .catch((error) => {
        console.log(error);
    });
