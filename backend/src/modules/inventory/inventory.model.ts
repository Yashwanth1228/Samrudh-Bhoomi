import mongoose from "mongoose";

const InventorySchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    minStockLevel: {
      type: Number,
      default: 0,
    },

    maxStockLevel: {
      type: Number,
      default: 0,
    },

    warehouseLocation: {
      type: String,
    },

    supplierName: {
      type: String,
    },

    supplierContact: {
      type: String,
    },

    purchasePrice: {
      type: Number,
      required: true,
    },

    sellingPrice: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["in-stock", "low-stock", "out-stock"],
      default: "in-stock",
    },
  },
  {
    timestamps: true,
  }
);

const inventory = mongoose.model("Inventory", InventorySchema);

export default inventory;