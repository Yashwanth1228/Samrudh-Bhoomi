import { FastifyReply, FastifyRequest } from "fastify";
import jwt from "jsonwebtoken";
import User from "../modules/auth/auth.model";
export const verifyToken = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      return reply.status(401).send({
        success: false,
        message: "Token not provided",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      userId: string;
      role: string;
    };

    // 🔥 NEW IMPORTANT STEP (DB CHECK)
    const user = await User.findById(decoded.userId);

    if (!user) {
      return reply.status(401).send({
        success: false,
        message: "User not found (invalid token)",
      });
    }

    // attach fresh data from DB (not token)
    (request as any).user = {
      userId: user._id,
      role: user.role,
    };

    console.log("DECODED TOKEN:", decoded);
  } catch (error) {
    return reply.status(401).send({
      success: false,
      message: "Invalid token",
    });
  }
};
