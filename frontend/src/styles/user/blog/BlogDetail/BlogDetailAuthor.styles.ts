import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

export const AuthorCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(6),
  backgroundColor: theme.palette.action.hover,
  borderRadius: "12px",
  border: `1px solid ${theme.palette.divider}`,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  alignItems: "flex-start",

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    padding: theme.spacing(4),
  },
}));