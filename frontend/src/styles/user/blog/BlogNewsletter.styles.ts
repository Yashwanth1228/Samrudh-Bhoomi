import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const NewsletterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(4),
  padding: theme.spacing(4),
  backgroundColor: theme.palette.action.hover,
  borderRadius: "16px",
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: "0px 2px 4px rgba(0,0,0,0.04)",

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: theme.spacing(6),
  },
}));

export const NewsletterForm = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  width: "100%",

  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));