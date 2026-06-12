// src/styles/admin/Contact.styles.ts
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {
  Box,
  Typography,
  TextField,
  Select,
  TableContainer,
  Table,
  IconButton,
  Chip,
  Button,
  Paper,
} from "@mui/material";

export const PageContainer = styled(Box)`
  min-height: 100vh;
  background-color: #eeeee9;
`;

export const MainContent = styled(Box)`
  // margin-left: 280px;
  // padding-top: 64px;
  min-height: 100vh;
  overflow-y: auto;
  height: 100vh;

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;

export const ContentWrapper = styled(Box)`
  max-width: 1440px;
  margin: 0 auto;
  padding: 24px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const PageHeader = styled(Box)`
  margin-bottom: 24px;
`;

export const PageTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  color: #1a1c19;
  margin-bottom: 4px;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const PageSubtitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #42493e;
`;

export const KPIGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-bottom: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const KPICard = styled(Paper)`
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid #c2c9bb;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const KPILabel = styled(Typography)`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #42493e;
  margin-bottom: 4px;
`;

export const KPIValue = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: #1a1c19;
`;

export const KPIValuePrimary = styled(KPIValue)`
  color: #154212;
  font-weight: 700;
`;

export const KPIValueTertiary = styled(KPIValue)`
  color: #735c00;
`;

export const KPIValueSecondary = styled(KPIValue)`
  color: #1a1c19;
`;

export const KPIIconWrapper = styled(Box)`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #eeeee9;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #154212;

  &.primary {
    background-color: rgba(45, 90, 39, 0.2);
    color: #154212;
  }

  &.tertiary {
    background-color: rgba(204, 167, 48, 0.2);
    color: #735c00;
  }

  & .MuiSvgIcon-root {
    font-size: 24px;
  }
`;

export const ActionBar = styled(Box)`
  background-color: #ffffff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border: 1px solid #c2c9bb;
  border-bottom: none;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const ActionBarLeft = styled(Box)`
  display: flex;
  gap: 8px;
  flex: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const ActionBarRight = styled(Box)`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SearchField = styled(TextField)`
  width: 320px;

  & .MuiOutlinedInput-root {
    background-color: #fafaf4;
    border-radius: 8px;

    &:hover fieldset {
      border-color: #154212;
    }

    &.Mui-focused fieldset {
      border-color: #154212;
      border-width: 1px;
    }
  }

  & .MuiInputBase-input {
    padding: 8px 12px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledSelect = styled(Select)`
  min-width: 140px;
  background-color: #fafaf4;
  border-radius: 8px;

  & .MuiOutlinedInput-notchedOutline {
    border-color: #c2c9bb;
  }

  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: #154212;
  }

  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #154212;
    border-width: 1px;
  }

  & .MuiSelect-select {
    padding: 8px 32px 8px 12px;
    font-size: 14px;
    color: #1a1c19;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TableWrapper = styled(TableContainer)`
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: 1px solid #c2c9bb;
  border-top: none;
  overflow-x: auto;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  & .MuiPaper-root {
    box-shadow: none;
    border: none;
  }
`;

export const StyledTable = styled(Table)`
  min-width: 1000px;

  & .MuiTableCell-head {
    background-color: #eeeee9;
    font-family: "IBM Plex Sans", sans-serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #42493e;
    padding: 12px 16px;
    border-bottom: 1px solid #c2c9bb;
  }

  & .MuiTableCell-body {
    padding: 12px 16px;
    font-size: 14px;
    border-bottom: 1px solid rgba(194, 201, 187, 0.5);
  }

  & .MuiTableRow-root {
    transition: background-color 0.2s;

    &:hover {
      background-color: rgba(227, 227, 222, 0.3);
    }

    &.striped {
      background-color: rgba(238, 238, 233, 0.3);
    }
  }
`;

export const InquiryId = styled(Typography)`
  font-weight: 500;
  color: #154212;
  font-size: 14px;
`;

export const ContactInfo = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ContactPhone = styled(Typography)`
  font-size: 14px;
  color: #1a1c19;
`;

export const ContactEmail = styled(Typography)`
  font-size: 12px;
  color: #42493e;
`;

export const StyledStatusChip = styled(Chip)`
  height: 24px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 9999px;
`;

export const ActionButtons = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
`;

export const ActionIconButton = styled(IconButton)`
  padding: 4px;
  color: #42493e;

  &:hover {
    background-color: #eeeee9;
    color: #154212;
  }

  & .MuiSvgIcon-root {
    font-size: 20px;
  }
`;

export const PaginationContainer = styled(Box)`
  padding: 16px;
  border-top: 1px solid #c2c9bb;
  background-color: #fafaf4;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const PaginationInfo = styled(Typography)`
  font-size: 14px;
  color: #42493e;
`;

export const PaginationButtons = styled(Box)`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const PaginationButton = styled(Button)`
  min-width: auto;
  padding: 4px 12px;
  font-size: 14px;
  text-transform: none;
  border: 1px solid #c2c9bb;
  border-radius: 4px;
  color: #42493e;
  background-color: transparent;

  &:hover {
    background-color: #eeeee9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const PaginationActiveButton = styled(Button)`
  min-width: auto;
  padding: 4px 12px;
  font-size: 14px;
  text-transform: none;
  background-color: #154212;
  color: #ffffff;
  border-radius: 4px;

  &:hover {
    background-color: #2d5a27;
  }
`;
