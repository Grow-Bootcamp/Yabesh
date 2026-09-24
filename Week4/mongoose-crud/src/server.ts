import express, {type Express, type Request, type Response } from 'express';
import mongoose from 'mongoose';
import User from './user.model.ts'
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

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


// // GET USERS

app.get('/', (req:Request, res:Response) => [
  res.send("This is dashboard")
]);

app.get('/users', async (req: Request, res: Response) => {
  try {
    const {name, age, email, role} = req.query;

    const filter: any = {};

    if (name) {
      filter.name = {
        $regex: name as string,
        $options: 'i'
      };
    }
    if (age) {
      filter.age = Number(age);
    }
    if (email) {
      filter.email = {
        $regex: email as string,
        $options: 'i'
      };
    }
    if (role) {
      filter.role = role;
    }

    const users = await User.find(filter);

    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
});


// // GET USER BY ID

app.get('/users/:id', async (req: Request, res: Response) => {
  try {
    const {id} = req.params;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    res.status(200).json(user);
  } catch (error: any) {
    res.status(400).json({
      message: 'Invalid user ID',
    });
  }
});


// // UPDATE USER

app.patch('/users/:id', async (req: Request, res: Response) => {
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
      message: 'User partially updated successfully',
      user,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// // UPDATE PASSWORD

app.patch('/users/:id/change-password', async (req:Request, res:Response) => {
  try {
    const {password} = req.body;

    if (!password) {
      return res.status(400).json({
        message: 'Password is required',
      });
    }

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,16}$/;

    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message:
          'Password must be 8-16 characters and contain at least one uppercase letter, one lowercase letter, one number, and one special character',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { password: hashedPassword },
      {
        new: true,
      }
    );

    if(!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    res.status(200).json({
      message: 'Password updated successfully',
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


//  MONGODB TRANSACTION

app.post('/users/transaction', async (req: Request, res: Response) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const users = req.body.users;

    for (let i=0; i<users.length; i++) {
      const user = users[i];
      
      //special validation for every user
      if (
        typeof user.name !== 'string' ||
        user.name.length < 3 ||
        user.name.length > 10
      ) {
        await session.abortTransaction();

        return res.status(422).json({
          message: `User ${i+1} name must be between 3 and 10 characters`,
        });
      }
      
      await User.create(
        [
          {
            ...user,
          },
        ],
        { session }
      );
    }

    await session.commitTransaction();

    res.status(200).json({
      message: `${users.length} users created successfully`,
    });
  } catch (error: any) {
    await session.abortTransaction();

    res.status(500).json({
      message: error.message,
    });
  } finally {
    await session.endSession();
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


