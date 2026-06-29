import { FastifyReply, FastifyRequest } from "fastify";
import cloudinary from "../../config/cloudinary";

export const uploadImage = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    const data = await request.file();

    if (!data) {
      return reply.status(400).send({
        success: false,
        message: "No file uploaded",
      });
    }

    const buffer = await data.toBuffer();

    console.log("Cloudinary Config:", cloudinary.config());

    const result = await new Promise<any>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "samrudh-bhoomi/users",
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          },
        )
        .end(buffer);
    });

    return reply.send({
      success: true,
      imageUrl: result.secure_url,
    });
  } catch (error) {
    return reply.status(500).send({
      success: false,
      message: error instanceof Error ? error.message : "Upload failed",
    });
  }
};
