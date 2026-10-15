import mongoose, { Schema, type InferSchemaType } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },
    
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: false,
      select: false,
    },

    role : {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
      required: true,
    },
  },
  {
    timestamps: true,
    versionkey: false,
  },
);

export type UserDocument = InferSchemaType<typeof userSchema> & mongoose.Document;

const User = mongoose.model('User', userSchema);

export default User;

// The user model defines the structure of the data stored in MongoDB.
// We'll still validate incoming email addresses with express-validator; Mongoose's schema and the request validators serve different purposes.
