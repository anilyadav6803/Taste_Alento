// router.ts
import express from "express";
import MyUserController from "../controllers/MyUserController";
const router = express.Router();

// Define the post route to create a new user
router.post("/", MyUserController.createCurrentUser);  // Use the correct controller method

export default router;
