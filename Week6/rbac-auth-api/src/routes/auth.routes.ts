import { Router } from 'express';
import { register, login } from '../controllers/auth.controller.js';
import { registerValidator, loginValidator } from '../validators/auth.validators.js';
import { validateRequest } from '../middleware/validate.middleware.js';

const router = Router();

router.post(
  '/register',
  registerValidator,
  validateRequest,
  register,
);

router.post(
  '/login',
  loginValidator,
  validateRequest,
  login,
)

export default router;


/*
This gives you two public endpoints:

POST /api/auth/register

POST /api/auth/login

Both validate input before the controller executes.
*/