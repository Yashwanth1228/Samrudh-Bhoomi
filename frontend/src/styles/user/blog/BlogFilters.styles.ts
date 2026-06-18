import { styled } from "@mui/material/styles";
import { Box, Chip } from "@mui/material";

export const FiltersContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  width: "100%",
}));

export const CategoryFilters = styled(Box)(({ theme }) => ({
  display: "flex",
  overflowX: "auto",
  gap: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  margin: theme.spacing(0, -2),
  padding: theme.spacing(0, 2),

  "&::-webkit-scrollbar": {
    display: "none",
  },
  msOverflowStyle: "none",
  scrollbarWidth: "none",

  [theme.breakpoints.up("md")]: {
    margin: 0,
    padding: 0,
    flexWrap: "wrap",
  },
}));

export const FilterChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "selected",
})<{ selected?: boolean }>(({ theme, selected }) => ({
  borderRadius: "20px",
  fontSize: "0.625rem",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  whiteSpace: "nowrap",
  backgroundColor: selected ? theme.palette.primary.main : "transparent",
  color: selected ? theme.palette.primary.contrastText : theme.palette.text.primary,
  border: selected ? "none" : `1px solid ${theme.palette.divider}`,
  cursor: "pointer",
  transition: "all 0.2s",

  "&:hover": {
    backgroundColor: selected ? theme.palette.primary.dark : theme.palette.action.hover,
  },
}));