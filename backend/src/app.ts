import Fastify from "fastify";
import dotenv from "dotenv";
import connectDB from "./config/database";
import authRoutes from "./modules/auth/auth.route";
import protectedRoutes from "./modules/auth/auth.protected";
import adminRoutes from "./modules/admin/admin.routes";
import cors from "@fastify/cors";

dotenv.config();

const app = Fastify({
  logger: true,
});

app.register(cors, {
  origin: "http://localhost:3000",
  credentials: true,
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
