import styled from "@emotion/styled";
import { Box, Typography, Button, Container } from "@mui/material";

interface HeroContainerProps {
  backgroundImage?: string;
}

export const HeroSectionContainer = styled(Box)<HeroContainerProps>`
  position: relative;
  height: 600px;
  min-height: 500px;
  max-height: 700px;
  background-color: #f4f4ee;
  display: flex;
  align-items: center;
  overflow: hidden;
  // background-image: url("https://lh3.googleusercontent.co  m/aida-public/AB6AXuCFLRcr0jEbSoS1SyMpEUGKKy_9-IPImPtP5o8mJVA-3T982pyn0JDbPTmRT6WUu2adGTvOkqI6-u4NjtcOZBoXcp3tQykBkkQqAzlF6ZzF1NJlTAmCcZG9rq9YoY_0sQ8xVWH2IBZgtwYMuI23fuh0CKl50UZ062Vm76b6d_oT7D8EwZhfzfnedvXjHY-Rx10wBO1yNhQ2hFVv5GXq5VWMPeEQgcI7zfMNkeKKaZZxyYrzeB_tcvghOnxUU5k45oFnItrjzsU-aTgZ");
  background-image: ${({ backgroundImage }) =>
  backgroundImage
    ? `url(${backgroundImage})`
    : `url("/hero-image.jpg")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;

  @media (max-width: 768px) {
    height: 500px;
    min-height: 400px;
    max-height: 600px;
  }

  @media (max-width: 480px) {
    height: 450px;
    min-height: 350px;
    max-height: 550px;
  }
`;

export const HeroOverlay = styled(Box)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(26, 28, 25, 0.9) 0%,
    rgba(26, 28, 25, 0.6) 50%,
    rgba(26, 28, 25, 0.2) 100%
  );
  pointer-events: none;
`;

export const HeroContent = styled(Container)`
  position: relative;
  z-index: 10;
  padding: 40px 16px;
  width: 100%;

  @media (min-width: 768px) {
    padding: 40px 32px;
  }
`;

export const HeroTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 48px !important;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #ffffff;
  max-width: 672px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 32px !important;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 28px !important;
  }
`;

export const HeroSubtitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 16px !important;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
  max-width: 560px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 14px !important;
    max-width: 100%;
  }
`;

export const HeroButtons = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding-top: 8px;
`;

export const PrimaryButton = styled(Button)`
  background-color: #bcf0ae;
  color: #002201;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 12px 32px;
  border-radius: 8px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
  transition: background-color 0.2s;
  white-space: nowrap;

  &:hover {
    background-color: #a1d494;
  }

  @media (max-width: 480px) {
    padding: 10px 24px;
    font-size: 11px;
    white-space: normal;
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 12px 32px;
  border-radius: 8px;
  transition: background-color 0.2s;
  white-space: nowrap;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 480px) {
    padding: 10px 24px;
    font-size: 11px;
    white-space: normal;
  }
`;
