import { FastifyInstance } from "fastify";
import { addProduct, getAllProducts } from "./product.controller";

const productRoutes = async (fastify: FastifyInstance) => {
    fastify.post("/add", addProduct);
    fastify.get("/all", getAllProducts);
    // fastify.patch("/users/:id/role", updateUserRole);
  };

export default productRoutes;