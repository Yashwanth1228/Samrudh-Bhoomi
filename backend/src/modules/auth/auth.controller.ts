import { FastifyReply, FastifyRequest } from "fastify";
import { registerUser, loginUser } from "./auth.service";
import User from "./auth.model";
import cloudinary from "../../config/cloudinary";

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
      phone?: string;
      role?: "admin" | "user";
      isActive?: boolean;
      avatar?: string;
    };

    console.log("REGISTER PAYLOAD:", payload);
    console.log("REGISTER AVATAR:", payload.avatar);

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

    const { name, email, phone, role, isActive, avatar } = request.body as {
      name: string;
      email: string;
      phone?: string;
      role: "admin" | "user";
      isActive: boolean;
      avatar?: string;
    };

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        name,
        email,
        phone,
        role,
        isActive,
        avatar,
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

    // Find the user first
    const user = await User.findById(id);

    if (!user) {
      return reply.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    // Delete Cloudinary image if it exists
    if (user.avatar) {
      console.log("Avatar URL:", user.avatar);

      const publicId = user.avatar
        .split("/upload/")[1]
        .replace(/^v\d+\//, "")
        .replace(/\.[^/.]+$/, "");

      console.log("Public ID:", publicId);

      const result = await cloudinary.uploader.destroy(publicId);

      console.log("Cloudinary Delete Result:", result);

      console.log("Avatar:", user.avatar);
      console.log("Split Result:", user.avatar.split("/upload/"));
    }

    // Delete user from MongoDB
    await User.findByIdAndDelete(id);

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
