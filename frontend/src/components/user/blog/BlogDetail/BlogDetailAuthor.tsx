import React from "react";
import { Box, Avatar, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { AuthorCard } from "@/styles/user/blog/BlogDetail/BlogDetailAuthor.styles";

interface Author {
  name: string;
  title: string;
  bio: string;
  image: string;
}

interface Props {
  author: Author;
}

export const BlogDetailAuthor: React.FC<Props> = ({ author }) => {
  return (
    <AuthorCard>
      <Avatar
        src={author.image}
        alt={author.name}
        sx={{ width: 80, height: 80, border: "2px solid", borderColor: "background.paper", flexShrink: 0 }}
      />
      <Box>
        <Typography variant="caption" sx={{ fontWeight: 600, color: "primary.main", textTransform: "uppercase", letterSpacing: "0.5px" }}>
          About the Author
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
          {author.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {author.bio}
        </Typography>
        <Button
          endIcon={<ArrowForwardIcon />}
          sx={{
            textTransform: "none",
            color: "primary.main",
            p: 0,
            "&:hover": { textDecoration: "underline", bgcolor: "transparent" },
          }}
        >
          View all articles
        </Button>
      </Box>
    </AuthorCard>
  );
};