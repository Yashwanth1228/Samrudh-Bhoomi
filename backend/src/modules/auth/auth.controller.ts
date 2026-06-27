import { FastifyReply, FastifyRequest } from "fastify";
import { registerUser, loginUser } from "./auth.service";
import User from "./auth.model";

export const register = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    console.log("BODY =>", request.body);

    const payload = request.body as {
      name: string;
      email: string;
      password: string;
    };

    // 👇 ADD THIS HERE
    if (!payload.password || payload.password.trim() === "") {
      return reply.status(400).send({
        success: false,
        message: "Password is required",
      });
    }

    const user = await registerUser(payload);

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

export const getUserById = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    const { id } = request.params as { id: string };

    const user = await User.findById(id).select("-password");

    if (!user) {
      return reply.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    return reply.send({
      success: true,
      data: user,
    });
  } catch (error) {
    return reply.status(500).send({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

export const updateUser = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    const { id } = request.params as { id: string };

    const { name, email, phone, role, isActive } = request.body as {
      name: string;
      email: string;
      phone?: string;
      role: "admin" | "user";
      isActive: boolean;
    };

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        name,
        email,
        phone,
        role,
        isActive,
      },
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
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    return reply.status(500).send({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

export const deleteUser = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    const { id } = request.params as { id: string };

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return reply.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    return reply.send({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    return reply.status(500).send({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};
