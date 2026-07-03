import Fastify from "fastify";
import dotenv from "dotenv";
import connectDB from "./config/database";
import authRoutes from "./modules/auth/auth.route";
import protectedRoutes from "./modules/auth/auth.protected";
import adminRoutes from "./modules/admin/admin.routes";
import cors from "@fastify/cors";
import productRoutes from "./modules/products/product.route";
import multipart from "@fastify/multipart";
import inventoryRoutes from "./modules/inventory/inventory.route";
import blogRoutes from "./modules/blogs/blog.route";
import uploadRoutes from "./modules/upload/upload.route";
import cloudinary from "./config/cloudinary";

dotenv.config();

(async () => {
  try {
    const result = await cloudinary.api.ping();
    console.log("Cloudinary Connected:", result);
  } catch (err) {
    console.error("Cloudinary Error:", err);
  }
})();

console.log("Cloud:", process.env.CLOUDINARY_CLOUD_NAME);
console.log("Key:", process.env.CLOUDINARY_API_KEY);
console.log("Secret:", process.env.CLOUDINARY_API_SECRET);

const app = Fastify({
  logger: true,
});

// app.register(cors, {
//   origin: process.env.FRONTEND_URL || "http://localhost:3000",
//   credentials: true,
// });

app.register(cors, {
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE" ,"PATCH", "OPTIONS"],
  credentials: true,
});

app.register(multipart, {
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB
  },
});

app.register(authRoutes, {
  prefix: "/api/auth",
});

app.register(protectedRoutes, {
  prefix: "/api",
});

app.register(adminRoutes, {
  prefix: "/api/admin",
});

app.register(productRoutes, {
  prefix: "/api/products",
});

app.register(inventoryRoutes, {
  prefix: "/api/inventory",
});

app.register(blogRoutes, {
  prefix: "/api/blog",
});

app.register(uploadRoutes, {
  prefix: "/api",
});

app.get("/", async () => {
  return {
    success: true,
    message: "Samrudh Bhoomi API Running",
  };
});

const startServer = async () => {
  try {
    await connectDB();

    await app.listen({
      port: Number(process.env.PORT) || 5000,
      host: "0.0.0.0",
    });

    console.log("Server Running ");
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

startServer();
