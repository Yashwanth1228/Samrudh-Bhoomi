import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";

export const PageContainer = styled(Box)`
  min-height: 100vh;
  background-color: #fafaf4;
  display: flex;
  flex-direction: column;
`;

export const MainContainer = styled(Container)`
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 768px) {
    padding: 32px 32px;
  }
`;
