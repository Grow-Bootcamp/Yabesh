import type { Response, NextFunction } from 'express';
import type { AuthenticatedRequest } from './auth.middleware.js';

export const requireRole = (requiredRole: 'user' | 'admin') => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    if (!req.user) {
      res.status(401).json({
        message: 'Authentication required',
      });
      return;
    }

    if (req.user.role !== requiredRole) {
      res.status(403).json({
        message: 'Forbidden: insufficient permissions',
      });
      return;
    }

    next();
  };
};