import { FastifyReply, FastifyRequest } from "fastify";
import Cms from "./cms.model";

/**
 * Create or Update CMS Page
 */
export const saveCms = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { page, content, isPublished } = request.body as {
      page: string;
      content: Record<string, any>;
      isPublished?: boolean;
    };

    const cms = await Cms.findOneAndUpdate(
      { page },
      {
        page,
        content,
        isPublished,
        publishedAt: isPublished ? new Date() : null,
      },
      {
        new: true,
        upsert: true,
        runValidators: true,
      }
    );

    return reply.code(200).send({
      success: true,
      message: `${page} page saved successfully.`,
      data: cms,
    });
  } catch (error: any) {
    return reply.code(500).send({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Get CMS by Page
 */
export const getCmsByPage = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { page } = request.params as {
      page: string;
    };

    const cms = await Cms.findOne({ page });

    if (!cms) {
      return reply.code(404).send({
        success: false,
        message: "CMS page not found.",
      });
    }

    return reply.send({
      success: true,
      data: cms,
    });
  } catch (error: any) {
    return reply.code(500).send({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Get All CMS Pages
 */
export const getAllCms = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const cms = await Cms.find().sort({
      page: 1,
    });

    return reply.send({
      success: true,
      data: cms,
    });
  } catch (error: any) {
    return reply.code(500).send({
      success: false,
      message: error.message,
    });
  }
};