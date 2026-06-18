import styled from "@emotion/styled";
import { Box, Typography, Paper, Link } from "@mui/material";

export const DocumentsSection = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const DocumentsTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #1a1c19;
  display: flex;
  align-items: center;
`;

export const DocumentsCard = styled(Paper)`
  background-color: #ffffff;
  border: 1px solid #c2c9bb;
  border-radius: 12px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  padding: 8px;
`;

export const DocumentItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f4f4ee;
  }
`;

export const DocumentIcon = styled(Box)<{ color: string }>`
  color: ${({ color }) => color};
  margin-right: 16px;

  & .MuiSvgIcon-root {
    font-size: 28px;
  }
`;

export const DocumentInfo = styled(Box)`
  flex: 1;
`;

export const DocumentName = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #1a1c19;

  ${DocumentItem}:hover & {
    color: #154212;
  }
`;

export const DocumentSize = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #42493e;
`;

export const DocumentDownload = styled(Box)`
  color: #42493e;

  ${DocumentItem}:hover & {
    color: #154212;
  }

  & .MuiSvgIcon-root {
    font-size: 24px;
  }
`;

export const Divider = styled(Box)`
  height: 1px;
  background-color: #c2c9bb;
  margin: 0 16px;
`;
