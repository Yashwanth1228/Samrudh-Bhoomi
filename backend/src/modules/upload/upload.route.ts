import { FastifyInstance } from "fastify";
import { deleteImage, uploadImage } from "./upload.controller";

export default async function uploadRoutes(fastify: FastifyInstance) {
  fastify.post("/upload/:module/:type", uploadImage);
  fastify.delete("/upload/image/delete", deleteImage);
}
