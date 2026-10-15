import type { Request, Response, NextFunction } from 'express';
import { UnauthorizedError } from 'express-jwt';
import { AppError } from '../services/auth.service.js';

export function errorHandler(error: unknown, _req: Request, res: Response, _next: NextFunction) {
  if (error instanceof UnauthorizedError) {
    return res.status(401).json({
      message: 'Invalid or expired access token',
    });
  }

  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      message: error.message,
    });
  }

  if (
    typeof error === 'object' && 
    error !== null &&
    'code' in error &&
    error.code === 11000
  ) {
    return res.status(409).json({
      message: 'Email is already registered',
    });
  }

  if (
    typeof error === 'object' && 
    error !== null &&
    'name' in error &&
    error.name === 'CastError'
  ) {
    return res.status(400).json({
      message: 'Invalid resource ID',
    });
  }

  console.error(error);

  return res.status(500).json({
    message: "Internal server error",
  });
}



// This middleware handles application errors, invalid JWTs, malformed IDs, and duplicate email registrations.

// A centralized handler keeps the API's responses consistent. In production, use a structured logger and avoid logging sensitive request data or secrets.