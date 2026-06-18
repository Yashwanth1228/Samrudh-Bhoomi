import styled from "@emotion/styled";
import { Box, Typography, Chip, Button } from "@mui/material";

export const InfoContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const CategoryChip = styled(Chip)`
  background-color: #ffe088;
  color: #241a00;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  width: fit-content;
`;

export const ProductName = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: #1a1c19;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const ProductPrice = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #2d5a27;
`;

export const DiscountPrice = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #42493e;
  text-decoration: line-through;
`;

export const ProductDescription = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #42493e;
  line-height: 1.6;
`;

export const Divider = styled(Box)`
  height: 1px;
  background-color: #c2c9bb;
  width: 100%;
  margin: 8px 0;
`;

export const ActionsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SendInquiryButton = styled(Button)`
  background-color: #2d5a27;
  color: #ffffff;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 16px 24px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  width: 100%;

  &:hover {
    background-color: #154212;
    opacity: 0.9;
  }
`;

export const ActionButtonsGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export const WhatsAppButton = styled(Button)`
  background-color: rgba(37, 211, 102, 0.1);
  color: #075e54;
  border: 1px solid rgba(37, 211, 102, 0.3);
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 12px 16px;
  border-radius: 8px;

  &:hover {
    background-color: rgba(37, 211, 102, 0.2);
  }

  & svg {
    width: 20px;
    height: 20px;
  }
`;

export const BrochureButton = styled(Button)`
  border: 1px solid #154212;
  color: #154212;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 12px 16px;
  border-radius: 8px;

  &:hover {
    background-color: #f4f4ee;
  }
`;

export const FeaturesList = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 8px;
`;

export const FeatureItem = styled(Box)`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

export const FeatureIcon = styled(Box)`
  color: #2d5a27;
  margin-top: 2px;

  & .MuiSvgIcon-root {
    font-size: 20px;
  }
`;

export const FeatureText = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #42493e;
`;
