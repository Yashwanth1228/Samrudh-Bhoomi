import { FastifyReply, FastifyRequest } from "fastify";
import Inquiry, { IInquiry } from "./inquiry.model";

export const getAllInquiries = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const inquiries = await Inquiry.find()
      .sort({ createdAt: -1 }) // Latest first
      .lean();

    return reply.status(200).send({
      success: true,
      count: inquiries.length,
      data: inquiries,
    });
  } catch (error) {
    request.log.error(error);

    return reply.status(500).send({
      success: false,
      message: "Failed to fetch inquiries",
    });
  }
};

// interface CreateInquiryBody {
//     name: string;
//     phone: string;
//     email: string;
//     interest: string;
//     status?: "New" | "In Progress" | "Contacted" | "Completed" | "Rejected";
//     message
//   }
  
  export const addInquiry = async (
    request: FastifyRequest<{ Body: IInquiry }>,
    reply: FastifyReply
  ) => {
    try {
      const { name, phone, email, interest, status , message} = request.body;

      if(!name || !phone || !email || !interest || !message){
        return reply.status(400).send({
          success: false,
          message: "All fields are required",
        });
      }
  
      // Get current year
      const year = new Date().getFullYear();
  
      // Find the latest inquiry for the current year
      const latestInquiry = await Inquiry.findOne({
        inquiryId: { $regex: `^SB-${year}-` },
      }).sort({ createdAt: -1 });
  
      let nextNumber = 1;
  
      if (latestInquiry) {
        const parts = latestInquiry.inquiryId.split("-");
        nextNumber = parseInt(parts[2]) + 1;
      }
  
      const inquiryId = `SB-${year}-${String(nextNumber).padStart(3, "0")}`;
  
      const inquiry = await Inquiry.create({
        inquiryId,
        name,
        phone,
        email,
        message,
        interest,
        status: status || "New",
      });
  
      return reply.status(201).send({
        success: true,
        message: "Inquiry created successfully",
        data: inquiry,
      });
    } catch (error) {
      request.log.error(error);
  
      return reply.status(500).send({
        success: false,
        message: "Failed to create inquiry",
      });
    }
  };

  interface UpdateInquiryParams {
    id: string;
  }
  
  interface UpdateInquiryBody {
    status: "New" | "Contacted" | "Completed" | "Rejected";
  }
  
  export const updateInquiryStatus = async (
  request: FastifyRequest<{
    Params: { id: string };
    Body: { status: "New" | "Contacted" | "Completed" | "Rejected" };
  }>,
  reply: FastifyReply
) => {
  try {
    const { id } = request.params;
    const { status } = request.body;

    const inquiry = await Inquiry.findByIdAndUpdate(
      id,
      { status },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!inquiry) {
      return reply.status(404).send({
        success: false,
        message: "Inquiry not found",
      });
    }

    return reply.status(200).send({
      success: true,
      message: "Inquiry status updated successfully",
      data: inquiry,
    });
  } catch (error) {
    request.log.error(error);

    return reply.status(500).send({
      success: false,
      message: "Failed to update inquiry status",
    });
  }
};