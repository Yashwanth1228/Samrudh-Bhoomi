import styled from "@emotion/styled";
import { Box, Paper } from "@mui/material";

export const DashboardContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const HeaderSection = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StatsGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled(Paper)`
  padding: 24px;
  border-radius: 16px;
  background: #fff;
  border: 1px solid #edf0f2;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  }
`;

export const ChartCard = styled(Paper)`
  padding: 24px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
`;

export const TableCard = styled(Paper)`
  padding: 24px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  color: #1a1c19;
`;

export const DoubleChartGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;