import styled from "@emotion/styled";
import { Box, Typography, Button } from "@mui/material";

export const AboutSectionContainer = styled(Box)`
  padding: 96px 16px;
  background-color: #fafaf4;

  @media (min-width: 768px) {
    padding: 96px 32px;
  }
`;

export const AboutGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const AboutImageWrapper = styled(Box)`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: -16px;
    background-color: rgba(188, 240, 174, 0.2);
    border-radius: 16px;
    transform: skewY(-3deg);
    z-index: 0;
  }
`;

export const AboutImage = styled("img")`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 16px;
  position: relative;
  z-index: 10;
  border: 4px solid #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    height: 300px;
  }
`;

export const AboutContent = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const AboutBadge = styled(Box)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px;
  border-radius: 9999px;
  background-color: rgba(45, 90, 39, 0.1);
  color: #2d5a27;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  width: fit-content;
`;

export const AboutTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: -0.02em;
  color: #154212;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const AboutText = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: #42493e;
`;

export const AboutButton = styled(Button)`
  border: 2px solid #2d5a27;
  color: #2d5a27;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 12px 32px;
  border-radius: 8px;
  width: fit-content;

  &:hover {
    background-color: #2d5a27;
    color: #ffffff;
  }
`;
