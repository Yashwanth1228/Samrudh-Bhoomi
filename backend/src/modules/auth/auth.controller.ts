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
      avatar?: {
        url: string;
        publicId: string;
      };
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

    const body = request.body as {
      name: string;
      email: string;
      phone?: string;
      role: "admin" | "user";
      isActive: boolean;
      avatar?: {
        url: string;
        publicId: string;
      };
    };

    const user = await User.findById(id);

    if (!user) {
      return reply.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    //--------------------------------------------------
    // Delete old avatar if a new one was uploaded
    //--------------------------------------------------
    if (
      body.avatar?.publicId &&
      user.avatar?.publicId &&
      body.avatar.publicId !== user.avatar.publicId
    ) {
      await cloudinary.uploader.destroy(user.avatar.publicId);
    }

    //--------------------------------------------------
    // Update user
    //--------------------------------------------------
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        name: body.name,
        email: body.email,
        phone: body.phone,
        role: body.role,
        isActive: body.isActive,
        avatar: body.avatar,
      },
      {
        new: true,
        runValidators: true,
      }
    ).select("-password");

    return reply.send({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    return reply.status(500).send({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong",
    });
  }
};

export const deleteUser = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    const { id } = request.params as { id: string };

    // Find the user
    const user = await User.findById(id);

    if (!user) {
      return reply.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    // Delete avatar from Cloudinary
    if (user.avatar?.publicId) {
      console.log("Deleting Cloudinary Image:", user.avatar.publicId);

      const result = await cloudinary.uploader.destroy(
        user.avatar.publicId
      );

      console.log("Cloudinary Delete Result:", result);
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
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong",
    });
  }
};
