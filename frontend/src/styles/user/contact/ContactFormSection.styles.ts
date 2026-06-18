import styled from "@emotion/styled";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Select,
  Button,
  TextareaAutosize,
} from "@mui/material";

export const ContentSection = styled(Box)`
  padding: 48px 16px;

  @media (min-width: 768px) {
    padding: 80px 32px;
  }
`;

export const ContactGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  max-width: 1440px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    grid-template-columns: 5fr 7fr;
    gap: 24px;
  }
`;

export const ContactInfoColumn = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ContactInfoTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  color: #1a1c19;
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const ContactInfoCards = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactCard = styled("a")`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px;
  background-color: #ffffff;
  border: 1px solid #c2c9bb;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  transition: border-color 0.2s;

  &:hover {
    border-color: #154212;
  }
`;

export const ContactCardIcon = styled(Box)`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #eeeee9;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #154212;
  flex-shrink: 0;

  & .MuiSvgIcon-root {
    font-size: 24px;
  }
`;

export const ContactCardContent = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const ContactCardTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  color: #1a1c19;
`;

export const ContactCardText = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #42493e;
`;

export const FormColumn = styled(Box)`
  height: 100%;
`;

export const FormCard = styled(Paper)`
  padding: 24px;
  background-color: #ffffff;
  border: 1px solid #c2c9bb;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  height: 100%;

  @media (min-width: 768px) {
    padding: 32px;
  }
`;

export const FormTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: #1a1c19;
  margin-bottom: 24px;
`;

export const StyledForm = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FormRow = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const FormField = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & label {
    font-family: "IBM Plex Sans", sans-serif;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #42493e;
  }
`;

export const StyledTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    background-color: #fafaf4;
    border-radius: 4px;

    &:hover fieldset {
      border-color: #154212;
    }

    &.Mui-focused fieldset {
      border-color: #154212;
      border-width: 2px;
    }
  }

  & .MuiInputBase-input {
    padding: 12px 16px;
    font-size: 16px;
    font-family: "Inter", sans-serif;
  }
`;

export const StyledSelect = styled(Select)`
  background-color: #fafaf4;
  border-radius: 4px;

  & .MuiOutlinedInput-notchedOutline {
    border-color: #c2c9bb;
  }

  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: #154212;
  }

  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #154212;
    border-width: 2px;
  }

  & .MuiSelect-select {
    padding: 12px 16px;
    font-size: 16px;
    font-family: "Inter", sans-serif;
  }
`;

export const StyledTextarea = styled(TextareaAutosize)`
  width: 100%;
  padding: 12px 16px;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  background-color: #fafaf4;
  border: 1px solid #c2c9bb;
  border-radius: 4px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #154212;
    border-width: 2px;
  }
`;
export const FormActions = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 16px;
  border-top: 1px solid #c2c9bb;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const SubmitButton = styled(Button)`
  background-color: #2d5a27;
  color: #ffffff;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 12px 32px;
  border-radius: 8px;
  width: 100%;

  &:hover {
    background-color: #154212;
  }

  @media (min-width: 640px) {
    width: auto;
  }
`;

export const ResetButton = styled(Button)`
  color: #42493e;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 12px 32px;
  border-radius: 8px;
  width: 100%;

  &:hover {
    background-color: #eeeee9;
  }

  @media (min-width: 640px) {
    width: auto;
  }
`;
