import { FastifyReply, FastifyRequest } from "fastify";

import Inventory from "../inventory/inventory.model";
import InventoryTransaction from "./inventoryTransaction.model";

interface StockTransactionBody {
  inventoryId: string;
  quantity: number;
  reason?: string;
  notes?: string;
}
export const stockIn = async (
    request: FastifyRequest<{ Body: StockTransactionBody }>,
    reply: FastifyReply
  ) => {
    try {
      const { inventoryId, quantity, reason, notes } = request.body;
  
      if (!inventoryId || !quantity) {
        return reply.status(400).send({
          success: false,
          message: "Inventory ID and quantity are required",
        });
      }
  
      const inventory = await Inventory.findById(inventoryId);
  
      if (!inventory) {
        return reply.status(404).send({
          success: false,
          message: "Inventory not found",
        });
      }
  
      inventory.quantity += quantity;

      inventory.status = calculateInventoryStatus(
        inventory.quantity,
        inventory.minStockLevel
      );
      
      await inventory.save();
  
      const transaction = await InventoryTransaction.create({
        inventoryId: inventory._id,
        productId: inventory.productId,
        type: "stock-in",
        quantity,
        reason,
        notes,
      });
  
      return reply.status(200).send({
        success: true,
        message: "Stock added successfully",
        data: transaction,
      });
    } catch (error: any) {
      return reply.status(500).send({
        success: false,
        message: error.message,
      });
    }
  };

  export const stockOut = async (
    request: FastifyRequest<{ Body: StockTransactionBody }>,
    reply: FastifyReply
  ) => {
    try {
      const { inventoryId, quantity, reason, notes } = request.body;
  
      if (!inventoryId || !quantity) {
        return reply.status(400).send({
          success: false,
          message: "Inventory ID and quantity are required",
        });
      }
  
      const inventory = await Inventory.findById(inventoryId);
  
      if (!inventory) {
        return reply.status(404).send({
          success: false,
          message: "Inventory not found",
        });
      }
  
      if (inventory.quantity < quantity) {
        return reply.status(400).send({
          success: false,
          message: "Insufficient stock",
        });
      }
  
      inventory.quantity -= quantity;

inventory.status = calculateInventoryStatus(
  inventory.quantity,
  inventory.minStockLevel
);

await inventory.save();
  
      const transaction = await InventoryTransaction.create({
        inventoryId: inventory._id,
        productId: inventory.productId,
        type: "stock-out",
        quantity,
        reason,
        notes,
      });
  
      return reply.status(200).send({
        success: true,
        message: "Stock removed successfully",
        data: transaction,
      });
    } catch (error: any) {
      return reply.status(500).send({
        success: false,
        message: error.message,
      });
    }
  };


  export const getInventoryHistory = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
      const history = await InventoryTransaction.find()
        .populate("productId", "name category")
        .populate("inventoryId", "quantity warehouseLocation")
        .sort({ createdAt: -1 });
  
      return reply.status(200).send({
        success: true,
        data: history,
      });
    } catch (error: any) {
      return reply.status(500).send({
        success: false,
        message: error.message,
      });
    }
  };

  export const calculateInventoryStatus = (
    quantity: number,
    minStockLevel: number
  ): "in-stock" | "low-stock" | "out-of-stock" => {
    if (quantity === 0) {
      return "out-of-stock";
    }
  
    if (quantity <= minStockLevel) {
      return "low-stock";
    }
  
    return "in-stock";
  };

