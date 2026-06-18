import { styled } from "@mui/material/styles";
import { Box, CardMedia } from "@mui/material";

export const HeroWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "300px",
  borderRadius: "12px",
  overflow: "hidden",
  marginBottom: theme.spacing(4),
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: "0px 2px 4px rgba(0,0,0,0.04)",

  [theme.breakpoints.up("md")]: {
    height: "500px",
  },
}));

export const HeroImage = styled(CardMedia)(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));

export const HeroContent = styled(Box)(({ theme }) => ({
  maxWidth: "800px",
  margin: "0 auto",
  padding: theme.spacing(0, 2),

  [theme.breakpoints.up("md")]: {
    padding: 0,
    textAlign: "left",
  },
}));