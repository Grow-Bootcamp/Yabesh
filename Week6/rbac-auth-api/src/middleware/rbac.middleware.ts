import type { Request, Response, NextFunction } from 'express';
import type { UserRole } from '../types/auth.types.js';

export function authorizeRoles(...allowedRoles: UserRole[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.currentUser) {
      return res.status(401).json({
        message: 'Authentication required',
      });
    }

    if (!allowedRoles.includes(req.currentUser.role)) {
      return res.status(403).json({
        message: 'You do not have permission to access this resource',
      });
    }

    next();
  };
}

/*
authorizeRoles('admin');           // Admin only
authorizeRoles('user', 'admin');   // Both roles
*/

// This middleware only checks authorization. It expects the previous middleware to have authenticated the request and loaded the user.
