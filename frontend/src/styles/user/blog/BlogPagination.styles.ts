import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";

export const PaginationContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(1),
  paddingTop: theme.spacing(4),
}));

export const PageButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ theme, active }) => ({
  minWidth: 40,
  height: 40,
  borderRadius: "8px",
  fontWeight: 500,
  backgroundColor: active ? theme.palette.primary.main : "transparent",
  color: active ? theme.palette.primary.contrastText : theme.palette.text.primary,
  border: active ? "none" : `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(0, 1.5),
  "&:hover": {
    backgroundColor: active ? theme.palette.primary.dark : theme.palette.action.hover,
  },
  "&:disabled": {
    cursor: "default",
    backgroundColor: "transparent",
    border: "none",
    color: theme.palette.text.disabled,
  },
}));