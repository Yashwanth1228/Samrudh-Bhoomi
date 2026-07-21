import mongoose, { Schema, Document } from "mongoose";

export interface ICms extends Document {
  page: string;
  content: Record<string, any>;
  isPublished: boolean;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const CmsSchema = new Schema<ICms>(
  {
    page: {
      type: String,
      required: true,
      unique: true,
      enum: [
        "home",
        "about",
        "products",
        "blogs",
        "contact",
        "footer",
        "seo",
      ],
    },

    content: {
      type: Schema.Types.Mixed,
      default: {},
    },

    isPublished: {
      type: Boolean,
      default: false,
    },

    publishedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ICms>("Cms", CmsSchema);