import express from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth"; // Ensure jwtCheck and jwtParse are properly implemented

const router = express.Router();

// Define the POST route to create a new user with jwtCheck for authentication
router.post("/", jwtCheck, MyUserController.createCurrentUser);

// Define the PUT route to update an existing user with jwtParse to parse user ID
router.put("/", jwtParse, jwtCheck, MyUserController.updateCurrentUser);

export default router;
