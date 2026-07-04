import mongoose, { Schema, Document } from "mongoose";

export interface IInquiry extends Document {
  inquiryId: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  interest: string;
  status: "New" | "In Progress" | "Contacted" | "Completed" | "Rejected";
  date: Date;
}

const InquirySchema = new Schema<IInquiry>(
  {
    inquiryId: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    interest: {
      type: String,
      required: true,
    },
    message: {
        type: String,
        default: "",
    },
    status: {
      type: String,
      enum: ["New", "In Progress", "Contacted", "Completed", "Rejected"],
      default: "New",
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model<IInquiry>("Inquiry", InquirySchema);