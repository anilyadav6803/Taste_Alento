import express from "express";
import MyUserController from "../controllers/MyUserController";

const router = express.Router();

// Use a descriptive path, like "/create-user" or "/users"
router.post("/", MyUserController.createCurrentUser);

export default router;
