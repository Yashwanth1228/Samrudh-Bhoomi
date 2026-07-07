import React from "react";
import { Box, Typography, Card, CardMedia, CardContent, Chip, Button } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { FeaturedCard, FeaturedContent, FeaturedTag } from "@/styles/user/blog/BlogFeatured.styles";
import { useRouter } from "next/router";


interface CloudinaryImage {
  url: string;
  publicId: string;
}

interface BlogPost {
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

  createdAt: string;
  updatedAt: string;
}
interface Props {
  post: BlogPost;
}

export const BlogFeatured: React.FC<Props> = ({ post }) => {
  const router = useRouter();

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <FeaturedCard onClick={() => router.push("/blogs/".concat(post.slug.toString()))}>
      <Box sx={{ position: "relative", width: { xs: "100%", md: "60%" }, height: { xs: 300, md: "auto" } }}>
        <CardMedia
          component="img"
          image={post.featuredImages[1]?.url || post.featuredImages[0]?.url || "/images/blogs/default.jpg"}
          alt={post.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.7s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />
        <FeaturedTag label="Featured" />
      </Box>

      <FeaturedContent>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
          <CalendarTodayIcon sx={{ fontSize: 16, color: "text.secondary" }} />
          <Typography variant="caption" color="text.secondary" sx={{ textTransform: "uppercase", letterSpacing: "0.5px" }}>
            {formatDate(post.createdAt)}
          </Typography>
        </Box>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            mb: 2,
            transition: "color 0.3s",
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          {post.title}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
          {post.excerpt}
        </Typography>

        <Button
          endIcon={<ArrowForwardIcon />}
          sx={{
            textTransform: "uppercase",
            fontWeight: 600,
            letterSpacing: "0.5px",
            color: "primary.main",
            "&:hover": {
              color: "primary.dark",
              "& .MuiButton-endIcon": {
                transform: "translateX(4px)",
              },
            },
            "& .MuiButton-endIcon": {
              transition: "transform 0.3s",
            },
          }}
          // onClick={() => router.push("/blogs/".concat(post.slug.toString()))}
        >
          Read More
        </Button>
      </FeaturedContent>
    </FeaturedCard>
  );
};