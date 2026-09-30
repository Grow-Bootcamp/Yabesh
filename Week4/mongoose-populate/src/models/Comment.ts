import { Schema, model, Types } from 'mongoose';

interface IComment {
  text: string;
  post: Types.ObjectId;
  commentedBy: Types.ObjectId;
}

const commentSchema = new Schema<IComment> (
  {
    text: {
      type: String,
      required: true,
    },

    post: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },

    commentedBy: {
      type: Schema.Types.ObjectId,
      ref: "Author",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Comment = model<IComment>("Comment", commentSchema);

export default Comment;