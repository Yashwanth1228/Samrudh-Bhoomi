import { styled } from "@mui/material/styles";
import { Accordion, Box, Card, Paper, Typography } from "@mui/material";

export const HomeContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.background.default,
}));

export const Header = styled(Box)(({ theme }) => ({
  position: "sticky",
  top: 0,
  zIndex: 50,
  backgroundColor: theme.palette.background.paper,
  borderBottom: `1px solid ${theme.palette.divider}`,
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.04)",
}));

export const MobileMenu = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
}));

export const MobileMenuItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ theme, active }) => ({
  padding: theme.spacing(1.5, 2),
  borderRadius: theme.shape.borderRadius,
  cursor: "pointer",
  fontWeight: active ? 700 : 500,
  color: active ? "#138808" : theme.palette.text.secondary,
  backgroundColor: active ? theme.palette.action.selected : "transparent",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

export const HeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",

  "& img": {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

export const HeroOverlay = styled(Box)({
  position: "absolute",
  inset: 0,
  background: `
    linear-gradient(
      90deg,
      rgba(20, 40, 20, 0.9) 0%,
      rgba(35, 65, 35, 0.65) 40%,
      rgba(35, 65, 35, 0.3) 100%
    )
  `,
});

export const HeroContent = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  width: "100%",
  maxWidth: "700px",
  marginLeft: "8%",

  [theme.breakpoints.down("md")]: {
    marginLeft: "5%",
    maxWidth: "90%",
  },
}));

export const StatsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 2),
  backgroundColor: theme.palette.background.paper,
  borderBottom: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(6, 4),
  },
}));

export const StatsCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  transition: "all 0.3s",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

export const AboutSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(12, 4),
  },
}));

export const AboutImageWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: "24px",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundColor: `${theme.palette.primary.main}10`,
    borderRadius: "24px",
    zIndex: 1,
  },
  "& img": {
    position: "relative",
    zIndex: 0,
    display: "block",
  },
}));

export const ProductsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 2),
  backgroundColor: "#f7f8f4",

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(12, 4),
  },
}));

export const ProductCard = styled(Card)(({ theme }) => ({
  borderRadius: "18px",
  overflow: "hidden",
  height: "100%",
  background: "#fff",
  boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  transition: "all 0.3s ease",

  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 24px rgba(0,0,0,0.15)",

    "& img": {
      transform: "scale(1.08)",
    },
  },
}));

export const ProductImageWrapper = styled(Box)({
  position: "relative",
  overflow: "hidden",
  height: "220px",

  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "0.5s",
  },
});

export const ProductOverlay = styled(Box)({
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.15))",
});

export const ProductTitle = styled(Typography)({
  position: "absolute",
  bottom: 20,
  left: 20,
  color: "#fff",
  fontWeight: 700,
  fontSize: "1.4rem",
});

export const WhyChooseSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(12, 4),
  },
}));

export const WhyCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  height: "100%",
  transition: "all 0.3s",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.08)",
  },
}));

export const BlogSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(12, 4),
  },
}));

export const BlogCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
  transition: "all 0.3s",
  cursor: "pointer",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  "&:hover": {
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.12)",
    "& img": {
      transform: "scale(1.05)",
    },
  },
  "& img": {
    transition: "transform 0.5s",
  },
}));

export const FAQSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  backgroundColor: theme.palette.action.hover,
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(12, 4),
  },
}));

export const FAQItem = styled(Accordion)(({ theme }) => ({
  borderRadius: "16px !important",
  overflow: "hidden",
  border: "1px solid #e0e0e0",
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  marginBottom: theme.spacing(2),

  "&:before": {
    display: "none",
  },

  "&.Mui-expanded": {
    marginBottom: theme.spacing(2),
  },

  "& .MuiAccordionSummary-root": {
    minHeight: 72,
    backgroundColor: "#ffffff",
  },

  "& .MuiAccordionSummary-content": {
    margin: theme.spacing(2, 0),
  },

  "& .MuiAccordionDetails-root": {
    borderTop: "1px solid #f0f0f0",
    backgroundColor: "#fafafa",
  },
}));
export const CTASection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  backgroundColor: "#154406",
  color: "white",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    opacity: 0.1,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    backgroundRepeat: "repeat",
    pointerEvents: "none",
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(12, 4),
  },
}));

export const Footer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.action.hover,
  borderTop: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(6, 2),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(6, 4),
  },
}));

export const FooterGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: theme.spacing(4),
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
}));