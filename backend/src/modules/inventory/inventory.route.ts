import { FastifyInstance } from "fastify";
import { addInventory } from "./inventory.controller";


const inventoryRoutes = async (fastify: FastifyInstance) => {
    fastify.post("/add", addInventory);
    // fastify.get("/all", getAllProducts);
    // fastify.patch("/users/:id/role", updateUserRole);
  };

export default inventoryRoutes;