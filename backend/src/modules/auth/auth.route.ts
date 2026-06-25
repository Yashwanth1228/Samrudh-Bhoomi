import { FastifyInstance } from "fastify";
import {
  register,
  login,
  getAllUsers,
  updateUserRole,
} from "./auth.controller";

const authRoutes = async (fastify: FastifyInstance) => {
  fastify.post("/register", register);
  fastify.post("/login", login);
  fastify.get("/users", getAllUsers);
  fastify.patch("/users/:id/role", updateUserRole);
};

export default authRoutes;
