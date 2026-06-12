import { styled } from "@mui/material/styles";
import { Box, Paper } from "@mui/material";

export const ContentContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  height: "100%",
}));

export const PageHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  marginBottom: theme.spacing(4),

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing(2),

    "& .MuiButton-root": {
      width: "100%",
    },
  },
}));

export const KPIGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4),

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const KPIBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: "12px",
  border: `1px solid ${theme.palette.divider}`,
  position: "relative",
  overflow: "hidden",
  backgroundColor: theme.palette.background.paper,
  boxShadow: "0px 2px 4px rgba(0,0,0,0.04)",

  "& .kpi-icon": {
    position: "absolute",
    right: -16,
    bottom: -16,
    opacity: 0.05,
    fontSize: "120px",
  },
}));

export const KPIBigBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: "12px",
  border: `1px solid ${theme.palette.divider}`,
  position: "relative",
  overflow: "hidden",
  gridColumn: "span 2",
  backgroundColor: theme.palette.background.paper,
  boxShadow: "0px 2px 4px rgba(0,0,0,0.04)",

  [theme.breakpoints.down("md")]: {
    gridColumn: "span 1",
  },

  "& .gradient-bg": {
    position: "absolute",
    right: 0,
    top: 0,
    height: "100%",
    width: "33.33%",
    background: `linear-gradient(to left, ${theme.palette.primary.light}10, transparent)`,
  },
}));

export const TabPanel = styled(Box)({
  padding: 0,
});

export const TableToolbar = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: theme.palette.background.paper,

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: theme.spacing(2),

    "& .search-field": {
      width: "100%",
    },

    "& .filter-group": {
      width: "100%",
      flexDirection: "column",
    },
  },
}));

export const StatusBadge = styled(Box, {
  shouldForwardProp: (prop) => prop !== "status",
})<{ status: "in-stock" | "low-stock" | "out-of-stock" }>(({ theme, status }) => {
  const statusConfig = {
    "in-stock": {
      bg: theme.palette.success.light,
      color: theme.palette.success.contrastText,
      label: "In Stock",
    },
    "low-stock": {
      bg: theme.palette.warning.light,
      color: theme.palette.warning.contrastText,
      label: "Low Stock",
    },
    "out-of-stock": {
      bg: theme.palette.error.light,
      color: theme.palette.error.contrastText,
      label: "Out of Stock",
    },
  };

  const config = statusConfig[status];

  return {
    display: "inline-flex",
    alignItems: "center",
    padding: "4px 8px",
    borderRadius: "16px",
    backgroundColor: config.bg,
    color: config.color,
    fontSize: "10px",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  };
});