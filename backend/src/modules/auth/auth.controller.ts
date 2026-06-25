import { FastifyReply, FastifyRequest } from "fastify";
import { registerUser, loginUser } from "./auth.service";
import User from "./auth.model";

export const register = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    console.log("BODY =>", request.body);
    const user = await registerUser(
      request.body as {
        name: string;
        email: string;
        password: string;
      },
    );
    return reply.status(201).send({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    return reply.status(404).send({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

export const login = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { email, password } = request.body as {
      email: string;
      password: string;
    };

    const result = await loginUser(email, password);

    return reply.status(200).send({
      success: true,
      message: "Login successful",
      data: result,
    });
  } catch (error) {
    return reply.status(400).send({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

export const getAllUsers = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    const users = await User.find().select("-password");

    return reply.status(200).send({
      success: true,
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    return reply.status(500).send({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

export const updateUserRole = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    const { id } = request.params as { id: string };
    const { role } = request.body as {
      role: "admin" | "user";
    };

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { role },
      { new: true },
    ).select("-password");

    if (!updatedUser) {
      return reply.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    return reply.send({
      success: true,
      message: "Role updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    return reply.status(500).send({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};
