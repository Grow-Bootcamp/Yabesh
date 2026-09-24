import mongoose, { Schema, Document, Model } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends Document {
  name: string;
  email: string;
  age?: number;
  role: 'user' | 'admin' | 'moderator';
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema <IUser> (
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [3, 'Name must be at least 3 characters'],
      maxlength: [50, 'Name cannot exceed 50 characters'],
      // cast: false,
      match: [
        /^[A-Za-z\s]+$/,
        'Name can contain only letters and spaces'
        ],
    },

    age: {
      type: Number,
      min: [0, 'Age cannot be negative'],
      max: [120, 'Age cannot exceed 120'],
    },

    role: {
      type: String,
      enum: ['user', 'admin', 'moderator'],
      default: 'user',
    },

    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^[A-Za-z][A-Za-z0-9._%+-]*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        'Email must start with a letter and have a valid email structure'
      ],
    },

    password: {
      type: String,
      required: [true, 'Password is required'],
      select: false,
      validate: {
        validator: (value: string) => {
          const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,16}$/;
          return passwordRegex.test(value);
        },
        message: 'Password must be 8-16 characters and contain at least one uppercase letter, one lowercase letter, one number, and one special character',
      },
    },
  }, 
  {
    timestamps : true,
  }
);


// // HASH PASSWORD
// // add pre('save') middleware

userSchema.pre('save', async function () {

  // don't hash if password isn't changed
  if (!this.isModified('password')) {
    return;
  }

  const saltRounds = 10;

  this.password = await bcrypt.hash(this.password, saltRounds);
});



const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default User;