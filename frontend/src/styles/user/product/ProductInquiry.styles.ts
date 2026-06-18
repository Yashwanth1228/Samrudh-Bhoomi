import styled from "@emotion/styled";
import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  TextareaAutosize,
} from "@mui/material";

export const InquirySection = styled(Box)`
  background-color: #f4f4ee;
  border: 1px solid #c2c9bb;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);

  @media (min-width: 768px) {
    padding: 32px;
  }
`;

export const InquiryTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #1a1c19;
  margin-bottom: 16px;
`;

export const InquiryForm = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormRow = styled(Grid)``;

export const FormField = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    background-color: #ffffff;
    border-radius: 8px;

    &:hover fieldset {
      border-color: #154212;
    }

    &.Mui-focused fieldset {
      border-color: #154212;
    }
  }

  & .MuiInputBase-input {
    padding: 8px 16px;
    font-family: "Inter", sans-serif;
    font-size: 14px;
  }
`;

export const StyledTextarea = styled(TextareaAutosize)`
  width: 100%;
  padding: 8px 16px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  background-color: #ffffff;
  border: 1px solid #c2c9bb;
  border-radius: 8px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #154212;
    border-width: 2px;
  }
`;

export const SubmitInquiryButton = styled(Button)`
  background-color: #2d5a27;
  color: #ffffff;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 12px 24px;
  border-radius: 8px;
  margin-top: 8px;
  width: 100%;

  &:hover {
    background-color: #154212;
    opacity: 0.9;
  }
`;
