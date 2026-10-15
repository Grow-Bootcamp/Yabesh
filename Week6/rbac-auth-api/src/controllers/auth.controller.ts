import type { Request, Response, NextFunction } from "express";
import { loginUser, registerUser } from "../services/auth.service.js";


export async function register(req: Request, res: Response,next: NextFunction) {
  try {
    const result = await registerUser({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    return res.status(201).json({
      message: 'Registration successful',
      ...result,
    });
  } catch (error) {
    next(error);
  }
}

export async function login (req: Request, res: Response, next: NextFunction) {
  try {
    const result = await loginUser({
      email: req.body.email,
      password: req.body.password,
    });
  } catch (error) {
    next(error);
  }
}


// Controllers handle HTTP requests, call services, and return responses.
// We explicitly pass only the expected fields to the service. Even if a client sends extra fields such as role: "admin", those fields will not be passed into the registration service.
