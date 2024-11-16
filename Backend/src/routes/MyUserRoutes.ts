import express, { RequestHandler } from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";

const router = express.Router();

// Convert each item in validateMyUserRequest to RequestHandler
const validationMiddlewares: RequestHandler[] = validateMyUserRequest as RequestHandler[];

// Define the POST route to create a new user with jwtCheck for authentication
router.post(
  "/",
  (req, res, next) => {
    console.log("Incoming Headers:", req.headers); // Debug headers
    next();
  },
  jwtCheck,
  jwtParse,
  ...validationMiddlewares,
  MyUserController.updateCurrentUser
);


export default router;
