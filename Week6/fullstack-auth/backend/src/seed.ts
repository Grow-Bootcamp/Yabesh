import 'dotenv/config';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import connectDB from './config/database.js';
import User from './models/User.js';

const seedUsers = async(): Promise<void> => {
  try {
    await connectDB();

    // remove existing demo users so running this script is safe
    await User.deleteMany({
      email : {
        $in: ['user@example.com', 'admin@example.com'],
      },
    });

    const hashedPassword = await bcrypt.hash('UserPass123$', 12);
    const hashedAdminPassword = await bcrypt.hash('AdminPass123$', 12);

    await User.create([
      {
        name: 'Demo User',
        email: 'user@example.com',
        password: hashedPassword,
        role: 'user',
      },
      {
        name: 'Demo Admin',
        email: 'admin@example.com',
        password: hashedAdminPassword,
        role: 'admin',
      },
    ]);

    console.log('Demo users created successfully');
    console.log('Regular user: user@example.com');
    console.log('Admin user: admin@example.com');
  } catch(error) {
    console.error('Failed to seed users: ', error);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
};

seedUsers();