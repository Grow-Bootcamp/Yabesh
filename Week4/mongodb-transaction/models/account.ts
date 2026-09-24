import mongoose, {Document, Schema} from 'mongoose';

export interface IAccount extends Document {
  name: string;
  email: string;
  balance: number;
}

const accountSchema = new Schema <IAccount> (
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

    balance : {
      type: Number,
      required: [true, 'Balance is required'],
      min: [0, 'Balance cannot be negative'],
      default: 0
    }
  },
  {
    timestamps: true
  }
);

const Account = mongoose.model<IAccount> ('Account', accountSchema);

export default Account;