import styled from "@emotion/styled";
import { Box, Typography, Button, Container } from "@mui/material";

export const CTASection = styled(Box)`
  padding: 96px 16px;
  background-color: #fafaf4;
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(194, 201, 187, 0.3);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0.03;
    background-image: radial-gradient(
      circle at 2px 2px,
      #1a1c19 1px,
      transparent 0
    );
    background-size: 32px 32px;
    pointer-events: none;
  }

  @media (min-width: 768px) {
    padding: 96px 32px;
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
  text-align: center;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const CTASubtitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #42493e;
  margin-bottom: 40px;
  max-width: 672px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  text-align: center;
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
  padding: 16px 32px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  width: 100%;

  & .material-symbols-outlined {
    font-size: 20px;
  }

  &:hover {
    background-color: #154212;
  }

  @media (min-width: 640px) {
    width: auto;
  }
`;

export const CTASecondaryButton = styled(Button)`
  background-color: #ffffff;
  color: #25d366;
  border: 2px solid #25d366;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 16px 32px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  width: 100%;

  & .material-symbols-outlined {
    font-size: 20px;
  }

  &:hover {
    background-color: rgba(37, 211, 102, 0.05);
  }

  @media (min-width: 640px) {
    width: auto;
  }
`;
