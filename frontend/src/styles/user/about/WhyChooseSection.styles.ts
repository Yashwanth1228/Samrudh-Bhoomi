import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const WhySection = styled(Box)`
  padding: 96px 16px;
  background-color: #fafaf4;

  @media (min-width: 768px) {
    padding: 96px 32px;
  }
`;

export const WhyHeader = styled(Box)`
  margin-bottom: 48px;
`;

export const WhyTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  color: #154212;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

export const WhySubtitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #42493e;
`;

export const WhyGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  max-width: 1440px;
  margin: 0 auto;
  auto-rows: minmax(180px, auto);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const WhyCard = styled(Box)`
  background-color: #ffffff;
  border-radius: 12px;
  border: 1px solid rgba(194, 201, 187, 0.4);
  padding: 24px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: border-color 0.2s;

  &:hover {
    border-color: rgba(45, 90, 39, 0.5);
  }
`;

export const WhyCardIcon = styled(Box)`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;

  & .material-symbols-outlined {
    font-size: 28px;
  }

  &.primary {
    color: #2d5a27;
  }

  &.secondary {
    color: #835425;
  }

  &.tertiary {
    color: #735c00;
  }
`;

export const WhyCardTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  color: #1a1c19;
  margin-bottom: 8px;
`;

export const WhyCardText = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #42493e;
`;

export const WhyHighlight = styled(Box)`
  grid-column: span 4;
  background-color: #154212;
  color: #ffffff;
  border-radius: 12px;
  padding: 32px 40px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 33.33%;
    background: linear-gradient(to left, rgba(255, 255, 255, 0.1), transparent);
  }

  @media (max-width: 1024px) {
    grid-column: span 2;
  }

  @media (max-width: 600px) {
    grid-column: span 1;
    padding: 24px;
  }
`;

export const WhyHighlightContent = styled(Box)`
  position: relative;
  z-index: 10;
  max-width: 600px;
`;

export const WhyHighlightTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;

  & .material-symbols-outlined {
    font-size: 28px;
    color: #bcf0ae;
  }
`;

export const WhyHighlightText = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #bcf0ae;
`;
