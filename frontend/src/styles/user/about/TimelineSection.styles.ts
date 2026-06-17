import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const TimelineSectionContainer = styled(Box)`
  padding: 96px 16px;
  background-color: #fafaf4;

  @media (min-width: 768px) {
    padding: 96px 32px;
  }
`;

export const TimelineContainer = styled(Box)`
  max-width: 1440px;
  margin: 0 auto;
`;

export const TimelineHeader = styled(Box)`
  text-align: center;
  max-width: 768px;
  margin: 0 auto 64px;
`;

export const TimelineTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  color: #154212;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

export const TimelineSubtitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #42493e;
`;

export const TimelineWrapper = styled(Box)`
  position: relative;
  padding: 20px 0;

  @media (max-width: 767px) {
    padding-left: 30px;
  }
`;

export const TimelineLine = styled(Box)`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: rgba(194, 201, 187, 0.5);
  transform: translateX(-50%);

  @media (max-width: 767px) {
    left: 16px;
    transform: none;
  }
`;

export const TimelineItem = styled(Box)<{ side: string }>`
  display: flex;
  align-items: flex-start;
  margin-bottom: 48px;
  position: relative;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 20px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const TimelineDot = styled(Box)<{ isFuture: boolean }>`
  position: absolute;
  left: 50%;
  top: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ isFuture }) => (isFuture ? "#2d5a27" : "#fafaf4")};
  border: 2px solid ${({ isFuture }) => (isFuture ? "#2d5a27" : "#2d5a27")};
  color: ${({ isFuture }) => (isFuture ? "#ffffff" : "#2d5a27")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 10px;
  font-weight: 700;
  z-index: 2;
  box-shadow: ${({ isFuture }) =>
    isFuture ? "0 0 0 4px rgba(45, 90, 39, 0.2)" : "0 2px 4px rgba(0,0,0,0.1)"};
  transform: translateX(-50%);

  @media (max-width: 767px) {
    left: -4px;
    width: 32px;
    height: 32px;
    transform: none;
  }

  & .material-symbols-outlined {
    font-size: 16px;
  }

  & span {
    font-size: 10px;
    font-weight: 700;
  }

  &:hover {
    transition:
      transform 0.3s,
      background-color 0.3s,
      color 0.3s;
    background-color: #154212;
    color: #ffffff;
  }
`;

export const TimelineContent = styled(Box)<{ side: string }>`
  width: 42%;
  padding: 0 20px;

  @media (max-width: 767px) {
    width: 100%;
    padding: 0 0 0 20px;
    margin-top: 8px;
  }

  ${({ side }) =>
    side === "right"
      ? `
    margin-left: auto;
    text-align: left;
    
    @media (max-width: 767px) {
      margin-left: 0;
      text-align: left;
    }
  `
      : `
    margin-right: auto;
    text-align: right;
    
    @media (max-width: 767px) {
      margin-right: 0;
      text-align: left;
    }
  `}
`;

export const TimelineYear = styled(Typography)`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: #2d5a27;
  margin-bottom: 4px;
  display: block;
`;

export const TimelineEventTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  color: #154212;
  margin-bottom: 8px;
`;

export const TimelineEventDesc = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #42493e;
  line-height: 1.6;
`;
