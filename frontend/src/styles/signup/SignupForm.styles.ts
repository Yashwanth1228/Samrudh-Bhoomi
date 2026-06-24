import styled from "@emotion/styled";
import { Box, Typography, TextField, Button, Alert, Link } from "@mui/material";

export const SignupContainer = styled(Box)`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    overflow-y: auto;
  }
`;

export const LeftSection = styled(Box)`
  display: none;
  position: relative;
  width: 50%;
  height: 100%;
  background-color: #154212;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  padding: 48px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const LeftContent = styled(Box)`
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 512px;
  color: #ffffff;
`;

export const BrandTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  margin-bottom: 8px;
  color: #ffffff;
`;

export const BrandSubtitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  opacity: 0.9;
  color: #ffffff;
`;

export const CommitmentTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: #ffffff;
  border-bottom: 1px solid rgba(188, 240, 174, 0.2);
  padding-bottom: 16px;
`;

export const CommitmentList = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CommitmentItem = styled(Box)`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

export const CommitmentIcon = styled(Box)`
  margin-top: 4px;
  color: #bcf0ae;

  & .MuiSvgIcon-root {
    font-size: 24px;
  }
`;

export const CommitmentText = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const CommitmentLabel = styled(Typography)`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  opacity: 0.8;
  color: #ffffff;
`;

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
    padding: 48px 96px;
  }
`;

export const FormContainer = styled(Box)`
  max-width: 448px;
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
  margin-top: 16px;
`;
