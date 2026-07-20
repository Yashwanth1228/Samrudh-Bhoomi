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
  gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const StatsGridSecondary = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const StatCard = styled(Paper)`
  padding: 24px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
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

export const DoubleChartGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 24,
  marginTop: 24,

  "@media (max-width:900px)": {
    gridTemplateColumns: "1fr",
  },
});

