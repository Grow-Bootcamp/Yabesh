import { NextFunction, Request, Response } from "express";
import { AuthenticatedRequest } from "../types/auth.types.js";
import User from "../models/user.model.js";
import { AppError } from "../services/auth.service.js";

export function getProfile(req: AuthenticatedRequest, res: Response) {
  if (!req.currentUser) {
    return res.status(401).json({
      message: 'Authentication required',
    });
  }

  return res.status(200).json({
    message: 'Profile retrieved successfully',
    user: req.currentUser,
  });
}

export async function getAllUsers (_req: Request, res: Response, next: NextFunction) {
  try {
    const users = await User.find()
      .select('name email role createdAt');

    return res.status(200).json({
      count: users.length,
      users,
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteUser (req: Request, res: Response, next: NextFunction) {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      throw new AppError(404, 'User not found');
    }

    return res.status(200).json({
      message: 'User deleted successfully',
    });
  } catch (error) {
    next(error);
  }
}


// The admin controller can retrieve and delete users, but it never returns password fields.