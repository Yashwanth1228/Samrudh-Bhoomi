import { styled } from "@mui/material/styles";
import { Card, Chip } from "@mui/material";

export const BlogCardWrapper = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  borderRadius: "12px",
  overflow: "hidden",
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  boxShadow: "0px 2px 4px rgba(0,0,0,0.04)",
  transition: "all 0.3s",

  "&:hover": {
    boxShadow: "0px 8px 16px rgba(0,0,0,0.08)",
  },
}));

export const BlogCardTag = styled(Chip)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1.5),
  left: theme.spacing(1.5),
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  fontSize: "0.625rem",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  borderRadius: "20px",
  padding: "0 8px",
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: "0px 2px 4px rgba(0,0,0,0.04)",
}));