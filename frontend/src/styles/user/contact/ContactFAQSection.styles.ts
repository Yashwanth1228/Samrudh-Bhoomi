import styled from "@emotion/styled";
import { Box, Typography, Paper } from "@mui/material";

export const FAQSection = styled(Box)`
  padding: 48px 16px 80px;

  @media (min-width: 768px) {
    padding: 80px 32px 80px;
  }
`;

export const FAQContainer = styled(Box)`
  max-width: 768px;
  margin: 0 auto;
`;

export const FAQTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  color: #1a1c19;
  text-align: center;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

export const FAQList = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FAQItem = styled(Paper)`
  background-color: #ffffff;
  border: 1px solid #c2c9bb;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  overflow: hidden;
`;

export const FAQSummary = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f4f4ee;
  }
`;

export const FAQSummaryText = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  color: #1a1c19;
`;

export const FAQIcon = styled(Box)<{ expanded: boolean }>`
  transition: transform 0.3s;
  transform: ${({ expanded }) =>
    expanded ? "rotate(180deg)" : "rotate(0deg)"};
  color: #42493e;

  & .MuiSvgIcon-root {
    font-size: 24px;
  }
`;

export const FAQAnswer = styled(Box)<{ expanded: string }>`
  padding: ${({ expanded }) =>
    expanded === "true" ? "0 24px 24px 24px" : "0 24px"};
  max-height: ${({ expanded }) => (expanded === "true" ? "200px" : "0")};
  overflow: hidden;
  transition: all 0.3s ease;
  border-top: ${({ expanded }) =>
    expanded === "true" ? "1px solid #c2c9bb" : "none"};
  margin-top: ${({ expanded }) => (expanded === "true" ? "8px" : "0")};

  & .MuiTypography-root {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #42493e;
    line-height: 1.6;
  }
`;
