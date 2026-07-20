import { FastifyReply, FastifyRequest } from "fastify";
import Inventory from "./inventory.model";
import { calculateInventoryStatus } from "../inventoryTransaction/inventoryTransaction.controller";

export interface InventoryBody {
  productId: string;
  quantity: number;
  minStockLevel?: number;
  maxStockLevel?: number;
  warehouseLocation?: string;
  supplierName?: string;
  supplierContact?: string;
  purchasePrice: number;
  sellingPrice: number;
  status?: "in-stock" | "low-stock" | "out-of-stock";
}

export const addInventory = async (
  request: FastifyRequest<{ Body: InventoryBody }>,
  reply: FastifyReply
) => {
  try {
    const data = request.body;

    if (!data) {
      return reply.status(400).send({
        success: false,
        message: "No data provided",
      });
    }

    const {
      productId,
      quantity,
      purchasePrice,
      sellingPrice,
    } = data;

    if (
      !productId ||
      quantity === undefined ||
      purchasePrice === undefined ||
      sellingPrice === undefined
    ) {
      return reply.status(400).send({
        success: false,
        message:
          "productId, quantity, purchasePrice and sellingPrice are required",
      });
    }

    const existingInventory = await Inventory.findOne({
      productId,
    });
    
    if (existingInventory) {
      return reply.status(409).send({
        success: false,
        message:
          "Inventory already exists for this product. Use Stock In to increase the quantity.",
      });
    }

    const status = calculateInventoryStatus(
      quantity,
      data.minStockLevel ?? 10
    );

    const inventory = await Inventory.create({
      ...data,
      status,
    });

    return reply.status(201).send({
      success: true,
      message: "Inventory added successfully",
      data: inventory,
    });
  } catch (error: any) {
    console.error(error);

    return reply.status(500).send({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};


export const getInventories = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const inventories = await Inventory.find()
      .populate({
        path: "productId",
        select: "name category images inventory",
      })
      .sort({ createdAt: -1 });

    return reply.send({
      success: true,
      data: inventories,
    });
  } catch (error: any) {
    return reply.status(500).send({
      success: false,
      message: error.message,
    });
  }
};