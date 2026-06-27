import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    featuredImages: [
        {
          type: String,
        }
      ],

    excerpt: {
      type: String,
      trim: true,
    },

    content: {
      type: String,
      required: true,
    },

    readTime: {
      type: String,
      default: "1 min read",
    },

    author: {
      name: {
        type: String,
        default: "Admin",
      },

      title: {
        type: String,
      },

      bio: {
        type: String,
      },

      image: {
        type: String,
      },
    },

    seo: {
      metaTitle: {
        type: String,
      },

      metaDescription: {
        type: String,
      },

      metaKeywords: [
        {
          type: String,
          trim: true,
        },
      ],
    },

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },

    publishedAt: {
      type: Date,
    },

    views: {
      type: Number,
      default: 0,
    },

    relatedPosts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", BlogSchema);

export default Blog;