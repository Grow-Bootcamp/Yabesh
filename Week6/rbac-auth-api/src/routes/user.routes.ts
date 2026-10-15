import { Router } from 'express';
import passport from '../passport/passport.js';

import { authenticateToken } from '../middleware/auth.middleware.js';
import { loadCurrentUser } from '../middleware/current-user.middleware.js';
import { authorizeRoles } from '../middleware/rbac.middleware.js';

import { getProfile, getAllUsers, deleteUser } from '../controllers/user.controller.js';

import { userIdValidator } from '../validators/user.validators.js';
import { validateRequest } from '../middleware/validate.middleware.js';

const router = Router();

// Express-JWT authentication + current user
router.get(
  '/profile',
  authenticateToken,
  loadCurrentUser,
  getProfile,
);

// Admin-only endpoints
router.get(
  '/admin/users',
  authenticateToken,
  loadCurrentUser,
  authorizeRoles('admin'),
  userIdValidator,
  validateRequest,
  deleteUser,
);

router.delete(
  '/admin/users/:id',
  authenticateToken,
  loadCurrentUser,
  authorizeRoles('admin'),
  userIdValidator,
  validateRequest,
  deleteUser,
);

// Passport JWT  demonstration endpoint
router.get(
  '/passport/profile',
  passport.authenticate('jwt', { session: false}),
  (req, res) => {
    res.status(200).json({
      message: 'Authenticated using Passport JWT strategy',
      user: req.user,
    });
  },
);

export default router;



// This will include the regular Express-JWT routes and a Passport demonstration route.