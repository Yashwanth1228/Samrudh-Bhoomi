import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const SidebarWrapper = styled(Box)(({ theme }) => ({
  display: "none",
  position: "sticky",
  top: 100,
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(1.5),
  paddingTop: theme.spacing(4),
  paddingRight: theme.spacing(2),
  borderRight: `1px solid ${theme.palette.divider}`,

  [theme.breakpoints.up("lg")]: {
    display: "flex",
  },
}));