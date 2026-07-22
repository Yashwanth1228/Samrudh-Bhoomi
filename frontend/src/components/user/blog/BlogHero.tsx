import React from "react";
import { Container, Typography, Box, Breadcrumbs, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import { HeroSection, HeroOverlay, HeroContent } from "@/styles/user/blog/BlogHero.styles";
import { useGetCmsByPageQuery } from "@/store/api/apiSlice";
import ErrorState from "@/components/common/ErrorState";
import LoadingState from "@/components/common/LoadingState";

export const BlogHero: React.FC = () => {
  const { data , isLoading: blogloading , error , refetch , isFetching } = useGetCmsByPageQuery("blogs");
  console.log("cms data" , data);

  if (blogloading)
  return <LoadingState title="Loading Blogs..." message="Please wait while we fetch your data." />;

// if (error)
//   return (
//     <ErrorState
//   title="Failed to Load Blogs"
//   message="Unable to fetch blogs."
//   loading={isFetching}
//   onRetry={refetch}
// />
//   );
  return (
    <HeroSection>
      <HeroOverlay
  image={
    data?.content?.bannerImage?.url ||
    "https://blog.plantwise.org/wp-content/uploads/sites/7/2020/05/sdas20121108-plantclinic_pondicherry-0268-1.jpg"
  }
/>
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
            {data?.content?.bannerTitle || "Blogs & Resources"}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.9)",
              maxWidth: "600px",
              fontSize: "1.125rem",
            }}
          >
            {data?.content?.bannerDescription || "Your trusted hub for agricultural knowledge, farming best practices , and industry insights."}
          </Typography>
        </Container>
      </HeroContent>
    </HeroSection>
  );
};