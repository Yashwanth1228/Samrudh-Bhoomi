import User from "./auth.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

interface RegisterUserPayload {
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
}

export const registerUser = async (payload: RegisterUserPayload) => {
  const existingUser = await User.findOne({ email: payload.email });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(payload.password, 10);

  const user = await User.create({
    ...payload,
    password: hashedPassword,
    role: payload.role || "user",
    avatar: payload.avatar || {
      url: "",
      publicId: "",
    },
  });

  const userObject = user.toObject();

  const { password, ...userWithoutPassword } = userObject;

  return userWithoutPassword;
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isPasswordMatched = await bcrypt.compare(password, user.password);

  if (!isPasswordMatched) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign(
    {
      userId: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "7d",
    },
  );

  const userObject = user.toObject();

  const { password: _, ...userWithoutPassword } = userObject;

  return {
    user: userWithoutPassword,
    token,
  };
};
