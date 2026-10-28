import { Router } from "express";
import { authenticateToken, type AuthenticatedRequest } from "../middleware/auth.middleware.js";
import { requireRole } from "../middleware/role.middleware.js";

const router = Router();

// any authenticated user can view their profile
router.get(
  '/profile',
  authenticateToken,
  (req: AuthenticatedRequest, res) => {
    res.status(200).json({
      message: 'You accessed a protected route successfully',
      user: req.user
    });
  },
);

// only administrators can access this route
router.get(
  '/admin',
  authenticateToken,
  requireRole('admin'),
  (req: AuthenticatedRequest, res) => {
    res.status(200).json({
      message: 'Welcome to the admin dashboard',
      user: req.user
    });
  }
);

export default router;