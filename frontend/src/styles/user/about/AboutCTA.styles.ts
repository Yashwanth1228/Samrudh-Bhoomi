import styled from "@emotion/styled";
import { Box, Typography, Button, Container } from "@mui/material";

export const CTASection = styled(Box)`
  padding: 128px 16px;
  background-color: #fafaf4;
  border-top: 1px solid rgba(194, 201, 187, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(to right, #c2c9bb 1px, transparent 1px),
      linear-gradient(to bottom, #c2c9bb 1px, transparent 1px);
    background-size: 64px 64px;
    opacity: 0.1;
    pointer-events: none;
  }

  @media (min-width: 768px) {
    padding: 128px 32px;
  }
`;

export const CTAContent = styled(Container)`
  position: relative;
  z-index: 10;
  text-align: center;
`;

export const CTATitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: -0.02em;
  color: #1a1c19;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const CTASubtitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: #42493e;
  margin-bottom: 40px;
  max-width: 672px;
  margin-left: auto;
  margin-right: auto;
`;

export const CTAButtons = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const CTAPrimaryButton = styled(Button)`
  background-color: #2d5a27;
  color: #ffffff;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 12px 32px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  width: 100%;

  &:hover {
    background-color: #154212;
  }

  @media (min-width: 640px) {
    width: auto;
  }
`;

export const CTASecondaryButton = styled(Button)`
  background-color: transparent;
  color: #1a1c19;
  border: 1px solid #72796e;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 12px 32px;
  border-radius: 8px;
  width: 100%;

  &:hover {
    background-color: #eeeee9;
  }

  @media (min-width: 640px) {
    width: auto;
  }
`;
