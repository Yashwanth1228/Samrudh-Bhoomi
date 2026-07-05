import { FastifyInstance } from "fastify";
import { addInquiry, getAllInquiries, updateInquiryStatus } from "./inquiry.controller";

export default async function inquiryRoutes(fastify: FastifyInstance) {
  fastify.get("/inquiries", getAllInquiries);
  fastify.post("/inquiry", addInquiry);
  fastify.patch("/inquiry/:id", updateInquiryStatus);
}