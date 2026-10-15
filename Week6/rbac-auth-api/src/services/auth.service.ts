import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import type { SignOptions } from 'jsonwebtoken';
import User from '../models/user.model.js';

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '15m';

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not configured');
}

export class AppError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
    this.name = 'AppError';
  }
}

function generateAccessToken(userId: string): string {
  const options: SignOptions = {
    expiresIn: JWT_EXPIRES_IN as SignOptions['expiresIn'],
    algorithm: 'HS256',
  };

  return jwt.sign(
    { sub: userId },
    JWT_SECRET,
    options,
  );
}

export async function registerUser (input: {
  name: string;
  email: string;
  password: string;
}) {
  const existingUser = await User.findOne({
    email: input.email,
  });

  if (existingUser) {
    throw new AppError(409, 'Email is already registered');
  }

  const hashedPassword = await bcrypt.hash(input.password, 10);

  const user = await User.create({
    name: input.name,
    email: input.email,
    password: hashedPassword,
    role: 'user',
  });

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    token: generateAccessToken(user.id),
  };
}   

export async function loginUser(input: {
  email: string;
  password: string;
}) {
  const user = await User.findOne({
    email: input.email,
  }).select('+password');

  if (!user) {
    throw new AppError(401, 'Invalid email or password');
  }

  const passwordMatches = await bcrypt.compare(
    input.password, 
    user.password,
)

  if (!passwordMatches) {
    throw new AppError(401, 'Invalid email or password');
  }

  return {
    user : {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    token: generateAccessToken(user.id),
  };
}


// Services contain business logic that should not be mixed into HTTP route handlers.
// The duplicate-email check improves the user experience, but two simultaneous registration requests can still race. The MongoDB unique index is the final safeguard, and the error middleware will handle duplicate-key errors.