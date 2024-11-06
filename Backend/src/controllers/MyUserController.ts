import { Request, Response, NextFunction, RequestHandler } from "express";
import User from "../models/user";

const createCurrentUser: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { auth0Id } = req.body;
    const existingUser = await User.findOne({ auth0Id });
    if (existingUser) {
      res.status(200).json(existingUser);
      return;
    }

    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating user" });
  }
};

export default { createCurrentUser };
