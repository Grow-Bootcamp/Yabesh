import mongoose, { Schema, Document, Model } from 'mongoose';

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
      minlength: 3,
      maxlength: 50,
    },

    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
    },

    age: {
      type: Number,
      min: [0, 'Age cannot be negative'],
      max: 120,
    },

    role: {
      type: String,
      enum: ['user', 'admin', 'moderator'],
      default: 'user',
    },

    password: {
      type: String,
      required: true,
      validate: {
        validator: (v: string) => v.length >=8 && v.length <= 16,
        message: 'Password range must be 8 to 16 characters',
      },
    },
  }, 
  {
    timestamps : true,
  }
);

const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default User;