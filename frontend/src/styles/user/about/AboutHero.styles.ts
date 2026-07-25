import styled from "@emotion/styled";
import { Box, Typography, Container } from "@mui/material";

export const HeroSection = styled(Box)`
  position: relative;
  padding-top: 96px;
  padding-bottom: 128px;
  overflow: hidden;

  background-color: #f4f4ee;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

export const HeroOverlay = styled(Box)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4) 0%,
    transparent 50%,
    rgba(250, 250, 244, 1) 100%
  );
  pointer-events: none;
`;

export const HeroContent = styled(Container)`
  position: relative;
  z-index: 10;
  text-align: center;
`;

export const HeroTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 24px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const HeroSubtitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: #ffffff;
  max-width: 672px;
  margin: 0 auto;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;
