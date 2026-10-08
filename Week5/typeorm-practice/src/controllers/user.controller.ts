import type { Request, Response } from 'express';
import { validate } from 'class-validator';
import { AppDataSource } from '../data-source.js';
import { User } from '../entities/User.js';

// home page
export const homePage = (_req: Request, res: Response) => {
  res.status(200).send('This is Home Page');
}

// create users
export const createUser = async (req: Request, res: Response) => {
  try {
    const userRepository = AppDataSource.getRepository(User);

    const user = userRepository.create(req.body);

    const errors = await validate(user);

    if (errors.length > 0) {
      return res.status(400).json({
        message: 'Validation Failed',
        errors,
      });
    } 

    const savedUser = await userRepository.save(user);

    res.status(201).json(savedUser);
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// get users
export const getUsers = async (_req: Request, res: Response) => {
  try {
    const userRepository = AppDataSource.getRepository(User);

    const users = await userRepository.find();

    res.status(200).json(users);
  }catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// get one user
export const getUserById = async (req: Request, res: Response) => {
  try {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({
      id: Number(req.params.id),
    });

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    res.status(200).json(user);
  } catch (error: any){
    res.status(500).json({
      message: error.message,
    });
  }
};

//update user
export const updateUser = async (req: Request, res: Response) => {
  try {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({
      id: Number(req.params.id),
    });

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }
    
    userRepository.merge(user, req.body);

    const errors = await validate(user);

    if (errors.length > 0) {
      return res.status(400).json({
        message: 'Validation Failed',
        errors,
      });
    } 

    const updatedUser = await userRepository.save(user);

    res.status(200).json(updatedUser);
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// delete user
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({
      id: Number(req.params.id),
    });

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    await userRepository.remove(user);

    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};