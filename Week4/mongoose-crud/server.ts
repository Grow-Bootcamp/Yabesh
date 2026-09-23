import express, {type Express, type Request, type Response } from 'express';
import mongoose from 'mongoose';
import User from './user.model.js';
import dotenv from 'dotenv';
dotenv.config();

const app:Express = express();
app.use (express.json());



// app.get('/users', (req: Request, res: Response) => {
//   const sampleUser = {
//   name: "Yabesh",
//   email: "yabesh@example.com",
//   age: 22,
//   role: 'admin',
//   password: "12345678",
//   };

//   res.send(sampleUser);
// });


app.post('/users', async(req: Request, res: Response) => {
  try {
    const user = await User.create(req.body);

    if (!user) {
      throw new Error("User not created");
    }

    res.status(201).json({
      message: "User created successfully",
      user
    });

  }
  catch(error) {
    console.error(error);
  }
})


const startServer = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/User` as string);

    // CRUD Operations
    // Create
    const user1 = await User.create({
        name: "Prabhat",
        age: 21,
        email: "prabhat@mail.com",
        password: "12345678"
    });

    const user2 = await User.create({
      name: "Yabesh",
      age: 22,
      email: "yabesh@example.com",
      password: "123456789"
    });
    // await user2.save();




  } 
  catch (error) {
    console.error(error);
  }
};

startServer();

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

