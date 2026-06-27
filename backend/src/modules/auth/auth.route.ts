import { FastifyInstance } from "fastify";
import {
  register,
  login,
  getAllUsers,
  updateUserRole,
  getUserById,
  updateUser,
  deleteUser,
} from "./auth.controller";

const authRoutes = async (fastify: FastifyInstance) => {
  fastify.post("/register", register);
  fastify.post("/login", login);
  fastify.get("/users", getAllUsers);
  fastify.patch("/users/:id/role", updateUserRole);
  fastify.get("/users/:id", getUserById);
  fastify.put("/users/:id", updateUser);
  fastify.delete("/users/:id", deleteUser);
};

export default authRoutes;
