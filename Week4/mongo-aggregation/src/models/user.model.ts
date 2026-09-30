import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    age: number;
    department: string;
    salary: number;
    isActive: boolean;

    annualSalary: number;
}

const userSchema = new Schema<IUser>(
    {
        name: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true,
            unique: true
        },

        age: {
            type: Number,
            required: true
        },

        department: {
            type: String,
            required: true
        },

        salary: {
            type: Number,
            required: true
        },

        isActive: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,

        toJSON: {
            virtuals: true
        },

        toObject: {
            virtuals: true
        }
    }
);

userSchema.virtual("annualSalary").get(function () {
    return this.salary * 12;
});

// virtual, so annualSalary is not stored in MongoDB

const User = mongoose.model<IUser>("User", userSchema);

export default User;