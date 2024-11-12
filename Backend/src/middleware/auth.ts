import { auth } from "express-oauth2-jwt-bearer";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import User from "../models/user";

export const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  tokenSigningAlg: "RS256",
});

// Extend the Express Request interface to include auth0Id and userId
declare global {
  namespace Express {
    interface Request {
      auth0Id?: string;
      userId?: string;
    }
  }
}

export const jwtParse = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    res.status(401).json({ message: "Authorization token missing or malformed" });
    return;  // Exit early without returning a Response object
  }

  const token = authorization.split(" ")[1];

  try {
    const decoded = jwt.decode(token) as jwt.JwtPayload;
    if (!decoded || !decoded.sub) {
      res.status(401).json({ message: "Invalid token payload" });
      return;
    }

    const auth0Id = decoded.sub;
    const user = await User.findOne({ auth0Id });

    if (!user) {
      res.status(401).json({ message: "User not found" });
      return;
    }

    req.auth0Id = auth0Id;
    req.userId = user._id.toString();
    next();  // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("JWT Parsing Error:", error);
    res.status(401).json({ message: "Token decoding failed" });
  }
};
