import mongoose, { Schema } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
  isActive: boolean;
  phone?: string;
  avatar?: string;
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
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
      required: true,
      select: false,
    },

    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    phone: {
      type: String,
      default: "",
    },
    avatar: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model<IUser>("User", userSchema);

export default User;
