import { FastifyReply, FastifyRequest } from "fastify";
import Blog from "./blog.model";

interface BlogBody {
  title: string;
  slug: string;
  category: string;
  featuredImage?: string;
  excerpt?: string;
  content: string;

  author?: {
    name?: string;
    title?: string;
    bio?: string;
    image?: string;
  };

  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string[];
  };

  status?: "draft" | "published";

  relatedPosts?: string[];
}

export const addBlog = async (
  request: FastifyRequest<{ Body: BlogBody }>,
  reply: FastifyReply
) => {
  try {
    const data = request.body;

    if (!data) {
      return reply.status(400).send({
        success: false,
        message: "No data provided",
      });
    }

    const {
      title,
      slug,
      category,
      content,
      status,
    } = data;

    if (!title || !slug || !category || !content) {
      return reply.status(400).send({
        success: false,
        message:
          "Title, slug, category and content are required",
      });
    }

    const existingBlog = await Blog.findOne({ slug });

    if (existingBlog) {
      return reply.status(409).send({
        success: false,
        message: "Slug already exists",
      });
    }

    const blog = await Blog.create({
      ...data,
      publishedAt:
        status === "published"
          ? new Date()
          : undefined,
    });

    return reply.status(201).send({
      success: true,
      message: "Blog created successfully",
      data: blog,
    });
  } catch (error: any) {
    console.error(error);

    return reply.status(500).send({
      success: false,
      message:
        error.message || "Internal Server Error",
    });
  }
};

export const getAllBlogs = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    const blogs = await Blog.find()

    return reply.status(200).send({
      success: true,
      message: "blogs fetched successfully",
      data: blogs,
    });
  } catch (error) {
    return reply.status(500).send({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

interface DeleteBlogParams {
  id: string;
}

export const deleteBlog = async (
  request: FastifyRequest<{ Params: DeleteBlogParams }>,
  reply: FastifyReply
) => {
  try {
    const { id } = request.params;

    const blog = await Blog.findById(id);

    if (!blog) {
      return reply.status(404).send({
        success: false,
        message: "Blog not found",
      });
    }

    await Blog.findByIdAndDelete(id);

    return reply.status(200).send({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error: any) {
    console.error(error);

    return reply.status(500).send({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

interface Params {
  slug: string;
}

export const getBlogBySlug = async (
  request: FastifyRequest<{ Params: Params }>,
  reply: FastifyReply
) => {
  try {
    const { slug } = request.params;

    const blog = await Blog.findOne({ slug });

    if (!blog) {
      return reply.status(404).send({
        success: false,
        message: "Blog not found",
      });
    }

    const relatedPosts = await Blog.find({
      _id: { $ne: blog._id },
      category: blog.category,
      status: "published",
    })
      .limit(3)
      .select("title slug featuredImages excerpt category");

    return reply.status(200).send({
      success: true,
      data: {
        ...blog.toObject(),
        relatedPosts,
      },
    });
  } catch (error: any) {
    console.error(error);

    return reply.status(500).send({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

interface IBlogUpdateInput {
  title?: string;
  slug?: string;
  category?: string;
  featuredImages?: string[];
  excerpt?: string;
  content?: string;

  author?: {
    name?: string;
    title?: string;
    bio?: string;
    image?: string;
  };

  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string[];
  };

  featured?: boolean;

  status?: "draft" | "published";

  relatedPosts?: string[];
}

export const updateBlog = async (
  request: FastifyRequest<{
    Params: { id: string };
    Body: IBlogUpdateInput;
  }>,
  reply: FastifyReply
) => {
  try {
    const { id } = request.params;
    const body = request.body;

    // Check if another blog already has this slug
    if (body.slug) {
      const existing = await Blog.findOne({
        slug: body.slug,
        _id: { $ne: id },
      });

      if (existing) {
        return reply.status(400).send({
          success: false,
          message: "Slug already exists",
        });
      }
    }

    const updatedBlog = await Blog.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedBlog) {
      return reply.status(404).send({
        success: false,
        message: "Blog not found",
      });
    }

    return reply.send({
      success: true,
      message: "Blog updated successfully",
      data: updatedBlog,
    });
  } catch (err: any) {
    return reply.status(500).send({
      success: false,
      message: err.message || "Internal Server Error",
    });
  }
};