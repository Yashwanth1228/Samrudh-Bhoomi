import { styled } from "@mui/material/styles";
import { Box, Paper } from "@mui/material";

export const ContentWrapper = styled(Box)(({ theme }) => ({
  maxWidth: "800px",
  margin: "0 auto",
  width: "100%",

  "& p": {
    fontSize: "1rem",
    lineHeight: 1.8,
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(3),
  },

  "& h2": {
    fontSize: "1.5rem",
    fontWeight: 600,
    color: theme.palette.text.primary,
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(3),
  },

  "& blockquote": {
    margin: theme.spacing(5, 0),
    padding: theme.spacing(4),
    backgroundColor: theme.palette.action.hover,
    borderRadius: "12px",
    border: `1px solid ${theme.palette.divider}`,
    fontSize: "1.25rem",
    fontWeight: 500,
    color: theme.palette.text.primary,
    fontStyle: "italic",
    position: "relative",
    "&::before": {
      content: '"\\201C"',
      fontSize: "2.5rem",
      color: theme.palette.primary.main,
      position: "absolute",
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  },

  "& ul": {
    listStyle: "none",
    padding: 0,
    marginBottom: theme.spacing(4),
    "& li": {
      display: "flex",
      alignItems: "flex-start",
      gap: theme.spacing(2),
      marginBottom: theme.spacing(2),
      "& strong": {
        color: theme.palette.text.primary,
      },
    },
  },
}));

export const QuoteBlock = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.action.hover,
  borderRadius: "12px",
  border: `1px solid ${theme.palette.divider}`,
  margin: theme.spacing(5, 0),
  position: "relative",
  "&::before": {
    content: '"\\201C"',
    fontSize: "2.5rem",
    color: theme.palette.primary.main,
    position: "absolute",
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

export const ImageWrapper = styled(Box)(({ theme }) => ({
  borderRadius: "12px",
  overflow: "hidden",
  margin: theme.spacing(5, 0),
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: "0px 2px 4px rgba(0,0,0,0.04)",
}));

export const FeatureList = styled(Box)(({ theme }) => ({
  listStyle: "none",
  padding: 0,
  marginBottom: theme.spacing(4),
}));

export const FeatureItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
  "& strong": {
    color: theme.palette.text.primary,
  },
}));