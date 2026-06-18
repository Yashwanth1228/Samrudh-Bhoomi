import styled from "@emotion/styled";
import { Box, Typography, Paper, Grid, Tab, Tabs } from "@mui/material";

export const TabsSection = styled(Box)`
  background-color: #ffffff;
  border-radius: 12px;
  border: 1px solid #c2c9bb;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  overflow: hidden;
`;

export const TabsContainer = styled(Box)``;

export const StyledTabs = styled(Tabs)`
  border-bottom: 1px solid #c2c9bb;
  background-color: #fafaf4;

  & .MuiTabs-indicator {
    background-color: #2d5a27;
  }
`;

export const StyledTab = styled(Tab)`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 16px 24px;
  min-height: auto;

  &.Mui-selected {
    color: #154212;
  }
`;

export const TabContent = styled(Box)<{ value: number; index: number }>`
  padding: 24px 32px;
  display: ${({ value, index }) => (value === index ? "block" : "none")};

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const BenefitsGrid = styled(Grid)``;

export const BenefitCard = styled(Paper)`
  padding: 24px;
  background-color: #f4f4ee;
  border-radius: 8px;
  border: 1px solid rgba(194, 201, 187, 0.5);
  height: 100%;
`;

export const BenefitIcon = styled(Box)`
  color: #2d5a27;
  margin-bottom: 16px;

  & .MuiSvgIcon-root {
    font-size: 32px;
  }
`;

export const BenefitTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  color: #1a1c19;
  margin-bottom: 8px;
`;

export const BenefitText = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #42493e;
`;

export const SpecTable = styled(Box)`
  border: 1px solid #c2c9bb;
  border-radius: 8px;
  overflow: hidden;
`;

export const SpecTableRow = styled(Box)<{ even: boolean }>`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 12px 16px;
  background-color: ${({ even }) => (even ? "#f4f4ee" : "#ffffff")};
  border-bottom: 1px solid #c2c9bb;

  &:last-child {
    border-bottom: none;
  }
`;

export const SpecLabel = styled(Typography)`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: #42493e;
`;

export const SpecValue = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #1a1c19;
`;

export const UsageList = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-left: 20px;
`;

export const UsageItem = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #42493e;
  list-style-type: disc;

  &::marker {
    color: #2d5a27;
  }
`;
