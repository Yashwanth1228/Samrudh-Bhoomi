import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const OverviewSectionContainer = styled(Box)`
  padding: 96px 16px;
  background-color: #fafaf4;

  @media (min-width: 768px) {
    padding: 96px 32px;
  }
`;

export const OverviewGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  max-width: 1440px;
  margin: 0 auto;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

export const OverviewImageWrapper = styled(Box)`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
  border: 1px solid rgba(194, 201, 187, 0.3);

  @media (max-width: 1024px) {
    order: 1;
  }
`;

export const OverviewImage = styled("img")`
  width: 100%;
  height: 500px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 350px;
  }
`;

export const ImageCaption = styled(Box)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 24px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, transparent 100%);

  & span {
    font-family: "IBM Plex Sans", sans-serif;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #ffffff;
  }
`;

export const OverviewContent = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1024px) {
    order: 2;
  }
`;

export const OverviewTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  color: #154212;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

export const OverviewDivider = styled(Box)`
  width: 64px;
  height: 4px;
  background-color: #2d5a27;
  border-radius: 9999px;
`;

export const OverviewText = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: #42493e;
`;

export const OverviewCardsGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 8px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const OverviewCard = styled(Box)`
  padding: 24px;
  border-radius: 8px;
  background-color: #eeeee9;
  border: 1px solid rgba(194, 201, 187, 0.5);
  transition: border-color 0.2s;

  &:hover {
    border-color: rgba(45, 90, 39, 0.5);
  }
`;

export const OverviewCardIcon = styled(Box)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #eeeee9;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  color: #154212;

  & .material-symbols-outlined {
    font-size: 24px;
  }
`;

export const OverviewCardTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  color: #1a1c19;
  margin-bottom: 8px;
`;

export const OverviewCardText = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #42493e;
`;
