import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
// import EcoIcon from "@mui/icons-material/Eco";

import { ContentWrapper, QuoteBlock, ImageWrapper, FeatureList, FeatureItem } from "@/styles/user/blog/BlogDetail/BlogDetailContent.styles";
import { BlogDetailAuthor } from "./BlogDetailAuthor";

interface CloudinaryImage {
  url: string;
  publicId: string;
}

interface Post {
  _id: string;
  id: string;

  title: string;
  slug: string;
  category: string;

  featuredImages: CloudinaryImage[];

  excerpt: string;
  content: string;

  author: {
    name: string;
    title: string;
    bio: string;
    image: CloudinaryImage;
  };

  seo: {
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string[];
  };

  featured?: boolean;
  status: "draft" | "published";
  readTime: string;

  createdAt: string;
  updatedAt: string;
}

interface Props {
  post: Post;
}

export const BlogDetailContent: React.FC<Props> = ({ post }) => {
  console.log("BlogDetailContent post:", post);
  return (
    <ContentWrapper>
      <Box dangerouslySetInnerHTML={{ __html: post.content }} />

      {/* Image with caption */}
      <ImageWrapper>
        <Box
          component="img"
          // src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgG6Ypk0OIVDkcqG_gOGgdbOM7M-VfCABlSOMBX8-ZW_AJD7xUiaRsW9tQ_fEVik2CAo4fDc-8QxOk_6_f4jw690jZxFoH4Z7ajpFgnVU04gsyZkkXhIfGhk-3TphsognkZ1ZcVYMqtAy1u2OlVaH_fVT7xi53yz3I8ezRhSLebal4kGj94vptH9veGxH5ejRaWlk4Z_85J_3k8jklLXeGGDu8WZsBAC9ppElLqxHA2hpsCX3JZBpuephejiiLug4fanYrGktjosDL"
          src={post.featuredImages?.[1]?.url || "/images/blogs/default.jpg"}
          alt="IoT sensors providing real-time moisture and nutrient data"
          sx={{ width: "100%", height: "auto", display: "block" }}
        />
        <Typography
          variant="caption"
          sx={{
            display: "block",
            textAlign: "center",
            py: 1.5,
            bgcolor: "background.paper",
            borderTop: "1px solid",
            borderColor: "divider",
            color: "text.secondary",
            fontWeight: 500,
          }}
        >
          {/* IoT sensors providing real-time moisture and nutrient data. */}
          {post.excerpt}
        </Typography>
      </ImageWrapper>

      {/* Mobile Social Share */}
      {/* <Box
        sx={{
          display: { xs: "flex", lg: "none" },
          alignItems: "center",
          gap: 2,
          py: 3,
          my: 4,
          borderTop: "1px solid",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500 }}>
          Share:
        </Typography>
        {["share", "work", "chat", "link"].map((icon) => (
          <Box
            key={icon}
            component="span"
            className="material-symbols-outlined"
            sx={{
              fontSize: 24,
              color: "text.secondary",
              cursor: "pointer",
              "&:hover": { color: "primary.main" },
            }}
          >
            {icon}
          </Box>
        ))}
      </Box> */}

      {/* Author Bio */}
      <BlogDetailAuthor author={post.author as any} />
    </ContentWrapper>
  );
};