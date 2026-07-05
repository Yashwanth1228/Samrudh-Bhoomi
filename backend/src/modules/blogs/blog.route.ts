import { FastifyInstance } from "fastify";
import { addBlog, deleteBlog, getAllBlogs, getBlogBySlug, updateBlog } from "./blog.controller";

export default async function blogRoutes(
  fastify: FastifyInstance
) {
  fastify.post("/add-blog", addBlog);
  fastify.get("/all", getAllBlogs);
  fastify.delete("/delete/:id",deleteBlog );
  fastify.get("/slug/:slug", getBlogBySlug);
  fastify.put("/:id", updateBlog);
}