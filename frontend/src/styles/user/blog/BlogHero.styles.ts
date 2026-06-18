import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const HeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "400px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: theme.palette.action.hover,
  overflow: "hidden",
  backgroundImage: `url('https://lh3.googleusercontent.com/aida/AP1WRLvvCdp1r3ZnTaXKARVO3REDT2WCsNZ5gEW6fTqZPsnKdkcIRkNvp5tjZgdKoVfyJ-GdlIKGOa8ytydF5bPlRsrjajZKU1lfktB-pKRaK-5bx0xRag4Z9Ja9eQsNu8kjVvCQTAjLiyHjdmz7wzw_dFG_Nxf0XswClxoe9JosSwUdtBpcgtbD1LC-cdJr2hxRp06cf7mH6Zpe1ehoc-bxUMlRA2eSvvB_J0mpI6vjDNMy5f7oKAIWNPgwHCx5')`,
  backgroundSize: "cover",
  backgroundPosition: "center",

  [theme.breakpoints.up("md")]: {
    height: "500px",
  },
}));

export const HeroOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  inset: 0,
  background: "linear-gradient(180deg, rgba(21,66,18,0.7) 0%, rgba(21,66,18,0.4) 100%)",
}));

export const HeroContent = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 10,
  width: "100%",
  padding: theme.spacing(0, 2),

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(0, 4),
  },
}));