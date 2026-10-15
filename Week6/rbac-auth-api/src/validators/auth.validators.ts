import { body } from 'express-validator';

export const registerValidator = [
  body('name')
    .trim()
    .isLength({min:3, max:50})
    .withMessage('Name must be between 3 and 50 characters'),

  body('email')
    .trim()
    .isEmail()
    .withMessage('Enter a valid email address')
    .normalizeEmail(),

  body('password')
    .isString()
    .withMessage('Password must be a string')
    .isLength({min:8, max:16})
    .withMessage('Password must be between 8 and 16 characters'),
];

export const loginValidator = [
  body('email')
    .trim()
    .isEmail()
    .withMessage('Enter a valid email address')
    .normalizeEmail(),

  body('password')
    .isString()
    .withMessage('Password must be a string')
    .notEmpty()
    .withMessage('Password is required'),
];

// This is an important part of the assignment: a login endpoint must validate both the email and password before querying the database.

// Notice that registration does not accept a role field. We will always assign user to public registrations. Users must not be able to register themselves as admins.