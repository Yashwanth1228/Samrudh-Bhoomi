import styled from "@emotion/styled";
import { Box, Typography, Paper } from "@mui/material";

export const WhySectionContainer = styled(Box)`
  padding: 96px 16px;
  background-color: #fafaf4;

  @media (min-width: 768px) {
    padding: 96px 32px;
  }
`;

export const SectionHeader = styled(Box)`
  text-align: center;
  max-width: 768px;
  margin: 0 auto 64px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SectionTitle = styled(Typography)`
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

export const SectionSubtitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #42493e;
`;

export const WhyGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const WhyCard = styled(Paper)`
  padding: 32px;
  background-color: #eeeee9;
  border-radius: 16px;
  border: 1px solid #e3e3de;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const WhyIconWrapper = styled(Box)`
  width: 64px;
  height: 64px;
  background-color: #2d5a27;
  color: #ffffff;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
`;

export const WhyTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  color: #1a1c19;
`;

export const WhyText = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #42493e;
`;
