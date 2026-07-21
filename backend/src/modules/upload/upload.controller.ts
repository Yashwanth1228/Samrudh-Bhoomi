import { FastifyReply, FastifyRequest } from "fastify";
import cloudinary from "../../config/cloudinary";

interface UploadParams {
  module: string;
  type: string;
}

export const uploadImage = async (
  request: FastifyRequest<{
    Params: UploadParams;
  }>,
  reply: FastifyReply
) => {
  try {
    const { module, type } = request.params;

    const folder = `${module}/${type}`;

    const allowedFolders = [
      "blogs/featured",
      "blogs/authors",
      "products/images",
      "inventory/images",
      "users/profile",
      "cms/blog",
      "cms/home",
    ];

    if (!allowedFolders.includes(folder)) {
      return reply.status(400).send({
        success: false,
        message: "Invalid folder",
      });
    }

    const parts = request.files();

    const imageUrls: { url: string; publicId: string }[] = [];

    for await (const file of parts) {
      if (file.type !== "file") continue;

      const buffer = await file.toBuffer();

      const result: any = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              folder: `samrudh-bhoomi/${folder}`,
            },
            (err, result) => {
              if (err) return reject(err);
              resolve(result);
            }
          )
          .end(buffer);
      });

      imageUrls.push({
        url: result.secure_url,
        publicId: result.public_id,
      });
    }

    if (imageUrls.length === 0) {
      return reply.status(400).send({
        success: false,
        message: "No images uploaded",
      });
    }

    return reply.send({
      success: true,
      message: "Images uploaded successfully",
      imageUrls,
    });
  } catch (error) {
    console.error(error);

    return reply.status(500).send({
      success: false,
      message:
        error instanceof Error ? error.message : "Image upload failed",
    });
  }
};