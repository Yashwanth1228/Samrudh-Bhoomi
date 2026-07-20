import mongoose from "mongoose";

const InventoryTransactionSchema = new mongoose.Schema(
    {
      inventoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Inventory",
        required: true,
      },
  
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
  
      type: {
        type: String,
        enum: ["stock-in", "stock-out"],
        required: true,
      },
  
      quantity: {
        type: Number,
        required: true,
      },
  
      reason: {
        type: String,
        default: "",
      },
  
      notes: {
        type: String,
        default: "",
      },
  
      createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
    {
      timestamps: true,
    }
  );

export default mongoose.model(
    "InventoryTransaction",
    InventoryTransactionSchema
);