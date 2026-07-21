import { FastifyInstance } from "fastify";
import { getAllCms, getCmsByPage, saveCms } from "./cms.controller";

export default async function cmsRoutes(
  fastify: FastifyInstance
) {
  // Create or Update
  fastify.post("/", saveCms);

  // Get All Pages
  fastify.get("/", getAllCms);

  // Get Specific Page
  fastify.get("/:page", getCmsByPage);
}