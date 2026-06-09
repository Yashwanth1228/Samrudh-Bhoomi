import { FastifyReply, FastifyRequest } from "fastify";

export const verifyAdmin = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  if ((request as any).user.role !== "admin") {
    return reply.status(403).send({
      success: false,
      message: "Access denied. Admin only.",
    });
  }
};
