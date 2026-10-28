import type { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

function getRequiredSecret(name: string): string {
  const secret = process.env[name];

  if (!secret) {
    throw new Error(`${name} is missing from .env`)
  }

  return secret;
}

const ACCESS_TOKEN_SECRET = getRequiredSecret('JWT_SECRET');
const REFRESH_TOKEN_SECRET = getRequiredSecret('REFRESH_TOKEN_SECRET');

const ACCESS_TOKEN_EXPIRES_IN = process.env.ACCESS_TOKEN_EXPIRES_IN || '1m';
const REFRESH_TOKEN_EXPIRES_IN = process.env.REFRESH_TOKEN_EXPIRES_IN || '7d';

function generateAccessToken(user: {
  _id: unknown;
  email: string;
  role: 'user' | 'admin';
}) {
  return jwt.sign(
    {
      userId: String(user._id),
      email: user.email,
      role: user.role,
    },
    ACCESS_TOKEN_SECRET,
    { expiresIn: ACCESS_TOKEN_EXPIRES_IN as '1m' }
  );
}

function generateRefreshToken(user: {
  _id: unknown;
  email: string;
  role: 'user' | 'admin';
}) {
  return jwt.sign(
    {
      userId: String(user._id),
      email: user.email,
      role: user.role,
    },
    REFRESH_TOKEN_SECRET,
    { expiresIn: REFRESH_TOKEN_EXPIRES_IN as '7d' }
  );
}

export async function login (req: Request, res: Response) {
  try {
    const {email, password} = req.body as {
      email?: string;
      password?: string;
    };

    if (!email || !password) {
      res.status(400).json({
        message: 'Email and password are required',
      });
      return;
    }

    const user = await User.findOne({ email }).select('+password');
    
    if (!user) {
      return res.status(401).json({
        message: 'Invalid email or password',
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        message: 'Invalid email or password',
      });
    }

    const accessToken = generateAccessToken({
      _id: user._id,
      email: user.email,
      role: user.role,
    });

    const refreshToken = generateRefreshToken({
      _id: user._id,
      email: user.email,
      role: user.role,
    });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/api/auth',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: 'Login successful',
      token: accessToken,
      user: {
        id: String(user._id),
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error('Login failed: ', error);

    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

export async function refresh (req: Request, res: Response) {
  try {
    const refreshToken = req.cookies?.refreshToken as | string | undefined;

    if (!refreshToken) {
      return res.status(401).json({
        message: 'Refresh token missing. Please log in again',
      });
    }

    const decoded = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET);

    if (
      typeof decoded === 'string' ||
      typeof decoded.userId !== 'string'
    ) {
      return res.status(401).json({
        message: 'Invalid refresh token. Please log in again',
      });
    }

    // confirm the user still exists in the database
    const user = await User.findById(decoded.userId);

    if (!user) {
      res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/api/auth',
      });

      return res.status(401).json({
        message: 'User not found. Please log in again',
      });
    }

    // issue a fresh access token using the user's current role
    const accessToken = generateAccessToken({
      _id: user._id,
      email: user.email,
      role: user.role,
    });

    return res.status(200).json({
      message: 'Access token refreshed successfully',
      token: accessToken,
      user: {
        id: String(user._id),
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    if (
      error instanceof jwt.TokenExpiredError ||
      error instanceof jwt.JsonWebTokenError
    ) {
      res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/api/auth',
      });

      return res.status(401).json({
        message: 'Refresh token is invalid or expired. Please log in again'
      });
    }

    console.error('Token refresh failed: ', error);

    return res.status(500).json({
      message: 'Internal server error' 
    });
  }
}

export function logout(_req: Request, res: Response) {
  res.clearCookie('refreshToken', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/api/auth',
  });

  return res.status(200).json({
    message: 'Logged out successfully'
  });
}