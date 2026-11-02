import mongoose from 'mongoose';
import dotenv from 'dotenv';

const connectDB = async(): Promise<void> => {
  try {
    const mongoUri = process.env.MONGODB_URI;

    if (!mongoUri) {
      throw new Error ('MONGODB_URI missing from .env');
    }

    await mongoose.connect(mongoUri);

    console.log('MongoDB Atlas connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

export default connectDB;