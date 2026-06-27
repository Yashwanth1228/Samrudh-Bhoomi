const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },

    category: {
      type: String,
      required: true,
      enum: [
        "Fertilizers",
        "Organic Products",
        "Seeds",
        "Pesticides",
      ],
    },

    status: {
      type: String,
      enum: ["draft", "active", "inactive"],
      default: "draft",
    },

    price: {
      type: Number,
      required: true,
    },

    originalPrice: {
      type: Number,
    },

    taxRate: {
      type: Number,
      default: 0,
    },

    shortDescription: {
      type: String,
    },

    description: {
      type: String,
    },

    images: [
      {
        type: String,
      },
    ],

    benefits: [
      {
        icon: String,
        title: String,
        text: String,
      },
    ],

    features: [
      {
        type: String,
      },
    ],

    specifications: [
      {
        label: String,
        value: String,
      },
    ],

    usageInstructions: [
      {
        type: String,
      },
    ],

    inventory: {
      sku: String,

      unit: {
        type: String,
        enum: ["bags", "kg", "tonnes", "litres"],
      },

      openingStock: {
        type: Number,
        default: 0,
      },

      minThreshold: {
        type: Number,
        default: 0,
      },
    },

    documents: [
      {
        name: String,
        fileUrl: String,
        fileSize: String,
      },
    ],

    seo: {
      metaTitle: String,

      metaDescription: String,
    },

    relatedProducts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const product = mongoose.model("Product", ProductSchema);

export default product;

