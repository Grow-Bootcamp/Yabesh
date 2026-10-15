import type { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

export function validateRequest(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: "Validation failed",
      errors: errors.array(),
    });
  }

  next();
};

// The validator definitions collect errors. This middleware decides whether the request should continue.

// Every route that uses these validators should run validateRequest afterward.

// For example, an invalid login request will receive HTTP 400 with details about the invalid fields instead of proceeding to password verification.