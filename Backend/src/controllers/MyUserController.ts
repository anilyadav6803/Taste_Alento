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

const updateCurrentUser: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, addressLine1, country, city } = req.body;
    const userId = req.userId; // Ensure userId is correctly extracted from jwtParse

    if (!userId) {
      res.status(400).json({ message: "User ID is missing" });
      return;
    }

    const user = await User.findOne({ auth0Id: userId });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // Update user details
    user.name = name || user.name;
    user.addressLine1 = addressLine1 || user.addressLine1;
    user.city = city || user.city;
    user.country = country || user.country;

    const updatedUser = await user.save();
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Error updating user" });
  }
};


export default {
  createCurrentUser,
  updateCurrentUser,
};
