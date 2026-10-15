import type { Request, Response, NextFunction } from 'express';
import User from '../models/user.model.js';
import type { CurrentUser } from '../types/auth.types.js';

export async function loadCurrentUser(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.auth?.sub;

    if (typeof userId !== 'string') {
      return res.status(401).json({
        message: 'Invalid Token Payload',
      });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(401).json({
        message: 'User no longer exists',
      });
    }

    const currentUser: CurrentUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    req.currentUser = currentUser;
    next();

  } catch(error) {
    next(error);
  }
}

// After the JWT is verified, retrieve the actual user from MongoDB.

// We are deliberately loading the user's current role from the database. The JWT establishes identity; MongoDB supplies the latest role for the authorization decision.
