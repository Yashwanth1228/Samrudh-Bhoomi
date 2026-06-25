import styled from "@emotion/styled";
import { Box, Typography, TextField, Button, Alert, Link } from "@mui/material";

export const RightSection = styled(Box)`
  width: 100%;
  height: 100%;
  background-color: #fafaf4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 48px 24px;
  overflow-y: auto;

  @media (min-width: 768px) {
    width: 50%;
    padding: 48px 48px;
  }
`;

export const FormContainer = styled(Box)`
  padding-top: 40px;
  max-width: 560px; /* Increased from 448px to 560px */
  width: 100%;
  margin: 0 auto;
`;

export const FormHeader = styled(Box)`
  margin-bottom: 40px;
`;

export const FormTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  color: #154212;
  margin-bottom: 8px;
`;

export const FormSubtitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #42493e;
`;

export const StyledForm = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FormField = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
      border-width: 2px;
    }
  }

  & .MuiInputBase-input {
    height: 48px;
    padding: 0 16px;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    box-sizing: border-box;
  }
`;

export const PasswordStrengthBar = styled(Box)`
  display: flex;
  gap: 4px;
  height: 6px;
  border-radius: 9999px;
  overflow: hidden;
  background-color: #e3e3de;
  margin-top: 8px;
`;

export const StrengthText = styled(Typography)<{ color: string }>`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  margin-top: 4px;
  display: block;
  color: ${({ color }) => color};
`;

export const SubmitButton = styled(Button)`
  background-color: #2d5a27;
  color: #ffffff;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 56px;

  &:hover {
    background-color: #154212;
  }

  &:disabled {
    opacity: 0.8;
  }
`;

export const SuccessAlert = styled(Alert)`
  background-color: #bcf0ae;
  color: #002201;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;

  & .MuiAlert-icon {
    color: #002201;
  }
`;

export const SecondaryAction = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #42493e;
  text-align: center;
  // margin-top: 5px;
`;
