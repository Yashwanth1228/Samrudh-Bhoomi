import { FastifyReply, FastifyRequest } from "fastify";
import Product from "./product.model";

interface ProductBody {
  name: string;
  category: string;
  price: number;
  status?: string;
  originalPrice?: number;
  taxRate?: number;
  shortDescription?: string;
  description?: string;
}

export const addProduct = async (
  request: FastifyRequest<{ Body: ProductBody }>,
  reply: FastifyReply
) => {
  try {
    const data = request.body;

    console.log("BODY:", data);

    if (!data) {
      return reply.status(400).send({
        success: false,
        message: "No data provided",
      });
    }

    if (!data.name || !data.category || !data.price) {
      return reply.status(400).send({
        success: false,
        message: "Name, Category and Price are required",
      });
    }

    const newProduct = await Product.create(data);

    return reply.status(201).send({
      success: true,
      message: "Product created successfully",
      data: newProduct,
    });

  } catch (error: any) {
    console.error(error);

    return reply.status(500).send({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

export const getAllProducts = async (
    request: FastifyRequest,
    reply: FastifyReply,
  ) => {
    try {
      const products = await Product.find()
  
      return reply.status(200).send({
        success: true,
        message: "products fetched successfully",
        data: products,
      });
    } catch (error) {
      return reply.status(500).send({
        success: false,
        message: error instanceof Error ? error.message : "Something went wrong",
      });
    }
  };




// try {
//     const parts = request.parts();

//     const imageUrls: string[] = [];
//     const productData: any = {};

//     for await (const part of parts) {

//       if (part.type === "file") {

//         const buffer = await part.toBuffer();

//         const result: any = await uploadToCloudinary(buffer);

//         imageUrls.push(result.secure_url);

//       } else {

//         productData[part.fieldname] = part.value;

//       }
//     }

//     if (
//       !productData.name ||
//       !productData.category ||
//       !productData.price
//     ) {
//       return reply.status(400).send({
//         success: false,
//         message: "Name, Category and Price are required",
//       });
//     }

//     const newProduct = await Product.create({
//       ...productData,
//       price: Number(productData.price),
//       originalPrice: productData.originalPrice
//         ? Number(productData.originalPrice)
//         : undefined,
//       taxRate: productData.taxRate
//         ? Number(productData.taxRate)
//         : undefined,
//       images: imageUrls,
//     });

//     return reply.status(201).send({
//       success: true,
//       message: "Product created successfully",
//       data: newProduct,
//     });

//   } catch (error: any) {
//     console.error(error);

//     return reply.status(500).send({
//       success: false,
//       message: error.message,
//     });
//   }
// };