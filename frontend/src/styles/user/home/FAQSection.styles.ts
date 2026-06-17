import styled from "@emotion/styled";
import { Box, Typography, Paper } from "@mui/material";

export const FAQSectionContainer = styled(Box)`
  padding: 96px 16px;
  background-color: #eeeee9;

  @media (min-width: 768px) {
    padding: 96px 32px;
  }
`;

export const FAQTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: -0.02em;
  color: #154212;
  text-align: center;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const FAQSubtitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #42493e;
  text-align: center;
  margin-bottom: 64px;
`;

export const FAQList = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FAQItem = styled(Paper)`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  border: 1px solid #e3e3de;
  overflow: hidden;
`;

export const FAQSummary = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  color: #1a1c19;

  &:hover {
    background-color: #f4f4ee;
  }
`;

export const FAQAnswer = styled(Box)<{ expanded: string }>`
  padding: ${({ expanded }) =>
    expanded === "true" ? "0 24px 24px 24px" : "0 24px"};
  max-height: ${({ expanded }) => (expanded === "true" ? "200px" : "0")};
  overflow: hidden;
  transition: all 0.3s ease;
  border-top: ${({ expanded }) =>
    expanded === "true" ? "1px solid #e3e3de" : "none"};
  margin-top: ${({ expanded }) => (expanded === "true" ? "8px" : "0")};

  & .MuiTypography-root {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #42493e;
  }
`;
