import { FastifyInstance } from "fastify";
import { uploadImage } from "./upload.controller";

export default async function uploadRoutes(fastify: FastifyInstance) {
  fastify.post("/upload/:module/:type", uploadImage);
}
