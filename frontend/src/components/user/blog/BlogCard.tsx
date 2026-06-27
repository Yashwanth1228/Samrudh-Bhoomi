import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
  Button,
} from "@mui/material";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import {
  BlogCardWrapper,
  BlogCardTag,
} from "@/styles/user/blog/BlogCard.styles";
import { useRouter } from "next/router";

interface BlogPost {
  _id: string,
  id: number;
  slug: string,
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  featured?: boolean;
  featuredImages: string
}

interface Props {
  post: BlogPost;
}

export const BlogCard: React.FC<Props> = ({ post }) => {
  const router = useRouter();
  return (
    <BlogCardWrapper>
      <Box sx={{ position: "relative", height: 200, overflow: "hidden" }}>
        <CardMedia
          component="img"
          image={post.featuredImages[0] || post.image}
          alt={post.title}
          sx={{
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.7s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />
        <BlogCardTag label={post.category} />
      </Box>

      <CardContent
        sx={{ p: 3, flex: 1, display: "flex", flexDirection: "column" }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
          <ScheduleIcon sx={{ fontSize: 14, color: "text.secondary" }} />
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ textTransform: "uppercase", letterSpacing: "0.5px" }}
          >
            {post.date}
          </Typography>
        </Box>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mb: 1.5,
            lineHeight: 1.3,
            transition: "color 0.3s",
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          {post.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            flex: 1,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {post.excerpt}
        </Typography>

        <Box
          sx={{
            pt: 2,
            borderTop: "1px solid",
            borderColor: "divider",
            mt: "auto",
          }}
        >
          <Button
            endIcon={<ArrowForwardIcon />}
            sx={{
              textTransform: "uppercase",
              fontWeight: 600,
              letterSpacing: "0.5px",
              color: "primary.main",
              p: 0,
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
            onClick={() => router.push("/blogs/".concat(post.slug.toString()))}
          >
            Read Article
          </Button>
        </Box>
      </CardContent>
    </BlogCardWrapper>
  );
};
