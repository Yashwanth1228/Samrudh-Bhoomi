import styled from "@emotion/styled";
import { Box, Typography, Container, Link } from "@mui/material";

export const HeroSection = styled(Box)`
  position: relative;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCFLRcr0jEbSoS1SyMpEUGKKy_9-IPImPtP5o8mJVA-3T982pyn0JDbPTmRT6WUu2adGTvOkqI6-u4NjtcOZBoXcp3tQykBkkQqAzlF6ZzF1NJlTAmCcZG9rq9YoY_0sQ8xVWH2IBZgtwYMuI23fuh0CKl50UZ062Vm76b6d_oT7D8EwZhfzfnedvXjHY-Rx10wBO1yNhQ2hFVv5GXq5VWMPeEQgcI7zfMNkeKKaZZxyYrzeB_tcvghOnxUU5k45oFnItrjzsU-aTgZ");
  background-size: cover;
  background-position: center;

  @media (min-width: 768px) {
    height: 400px;
  }
`;

export const HeroOverlay = styled(Box)`
  position: absolute;
  inset: 0;
  background-color: rgba(250, 250, 244, 0.8);
  backdrop-filter: blur(4px);
  mix-blend-mode: multiply;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, #fafaf4, transparent);
  }
`;

export const HeroContent = styled(Container)`
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 0 16px;

  @media (min-width: 768px) {
    padding: 0 32px;
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
`;

export const BreadcrumbLink = styled(Link)`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #42493e;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #154212;
  }
`;

export const PageTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: -0.02em;
  // color: #1a1c19;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const PageSubtitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  // color: #42493e;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  max-width: 672px;
  margin: 0 auto;
`;
