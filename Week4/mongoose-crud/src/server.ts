import express, {type Express, type Request, type Response } from 'express';
import mongoose from 'mongoose';
import User from './user.model.ts';
import dotenv from 'dotenv';

dotenv.config();

const app:Express = express();

app.use (express.json());   // middleware


// // CREATE USER

app.post('/users', async (req: Request, res: Response) => {
  try {
    const user = await User.create(req.body);

    if (!user) {
      throw new Error("User not created");
    }

    res.status(201).json({
      message: "User created successfully",
      user
    });

  } catch(error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
});


// // GET ALL USERS

type Role = 'admin' | 'moderator' | 'user';

app.get('/users', async (req: Request, res: Response) => {
  try {
    const role: Role = req.query.role;

    const users = await User.find({role});
    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json({
      message:error.message,
    });
  }
});


// // GET USER BY ID

app.get('/users/:id', async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({
      message: 'Invalid user ID',
    });
  }
});


// // UPDATE USER

app.put('/users/:id', async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    res.status(200).json({
      message: 'User updated successfully',
      user,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
});


// // DELETE USER

app.delete('/users/:id', async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if(!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    res.status(200).json({
      message: 'User deleted successfully',
    });
  } catch (error) {
    res.status(400).json({
      message: 'Invalid user ID',
    });
  }
});


// // START SERVER

const startServer = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
      throw new Error('MONG0_URI is not defined .env');
    }

    await mongoose.connect(mongoUri);

    console.log("MongoDb connected successfully");

    const port = process.env.PORT || 3000;

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });

  } catch (error: any) {
    console.error('Server startup failed: ', error);
  }
};

startServer();


