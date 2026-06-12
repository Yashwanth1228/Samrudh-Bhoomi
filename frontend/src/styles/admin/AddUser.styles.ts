// src/styles/admin/AddUser.styles.ts
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Select,
  Breadcrumbs,
  Link,
  Paper,
} from "@mui/material";

export const PageContainer = styled(Box)`
  min-height: 100vh;
  background-color: #fafaf4;
`;

export const MainContent = styled(Box)`
  // margin-left: 280px;
  // padding-top: 50px;
  min-height: 100vh;

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;

export const ContentWrapper = styled(Box)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const PageHeader = styled(Box)`
  margin-bottom: 32px;
`;

export const BreadcrumbNav = styled(Box)`
  margin-bottom: 8px;
`;

export const StyledBreadcrumbs = styled(Breadcrumbs)`
  & .MuiBreadcrumbs-separator {
    margin: 0 8px;
  }
`;

export const BreadcrumbLink = styled(Link)`
  font-size: 12px;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: #42493e;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #154212;
    text-decoration: underline;
  }
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

export const FormGrid = styled(Box)`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const MainFormColumn = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SidebarColumn = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FormCard = styled(Paper)`
  background-color: #ffffff;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  border: 1px solid #e0e6df;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const CardHeader = styled(Box)`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
`;

export const CardIconWrapper = styled(Box)`
  width: 32px;
  height: 32px;
  background-color: rgba(45, 90, 39, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #154212;
`;

export const CardTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  color: #1a1c19;
`;

export const TwoColumnGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const FormLabelStyled = styled.label`
  display: block;
  margin-bottom: 6px;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: #42493e;
`;

export const StyledTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    border-radius: 8px;
    background-color: #ffffff;

    &:hover fieldset {
      border-color: #2d5a27;
    }

    &.Mui-focused fieldset {
      border-color: #2d5a27;
      border-width: 2px;
    }
  }

  & .MuiInputBase-input {
    padding: 10px 14px;
    font-size: 14px;
    font-family: "Inter", sans-serif;
  }
`;

export const StyledSelect = styled(Select)`
  border-radius: 8px;
  background-color: #ffffff;

  & .MuiOutlinedInput-notchedOutline {
    border-color: #c2c9bb;
  }

  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: #2d5a27;
  }

  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #2d5a27;
    border-width: 2px;
  }

  & .MuiSelect-select {
    padding: 10px 14px;
    font-size: 14px;
    font-family: "Inter", sans-serif;
  }
`;

export const HelperText = styled(Typography)<{ error?: boolean }>`
  font-size: 11px;
  margin-top: 4px;
  color: ${({ error }) => (error ? "#ba1a1a" : "#72796e")};
`;

export const ProfileCard = styled(FormCard)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImageWrapper = styled(Box)`
  position: relative;
  margin-bottom: 24px;
`;

export const ProfileImage = styled(Box)`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  background-color: #eeeee9;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 2px dashed #c2c9bb;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #154212;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProfileImagePlaceholder = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EditIconButton = styled(IconButton)`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #154212;
  color: white;
  padding: 8px;

  &:hover {
    background-color: #2d5a27;
  }
`;

// Note: Need to import IconButton from MUI
import { IconButton } from "@mui/material";

export const FileInput = styled.input`
  display: none;
`;

export const UploadText = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #1a1c19;
  margin-bottom: 4px;
`;

export const UploadSubtext = styled(Typography)`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: #42493e;
`;

export const InfoCard = styled(Box)`
  background-color: rgba(45, 90, 39, 0.05);
  padding: 24px;
  border-radius: 8px;
  border: 1px solid rgba(21, 66, 18, 0.1);
  display: flex;
  gap: 12px;
`;

export const InfoIconWrapper = styled(Box)`
  margin-top: 2px;
`;

export const InfoCardTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #154212;
  margin-bottom: 4px;
`;

export const InfoCardText = styled(Typography)`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: #42493e;
  line-height: 1.4;
`;

export const ActionButtons = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SubmitButton = styled(Button)`
  background-color: #2d5a27;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  text-transform: none;

  &:hover {
    background-color: #23501e;
    opacity: 0.9;
  }
`;

export const CancelButton = styled(Button)`
  border: 1px solid #2d5a27;
  color: #2d5a27;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  text-transform: none;
  background-color: transparent;

  &:hover {
    background-color: rgba(45, 90, 39, 0.05);
  }
`;
