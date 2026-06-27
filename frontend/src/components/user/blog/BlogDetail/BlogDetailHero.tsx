import React from "react";
import { Box, Container, Typography, Breadcrumbs, Link, Chip, Avatar } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ScheduleIcon from "@mui/icons-material/Schedule";

import { HeroWrapper, HeroImage, HeroContent } from "@/styles/user/blog/BlogDetail/BlogDetailHero.styles";

interface Author {
  name: string;
  title: string;
  bio: string;
  image: string;
}

interface Post {
  id: number;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: Author;
  image: string;
  content: string;
  relatedPosts: any[];
  featuredImages: string;
}

interface Props {
  post: Post;
}

export const BlogDetailHero: React.FC<Props> = ({ post }) => {
  return (
    <Box sx={{ pt: 4 }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
        {/* Breadcrumb */}
        <Breadcrumbs
          separator={<NavigateNextIcon sx={{ fontSize: 16, color: "text.secondary" }} />}
          sx={{
            mb: 4,
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.5px",
            color: "text.secondary",
            "& .MuiBreadcrumbs-separator": {
              mx: 1,
            },
          }}
        >
          <Link href="/" sx={{ color: "inherit", textDecoration: "none", "&:hover": { color: "primary.main" } }}>
            Home
          </Link>
          <Link href="/blogs" sx={{ color: "inherit", textDecoration: "none", "&:hover": { color: "primary.main" } }}>
            Blogs
          </Link>
          <Link href="#" sx={{ color: "inherit", textDecoration: "none", "&:hover": { color: "primary.main" } }}>
            Agriculture Technology
          </Link>
          <Typography sx={{ color: "text.primary", fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {post.title}
          </Typography>
        </Breadcrumbs>

        {/* Hero Image */}
        <HeroWrapper>
        <HeroImage
  image={post.featuredImages[0]}
  title={post.title}
/>
        </HeroWrapper>

        {/* Hero Content */}
        <HeroContent>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "center", md: "flex-start" }, gap: 2, mb: 2, flexWrap: "wrap" }}>
            <Chip
              label={post.category}
              sx={{
                bgcolor: "primary.light",
                color: "#fffafa",   
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                fontSize: "0.625rem",
              }}
            />
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <ScheduleIcon sx={{ fontSize: 16, color: "text.secondary" }} />
              <Typography variant="caption" color="text.secondary">
                {post.readTime}
              </Typography>
            </Box>
          </Box>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 700,
              color: "text.primary",
              mb: 4,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {post.title}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" },
              gap: 2,
              pt: 3,
              pb: 3,
              borderTop: "1px solid",
              borderBottom: "1px solid",
              borderColor: "divider",
            }}
          >
            <Avatar
              src={post.author.image}
              alt={post.author.name}
              sx={{ width: 56, height: 56, border: "2px solid", borderColor: "divider" }}
            />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {post.author.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post.author.title} • {post.date}
              </Typography>
            </Box>
          </Box>
        </HeroContent>
      </Container>
    </Box>
  );
};