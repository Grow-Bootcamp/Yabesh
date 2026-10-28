import type { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const JWT_SECRET = process.env.JWT_SECRET;

export const login = async (req: Request, res: Response): Promise<void> => {
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

    if (!JWT_SECRET) {
      res.status(500).json({
        message: 'JWT_SECRET is not configured',
      });
      return;
    }

    const user = await User.findOne({
      email: email.toLowerCase().trim(),
    }).select('+password');

    if (!user) {
      res.status(401).json({
        message: 'Invalid email or password',
      });
      return;
    }

    const passwordMatches = await bcrypt.compare(password, user.password);

    if (!passwordMatches) {
      res.status(401).json({
        message: 'Invalid email or password',
      });
      return;
    }

    const token = jwt.sign(
      {
        userId: user._id.toString(),
        email: user.email,
        role: user.role,
      }, 
      JWT_SECRET,
      {
        expiresIn: '30m',
      },
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id.toString(),
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