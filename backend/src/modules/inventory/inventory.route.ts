import { FastifyInstance } from "fastify";
import { addInventory, getInventories } from "./inventory.controller";


const inventoryRoutes = async (fastify: FastifyInstance) => {
    fastify.post("/add", addInventory);
    fastify.get("/all", getInventories);
    // fastify.patch("/users/:id/role", updateUserRole);
  };

export default inventoryRoutes;