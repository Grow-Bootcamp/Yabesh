import { param } from 'express-validator';

export const userIdValidator = [
  param('id')
    .isMongoId()
    .withMessage('Invalid user ID'),
];

// This file validates MongoDB IDs used in user-management endpoints.
