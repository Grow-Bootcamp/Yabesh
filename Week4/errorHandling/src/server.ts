import express, {type Express, type Request, type Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app:Express = express();

app.use (express.json());   // middleware


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


