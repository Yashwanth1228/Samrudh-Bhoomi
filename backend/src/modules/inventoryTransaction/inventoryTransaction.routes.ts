import { FastifyInstance } from "fastify";
import {
    stockIn,
    stockOut,
    getInventoryHistory,
  } from "./inventoryTransaction.controller";

const inventoryTransactionRoutes = async (fastify: FastifyInstance) => {
  
  fastify.post("/stock-in", stockIn);
  
  fastify.post("/stock-out", stockOut);
  
  fastify.get("/history", getInventoryHistory);

}

export default inventoryTransactionRoutes;