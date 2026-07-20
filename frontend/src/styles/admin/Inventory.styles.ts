import { styled } from "@mui/material/styles";
import { Box, Paper, Table } from "@mui/material";

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
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4),

  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const KPIBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: 16,
  border: `1px solid ${theme.palette.divider}`,
  background: theme.palette.background.paper,
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  position: "relative",
  overflow: "hidden",
  minHeight: 130,

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  "& .kpi-icon": {
    position: "absolute",
    right: 16,
    top: 16,
    opacity: 0.15,

    "& svg": {
      fontSize: 36,
    },
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

export const StyledTable = styled(Table)`
  min-width: 1000px;
  background-color: #ffffff;

  // & .MuiTableCell-head {
  //   // background-color: #eeeee9;
  //   font-family: "IBM Plex Sans", sans-serif;
  //   font-size: 12px;
  //   font-weight: 500;
  //   line-height: 16px;
  //   letter-spacing: 0.05em;
  //   text-transform: uppercase;
  //   color: #42493e;
  //   padding: 12px 16px;
  //   border-bottom: 1px solid #c2c9bb;
  // }

  & .MuiTableCell-head {
    font-family: "IBM Plex Sans", sans-serif;
    text-transform: uppercase;
    background-color: #eeeee9;

  }



  & .MuiTableCell-body {
    padding: 12px 16px;
    font-size: 14px;
    border-bottom: 1px solid rgba(194, 201, 187, 0.5);
  }

  & .MuiTableRow-root {
    transition: background-color 0.2s;

    &:hover {
      background-color: rgba(227, 227, 222, 0.5);
      // background-color: rgba(227, 227, 222, 0.3);
    }

    // &.striped {
    //   background-color: rgba(227, 227, 222, 0.5);
    //   // background-color: rgba(238, 238, 233, 0.3);
    // }
  }
`;