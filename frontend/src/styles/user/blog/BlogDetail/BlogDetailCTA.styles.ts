import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

export const CTASection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.action.hover,
  borderRadius: "16px",
  border: `1px solid ${theme.palette.divider}`,
  marginBottom: theme.spacing(6),
  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(6),
  },
}));