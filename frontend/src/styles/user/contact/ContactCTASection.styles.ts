import styled from "@emotion/styled";
import { Box, Typography, Button, Container } from "@mui/material";

export const CTASection = styled(Box)`
  padding: 64px 16px;
  background-color: #eeeee9;

  @media (min-width: 768px) {
    padding: 96px 32px;
  }
`;

export const CTAContent = styled(Container)`
  text-align: center;
`;

export const CTATitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  color: #1a1c19;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

export const CTASubtitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #42493e;
  max-width: 672px;
  margin: 0 auto 32px;
  line-height: 1.6;
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
  width: 100%;

  &:hover {
    background-color: #154212;
  }

  @media (min-width: 640px) {
    width: auto;
  }
`;

export const CTASecondaryButton = styled(Button)`
  background-color: #fafaf4;
  color: #154212;
  border: 1px solid #154212;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 12px 32px;
  border-radius: 8px;
  width: 100%;

  &:hover {
    background-color: #e3e3de;
  }

  @media (min-width: 640px) {
    width: auto;
  }
`;
