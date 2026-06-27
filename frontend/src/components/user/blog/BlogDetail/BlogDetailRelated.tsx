import React from "react";
import { Box, Grid, Typography, Card, CardMedia, CardContent, Chip, Button } from "@mui/material";

import { RelatedSection, RelatedCard } from "@/styles/user/blog/BlogDetail/BlogDetailRelated.styles";
import { useRouter } from "next/router";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface RelatedPost {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  featuredImages: string;
  excerpt: string;
  slug:string;
}

interface Props {
  posts: RelatedPost[];
}

export const BlogDetailRelated: React.FC<Props> = ({ posts }) => {
  const router = useRouter();
  return (
    <RelatedSection>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          mb: 4,
        }}
      >
        Related Articles
      </Typography>

      <Grid container spacing={3}>
  {posts.map((post) => (
    <Grid size={{ xs: 12, md: 4 }} key={post.id}>
      <RelatedCard>
        <Box sx={{ overflow: "hidden", height: 190 }}>
          <CardMedia
            component="img"
            image={post.featuredImages[0]}
            alt={post.title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform .5s",
            }}
          />
        </Box>

        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Chip
            label={post.category}
            size="small"
            sx={{
              alignSelf: "flex-start",
              mb: 2,
              fontWeight: 600,
              color: "primary.main",
              bgcolor: "transparent",
            }}
          />

          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 2,
              transition: ".3s",
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
            sx={{ m: "auto" }}
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
            Read more
          </Button>
        </Box>
        </CardContent>
      </RelatedCard>
    </Grid>
  ))}

  {/* Newsletter Card */}
  <Grid size={{ xs: 12, md: 4 }}>
    <Card
      sx={{
        height: "100%",
        minHeight: 430,
        borderRadius: "16px",
        bgcolor: "#dcedc8",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 4,

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          opacity: 0.08,
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
      >
        <Typography
          sx={{
            fontSize: "2rem",
            mb: 2,
          }}
        >
          📧
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            mb: 1,
            color: "#154406",
          }}
        >
          Stay Updated
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            mb: 4,
          }}
        >
          Get the latest agricultural insights and tech trends delivered to your inbox.
        </Typography>

        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box
            component="input"
            placeholder="Enter your email"
            sx={{
              border: 0,
              borderRadius: "10px",
              px: 2,
              py: 1.8,
              bgcolor: "white",
              fontSize: ".95rem",
              boxShadow: "inset 0 2px 4px rgba(0,0,0,.05)",

              "&:focus": {
                outline: "2px solid #154406",
              },
            }}
          />

          <Box
            component="button"
            sx={{
              border: 0,
              borderRadius: "10px",
              py: 1.8,
              bgcolor: "#154406",
              color: "#fff",
              fontWeight: 700,
              cursor: "pointer",
              transition: ".3s",

              "&:hover": {
                bgcolor: "#0f3304",
              },
            }}
          >
            SUBSCRIBE
          </Box>
        </Box>
      </Box>
    </Card>
  </Grid>
</Grid>
    </RelatedSection>
  );
};