import { Schema, model, Types } from 'mongoose';


interface IPost {
  title: string;
  content: string;
  author: Types.ObjectId;
  comments: Types.ObjectId[];
}

const postSchema = new Schema<IPost> (
  {
    title: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    author: {
      type: Schema.Types.ObjectId,
      ref: "Author",
      required: true,
    },

    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",

      },
    ],
  },
  {
    timestamps: true,
  }
);

const Post = model<IPost>("Post", postSchema);

export default Post;