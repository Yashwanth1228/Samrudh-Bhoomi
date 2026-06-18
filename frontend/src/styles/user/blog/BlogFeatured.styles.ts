import { styled } from "@mui/material/styles";
import { Card, CardContent, Chip } from "@mui/material";

export const FeaturedCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  borderRadius: "12px",
  overflow: "hidden",
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  boxShadow: "0px 2px 4px rgba(0,0,0,0.04)",
  transition: "box-shadow 0.3s",
  cursor: "pointer",

  "&:hover": {
    boxShadow: "0px 8px 16px rgba(0,0,0,0.08)",
  },

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

export const FeaturedContent = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(3),
  width: "100%",

  [theme.breakpoints.up("md")]: {
    width: "40%",
    padding: theme.spacing(4),
  },
}));

export const FeaturedTag = styled(Chip)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(2),
  left: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontSize: "0.625rem",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  borderRadius: "20px",
  padding: "0 12px",
}));