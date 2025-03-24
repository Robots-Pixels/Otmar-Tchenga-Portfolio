import express from "express";
import { newMessage } from "../controllers/message.controller.js";

const messageRoute = new express.Router();
messageRoute.post("/newMessage", newMessage);

export default messageRoute;