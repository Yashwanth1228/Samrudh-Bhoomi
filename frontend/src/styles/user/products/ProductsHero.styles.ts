import styled from "@emotion/styled";
import { Box, Typography, Container, Link } from "@mui/material";

export const HeroSection = styled(Box)`
  position: relative;
  width: 100%;
  height: 300px;
  background-color: #e3e3de;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDvBZAjGZ93pWC2HUTM9p7Yif7yjDzEqWogI-YM-HZoHWtRoBH8lQt-Y30hwD1oDOmeoqNfHYmuwqs4ahUGuXWtvwjKqehC6vEfiB3wG2jw98DhzJSNc8DXIiAZ-EaxuUA_JDlfMl7U8SCf20Vn_hshQRyaXGb8X6JEZ7NUVlaho25s4hXNV2_HaefEuSAnBi9RDgLMZ1A-1FDON4p6wRMIDZrP4OVMN3In3vnVEpNCb-Cd0VJOrMDiol7J8vmjpXV3NE1SA6sBAZLr");
  background-size: cover;
  background-position: center;

  @media (min-width: 768px) {
    height: 400px;
  }
`;

export const HeroOverlay = styled(Box)`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(26, 28, 25, 0.8) 0%,
    rgba(26, 28, 25, 0.6) 50%,
    transparent 100%
  );
  mix-blend-mode: multiply;
`;

export const HeroContent = styled(Container)`
  position: relative;
  z-index: 10;
  padding: 0 16px;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding-top: 48px;

  @media (min-width: 768px) {
    padding: 0 32px;
    text-align: left;
    padding-top: 0;
  }
`;

export const BreadcrumbNav = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;

  & .MuiBreadcrumbs-ol {
    justify-content: center;
  }

  & .MuiBreadcrumbs-separator {
    color: rgba(255, 255, 255, 0.8);
  }

  @media (min-width: 768px) {
    justify-content: flex-start;

    & .MuiBreadcrumbs-ol {
      justify-content: flex-start;
    }
  }
`;

export const BreadcrumbLink = styled(Link)`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #ffffff;
  }
`;

export const PageTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: -0.02em;
  color: #fafaf4;
  margin-bottom: 16px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  max-width: 768px;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    max-width: 100%;
  }
`;

export const PageSubtitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #e8e8e3;
  max-width: 672px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    text-align: center;
    max-width: 100%;
  }
`;
