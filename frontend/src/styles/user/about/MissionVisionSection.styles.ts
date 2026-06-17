import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const MissionSection = styled(Box)`
  padding: 96px 16px;
  background-color: #eeeee9;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 384px;
    height: 384px;
    background-color: rgba(45, 90, 39, 0.05);
    border-radius: 50%;
    filter: blur(64px);
    transform: translate(50%, -50%);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 500px;
    height: 500px;
    background-color: rgba(131, 84, 37, 0.05);
    border-radius: 50%;
    filter: blur(64px);
    transform: translate(-25%, 50%);
  }

  @media (min-width: 768px) {
    padding: 96px 32px;
  }
`;

export const MissionGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const MissionCard = styled(Box)`
  position: relative;
  padding: 48px;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition: transform 0.5s;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    padding: 32px;
  }
`;

export const MissionCardLeft = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background-color: #2d5a27;
`;

export const MissionIconWrapper = styled(Box)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: rgba(45, 90, 39, 0.1);
  margin-bottom: 24px;

  & .material-symbols-outlined {
    font-size: 28px;
    color: #154212;
  }

  & .fill {
    font-variation-settings: "FILL" 1;
  }
`;

export const MissionTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  color: #1a1c19;
  margin-bottom: 16px;
`;

export const MissionText = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: #42493e;
`;

export const VisionCard = styled(Box)`
  position: relative;
  padding: 48px;
  border-radius: 16px;
  background-color: #2d5a27;
  color: #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  transition: transform 0.5s;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0.1;
    background-image: radial-gradient(
      circle at 2px 2px,
      white 1px,
      transparent 0
    );
    background-size: 24px 24px;
  }

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    padding: 32px;
  }
`;

export const VisionIconWrapper = styled(Box)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  margin-bottom: 24px;

  & .material-symbols-outlined {
    font-size: 28px;
    color: #ffffff;
  }

  & .fill {
    font-variation-settings: "FILL" 1;
  }
`;

export const VisionTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  color: #ffffff;
  margin-bottom: 16px;
`;

export const VisionText = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: #bcf0ae;
`;
