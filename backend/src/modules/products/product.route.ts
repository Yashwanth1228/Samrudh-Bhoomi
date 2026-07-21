import { FastifyInstance } from "fastify";
import {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getProductBySlug,
} from "./product.controller";

const productRoutes = async (fastify: FastifyInstance) => {
  fastify.post("/add", addProduct);
  fastify.get("/all", getAllProducts);
  fastify.get("/slug/:slug", getProductBySlug);
  fastify.get("/:id", getProductById);
  fastify.put("/:id", updateProduct);
  fastify.delete("/:id", deleteProduct);
  // fastify.patch("/users/:id/role", updateUserRole);
};

export default productRoutes;
