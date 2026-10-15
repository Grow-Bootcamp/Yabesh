import 'dotenv/config';
import mongoose from 'mongoose';
import { connectDatabase } from '../config/database.js';
import User from '../models/user.model.js';

async function makeAdmin() {
  const email = process.argv[2]?.trim().toLowerCase();

  if(!email) {
    throw new Error('Provide an email: npm run make-admin -- admin@example.com');
  }

  try {
    await connectDatabase();

    const user = await User.findOneAndUpdate(
      { email },
      { $set: { role: 'admin' } },
      { new: true, runValidators: true },
    );

    if(!user) {
      throw new Error('User not found. Register the account before promoting it.');
    }

    console.log(`Admin role assigned to ${user.email}`);
  } finally {
    await mongoose.disconnect();
  }
}

makeAdmin().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});





// Public registration always creates regular users. You need a separate, trusted way to promote a user to admin for testing.

/*
The workflow is:

Register a normal account through Postman.

Promote that account through the trusted terminal script.

Log in again to obtain a token.

Test the admin endpoint.
*/


/*
npm run make-admin -- admin@example.com

Keep this script out of any publicly accessible API endpoint. In production, administrative role changes should require strict authorization, audit logging, and appropriate operational controls.
*/