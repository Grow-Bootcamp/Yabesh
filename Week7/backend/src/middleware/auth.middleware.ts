import type { Request, Response, NextFunction } from "express";
import jwt, { type JwtPayload } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export interface AuthenticatedRequest extends Request {
  user?: {
    userId: string;
    email: string;
    role: 'user' | 'admin';
  };
}

interface TokenPayload extends JwtPayload {
  userId: string;
  email: string;
  role: 'user' | 'admin';
}

export const authenticateToken = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
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

    req.user = {
      userId: payload.userId,
      email: payload.email,
      role: payload.role,
    };

    next();
  } catch {
    res.status(401).json({
      message: 'Invalid or expired token',
    });
  }
};