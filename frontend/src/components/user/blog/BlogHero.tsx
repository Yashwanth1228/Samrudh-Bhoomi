import React from "react";
import { Container, Typography, Box, Breadcrumbs, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import { HeroSection, HeroOverlay, HeroContent } from "@/styles/user/blog/BlogHero.styles";

export const BlogHero: React.FC = () => {
  return (
    <HeroSection>
      <HeroOverlay />
      <HeroContent>
        <Container maxWidth="xl">
          <Breadcrumbs
            separator={<NavigateNextIcon sx={{ fontSize: 16, color: "rgba(255,255,255,0.8)" }} />}
            sx={{
              mb: 3,
              color: "rgba(255,255,255,0.8)",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              fontSize: "0.75rem",
              "& .MuiBreadcrumbs-separator": {
                mx: 1,
              },
            }}
          >
            <Link href="/" sx={{ color: "inherit", textDecoration: "none", "&:hover": { color: "#fff" } }}>
              Home
            </Link>
            <Typography sx={{ color: "#fff", fontWeight: 600 }}>Blogs</Typography>
          </Breadcrumbs>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2rem", md: "3.5rem" },
              fontWeight: 700,
              color: "#fff",
              mb: 2,
              maxWidth: "800px",
            }}
          >
            Blogs & Resources
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.9)",
              maxWidth: "600px",
              fontSize: "1.125rem",
            }}
          >
            Your trusted hub for agricultural knowledge, farming best practices, and industry insights.
          </Typography>
        </Container>
      </HeroContent>
    </HeroSection>
  );
};