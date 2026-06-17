import styled from "@emotion/styled";
import { Box, Typography, Button, Container } from "@mui/material";

export const CTASectionContainer = styled(Box)`
  padding: 96px 16px;
  background-color: #154212;
  color: #ffffff;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0.1;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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
  color: #ffffff;
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
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 40px;
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

export const WhatsAppButton = styled(Button)`
  background-color: #25d366;
  color: #ffffff;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 16px 32px;
  border-radius: 8px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  gap: 12px;

  &:hover {
    background-color: #20b858;
  }

  & svg {
    width: 24px;
    height: 24px;
  }
`;

export const QuoteButton = styled(Button)`
  background-color: #fafaf4;
  color: #154212;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 16px 32px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  gap: 12px;

  &:hover {
    background-color: #ffffff;
  }
`;
