import React from "react";
import { Box, Typography, Button } from "@mui/material";

import { CTASection } from "@/styles/user/blog/BlogDetail/BlogDetailCTA.styles";

export const BlogDetailCTA: React.FC = () => {
  return (
    <CTASection>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 2,
          textAlign: "center",
        }}
      >
        Ready to upgrade your farm's efficiency?
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          maxWidth: "600px",
          margin: "0 auto",
          mb: 4,
          textAlign: "center",
        }}
      >
        Discover our range of precision agriculture tools or speak with an agronomist to tailor a solution for your acreage.
      </Typography>

      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, justifyContent: "center" }}>
        <Button
          variant="contained"
          sx={{
            textTransform: "uppercase",
            fontWeight: 600,
            letterSpacing: "0.5px",
            px: 4,
            py: 1.5,
            bgcolor: "#2d5a27",
            "&:hover": {
              bgcolor: "primary.main",
            },
          }}
        >
          Explore Our Products
        </Button>
        <Button
          variant="outlined"
          sx={{
            textTransform: "uppercase",
            fontWeight: 600,
            letterSpacing: "0.5px",
            px: 4,
            py: 1.5,
            borderColor: "#2d5a27",
            color: "#2d5a27",
            "&:hover": {
              bgcolor: "action.hover",
            },
          }}
        >
          Contact Our Experts
        </Button>
      </Box>
    </CTASection>
  );
};