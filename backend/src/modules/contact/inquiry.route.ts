import { FastifyInstance } from "fastify";
import { addInquiry, getAllInquiries } from "./inquiry.controller";

export default async function inquiryRoutes(fastify: FastifyInstance) {
  fastify.get("/inquiries", getAllInquiries);
  fastify.post("/inquiries", addInquiry);
}