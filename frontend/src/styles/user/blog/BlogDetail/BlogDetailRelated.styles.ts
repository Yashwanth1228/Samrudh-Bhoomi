import { styled } from "@mui/material/styles";
import { Box, Card } from "@mui/material";

export const RelatedSection = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(6),
  paddingTop: theme.spacing(4),
  borderTop: `1px solid ${theme.palette.divider}`,
}));

export const RelatedCard = styled(Card)(({ theme }) => ({
    height: "100%",
    minHeight: 430,
    display: "flex",
    flexDirection: "column",
    borderRadius: "16px",
    overflow: "hidden",
    border: `1px solid ${theme.palette.divider}`,
    transition: "all .3s ease",
  
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 8px 16px rgba(0,0,0,.08)",
  
      "& img": {
        transform: "scale(1.05)",
      },
    },
  }));