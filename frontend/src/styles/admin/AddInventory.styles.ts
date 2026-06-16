import { styled } from "@mui/material/styles";
import { Box, Paper, Button } from "@mui/material";

export const PageContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  overflowY: "auto",
//   padding: theme.spacing(4),
//   backgroundColor: theme.palette.background.default,
  height: "100%",

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },
}));

export const PageHeader = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(5),
}));

export const FormCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: "16px",
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  marginBottom: theme.spacing(3),
  boxShadow: "0px 2px 4px rgba(0,0,0,0.04)",

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

export const SectionHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  marginBottom: theme.spacing(3),
  paddingBottom: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
  color: "#134E29",

  "& h3": {
    fontWeight: 700,
    fontSize: "1.25rem",
  },
}));

export const InputGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.5),

  "& label": {
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    fontSize: "0.75rem",
    color: theme.palette.text.secondary,
  },
}));

export const StickyActionBar = styled(Box)(({ theme }) => ({
  position: "sticky",
  bottom: theme.spacing(4),
  marginTop: theme.spacing(6),
  padding: theme.spacing(2),
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  backdropFilter: "blur(12px)",
  borderRadius: "16px",
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  zIndex: 10,

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: theme.spacing(2),
    bottom: theme.spacing(2),

    "& .action-buttons": {
      width: "100%",
      flexDirection: "column",
    },
  },
}));

export const StatusRadioOption = styled(Box, {
  shouldForwardProp: (prop) => prop !== "selected",
})<{ selected?: boolean; statusColor?: string }>(({ theme, selected, statusColor }) => ({
  flex: 1,
  cursor: "pointer",
  padding: theme.spacing(1.5),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1),
  transition: "all 0.2s ease",
  backgroundColor: selected ? statusColor || theme.palette.primary.light : "transparent",
  color: selected ? theme.palette.getContrastText(statusColor || theme.palette.primary.light) : theme.palette.text.primary,

  "&:hover": {
    borderColor: theme.palette.primary.main,
    transform: "translateY(-1px)",
  },

  "& .MuiSvgIcon-root": {
    fontSize: "1rem",
  },
}));

export const UploadArea = styled(Box)(({ theme }) => ({
  border: `2px dashed ${theme.palette.divider}`,
  borderRadius: "16px",
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "all 0.2s ease",
  textAlign: "center",

  "&:hover": {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.action.hover,

    "& .upload-icon": {
      backgroundColor: theme.palette.primary.light,
      "& .MuiSvgIcon-root": {
        color: theme.palette.primary.main,
      },
    },
  },
}));

export const UploadIconWrapper = styled(Box)(({ theme }) => ({
  width: 64,
  height: 64,
  backgroundColor: theme.palette.background.default,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: theme.spacing(2),
  transition: "all 0.2s ease",
}));