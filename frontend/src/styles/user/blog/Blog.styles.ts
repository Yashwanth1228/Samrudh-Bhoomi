import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const BlogPageContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.background.default,
}));