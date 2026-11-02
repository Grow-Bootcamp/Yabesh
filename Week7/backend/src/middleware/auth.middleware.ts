import type { Request, Response, NextFunction } from "express";
import jwt, { type JwtPayload } from 'jsonwebtoken';
import User from "../models/User.js";

const JWT_SECRET = process.env.JWT_SECRET;

export interface AuthenticatedRequest extends Request {
  user?: {
    userId: string;
    name: string;
    email: string;
    role: 'user' | 'admin';
  };
}

interface TokenPayload extends JwtPayload {
  userId: string;
  email: string;
  role: 'user' | 'admin';
}

export const authenticateToken = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith('Bearer ')) {
    res.status(401).json({
      message: 'Access denied. Token is required',
    });
    return;
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    res.status(401).json({
      message: 'Access denied. Token is required',
    });
    return;
  }

  if (!JWT_SECRET) {
    res.status(500).json({
      message: 'JWT_SECRET is not configured',
    });
    return;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    if (
      typeof decoded === 'string' ||
      typeof decoded.userId !== 'string' ||
      typeof decoded.email !== 'string' ||
      (decoded.role !== 'user' && decoded.role !== 'admin')
    ) {
      res.status(401).json({
        message: 'Invalid token payload',
      });
      return;
    }

    const payload = decoded as TokenPayload;

    const user = await User.findById(payload.userId);

    if (!user) {
      res.status(401).json({
        message: 'User no longer exists',
      });
      return;
    }

    req.user = {
      userId: String(user._id),
      name: user.name,
      email: user.email,
      role: user.role,
    };

    next();
  } catch {
    res.status(401).json({
      message: 'Invalid or expired token',
    });
  }
};