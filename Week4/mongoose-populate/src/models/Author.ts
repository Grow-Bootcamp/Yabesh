import { Schema, model } from 'mongoose';

interface IAuthor {
  name: string;
  bio: string;
  email: string;
}

const authorSchema = new Schema<IAuthor> (
  {
    name: {
      type: String,
      required: true,
    },

    bio: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Author = model<IAuthor>("Author", authorSchema);
export default Author;