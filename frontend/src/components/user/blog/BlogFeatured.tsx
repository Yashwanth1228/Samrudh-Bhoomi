import React from "react";
import { Box, Typography, Card, CardMedia, CardContent, Chip, Button } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { FeaturedCard, FeaturedContent, FeaturedTag } from "@/styles/user/blog/BlogFeatured.styles";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  featured?: boolean;
}

interface Props {
  post: BlogPost;
}

export const BlogFeatured: React.FC<Props> = ({ post }) => {
  return (
    <FeaturedCard>
      <Box sx={{ position: "relative", width: { xs: "100%", md: "60%" }, height: { xs: 300, md: "auto" } }}>
        <CardMedia
          component="img"
          image={post.image}
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
            {post.date}
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
        >
          Read More
        </Button>
      </FeaturedContent>
    </FeaturedCard>
  );
};