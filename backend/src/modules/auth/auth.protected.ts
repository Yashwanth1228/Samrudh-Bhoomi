import { FastifyInstance } from "fastify";
import { verifyToken } from "../../middleware/auth.middleware";

const protectedRoutes = async (fastify: FastifyInstance) => {
  fastify.get(
    "/profile",
    {
      preHandler: [verifyToken],
    },
    async (request) => {
      return {
        success: true,
        user: (request as any).user,
      };
    },
  );
};

export default protectedRoutes;
