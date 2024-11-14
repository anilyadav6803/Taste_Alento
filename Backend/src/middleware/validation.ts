import { body } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

const handlevalidationErrors = (req:Request, res:Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
}
export const validateMyUserRequest = [
    body('name').isString().notEmpty().withMessage('Name must be string and not empty'),
    body('addressLine1').isString().notEmpty().withMessage('AddressLine1 must be string and not empty'),
    body('city').isString().notEmpty().withMessage('City must be string and not empty'),
    body('country').isString().notEmpty().withMessage('Country must be string and not empty'),
    handlevalidationErrors,
]