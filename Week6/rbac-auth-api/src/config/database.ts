import mongoose from 'mongoose';

export async function connectDatabase(): Promise<void> {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error('MONGODB_URI is not configured');
  }

  await mongoose.connect(uri);

  console.log('MongoDB Atlas connected successfully');
}

// This file connects your application to MongoDB.
// Why keep this separate? Your server.ts should be responsible for starting the application, while database.ts handles the database connection.