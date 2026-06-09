import { FastifyInstance } from "fastify";
import { verifyToken } from "../../middleware/auth.middleware";
import { verifyAdmin } from "../../middleware/admin.middleware";

export default async function adminRoutes(fastify: FastifyInstance) {
  fastify.get(
    "/test",
    {
      preHandler: [verifyToken, verifyAdmin],
    },
    async (request, reply) => {
      return {
        success: true,
        message: "Admin access granted 🎉",
        user: (request as any).user,
      };
    },
  );
}
