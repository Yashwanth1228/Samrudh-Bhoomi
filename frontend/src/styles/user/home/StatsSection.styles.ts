import styled from "@emotion/styled";
import { Box, Typography, Paper } from "@mui/material";

export const StatsSectionContainer = styled(Box)`
  padding: 48px 16px;
  background-color: #ffffff;
  border-bottom: 1px solid #e3e3de;
  position: relative;
  z-index: 20;

  @media (min-width: 768px) {
    padding: 48px 32px;
  }
`;

export const StatsGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px 16px;
  border-radius: 8px;
  background-color: transparent;
  box-shadow: none;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    padding: 16px;
  }

  &:hover {
    background-color: #f4f4ee;
  }
`;

export const StatIconWrapper = styled(Box)`
  width: 56px;
  height: 56px;
  background-color: rgba(45, 90, 39, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2d5a27;
  flex-shrink: 0;

  & .MuiSvgIcon-root {
    font-size: 28px;
  }
`;

export const StatValue = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  color: #154212;
`;

export const StatLabel = styled(Typography)`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: #42493e;
  margin-top: 4px;
`;
