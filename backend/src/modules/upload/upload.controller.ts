import { FastifyReply, FastifyRequest } from "fastify";
import cloudinary from "../../config/cloudinary";

interface UploadParams {
  folder: string;
}

export const uploadImage = async (
  request: FastifyRequest<{
    Params: UploadParams;
  }>,
  reply: FastifyReply
) => {
  try {
    const { folder } = request.params;

    // Allow only valid folders
    const allowedFolders = [
      "users",
      "blogs",
      "products",
      "inventory",
      "categories",
    ];

    if (!allowedFolders.includes(folder)) {
      return reply.status(400).send({
        success: false,
        message: "Invalid upload folder",
      });
    }

    const parts = request.files();

    const imageUrls: string[] = [];

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

      imageUrls.push(result.secure_url);
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