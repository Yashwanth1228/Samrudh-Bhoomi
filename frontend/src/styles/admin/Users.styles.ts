// src/styles/admin/Users.styles.ts
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {
  Box,
  Typography,
  TextField,
  Select,
  Button,
  TableContainer,
  Table,
  IconButton,
  Chip,
  Paper,
} from "@mui/material";

export const PageContainer = styled(Box)`
  min-height: 100vh;
  // background-color: #fafaf4;
`;

export const MainContent = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    padding: 16px;
    gap: 16px;
  }
`;

export const PageHeader = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const PageTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  color: #1a1c19;

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
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const KPICard = styled(Paper)`
  padding: 24px;
  background-color: #ffffff;
  border: 1px solid #c2c9bb;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const KPILabel = styled(Typography)`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #42493e;
`;

export const KPIValue = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: -0.02em;
  color: #1a1c19;
`;

export const KPIPrimaryValue = styled(KPIValue)`
  color: #154212;
`;

export const KPIErrorValue = styled(KPIValue)`
  color: #ba1a1a;
`;

export const KPISecondaryValue = styled(KPIValue)`
  color: #835425;
`;

export const ActionBar = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background-color: #ffffff;
  border: 1px solid #c2c9bb;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const ActionBarLeft = styled(Box)`
  display: flex;
  align-items: center;
  gap: 16px;
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
  flex: 1;
  max-width: 256px;

  & .MuiOutlinedInput-root {
    background-color: #fafaf4;
    border-radius: 8px;

    &:hover fieldset {
      border-color: #3b6934;
    }

    &.Mui-focused fieldset {
      border-color: #3b6934;
      border-width: 1px;
    }
  }

  & .MuiInputBase-input {
    padding: 8px 12px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    max-width: none;
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
    border-color: #3b6934;
  }

  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #3b6934;
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

export const AddUserButton = styled(Button)`
  background-color: #2d5a27;
  color: #ffffff;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 8px 24px;
  border-radius: 8px;

  &:hover {
    background-color: #23501e;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TableWrapper = styled(TableContainer)`
  border: 1px solid #c2c9bb;
  border-radius: 8px;
  overflow-x: auto;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  & .MuiPaper-root {
    box-shadow: none;
    border: none;
  }
`;

export const StyledTable = styled(Table)`
  min-width: 800px;
  background-color: #ffffff;

  // & .MuiTableCell-head {
  //   background-color: #eeeee9;
  //   font-family: "IBM Plex Sans", sans-serif;
  //   font-size: 12px;
  //   font-weight: bold;
  //   line-height: 16px;
  //   letter-spacing: 0.05em;
  //   text-transform: uppercase;
  //   color: #42493e;
  //   padding: 16px 24px;
  //   border-bottom: 1px solid #c2c9bb;
  // }

  & .MuiTableCell-head {
    background-color: #eeeee9;
    font-family: "IBM Plex Sans", sans-serif;
    text-transform: uppercase;
    

  }

  // & .MuiTableCell-body {
  //   padding: 12px 24px;
  //   border-bottom: 1px solid #c2c9bb;
  // }

  & .MuiTableRow-root {
    transition: background-color 0.2s;

    &:hover {
      background-color: #f5f5f0;
    }
  }
`;

export const UserCell = styled(Box)`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserAvatar = styled(Box)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #c2c9bb;
  background-color: #e3e3de;
  flex-shrink: 0;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & .initials {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    color: #42493e;
    font-size: 14px;
  }
`;

export const UserInfo = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const UserName = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #1a1c19;
`;

export const UserID = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #42493e;
`;

export const ContactInfo = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ContactEmail = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #1a1c19;
`;

export const ContactPhone = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #42493e;
`;

export const StyledSelectCell = styled(Select)`
  background-color: #fafaf4;
  border-radius: 4px;

  & .MuiOutlinedInput-notchedOutline {
    border-color: #c2c9bb;
  }

  & .MuiSelect-select {
    padding: 4px 24px 4px 8px;
    font-size: 14px;
    color: #1a1c19;
  }
`;

export const StatusChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "statusColor",
})<{ statusColor: "active" | "inactive" }>`
  height: 24px;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;

  ${({ statusColor }) =>
    statusColor === "active" &&
    css`
      background-color: #bcf0ae;
      color: #002201;
    `}

  ${({ statusColor }) =>
    statusColor === "inactive" &&
    css`
      background-color: #ffdad6;
      color: #93000a;
    `}
`;

export const ActionButtons = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  opacity: 0;
  transition: opacity 0.2s;

  .MuiTableRow-root:hover & {
    opacity: 1;
  }
`;

export const ActionIconButton = styled(IconButton)`
  padding: 6px;
  color: #42493e;

  &:hover {
    background-color: #e3e3de;
    color: #154212;
  }

  & .MuiSvgIcon-root {
    font-size: 20px;
  }
`;
