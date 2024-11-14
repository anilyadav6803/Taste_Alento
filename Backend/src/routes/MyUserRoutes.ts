import express, { RequestHandler } from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";

const router = express.Router();

// Convert each item in validateMyUserRequest to RequestHandler
const validationMiddlewares: RequestHandler[] = validateMyUserRequest as RequestHandler[];

// Define the POST route to create a new user with jwtCheck for authentication
router.post("/", jwtCheck as RequestHandler, MyUserController.createCurrentUser);

// Define the PUT route with middleware functions explicitly typed
router.put(
  "/",
  jwtCheck as RequestHandler,
  jwtParse as RequestHandler,
  ...validationMiddlewares, // Spread the typed validation middlewares
  MyUserController.updateCurrentUser as RequestHandler
);

export default router;
