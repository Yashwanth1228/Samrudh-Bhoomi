import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const GalleryContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MainImageWrapper = styled(Box)`
  position: relative;
  background-color: #ffffff;
  border-radius: 12px;
  border: 1px solid #c2c9bb;
  padding: 16px;
  aspect-ratio: 4/3;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (min-width: 768px) {
    aspect-ratio: 4/3;
  }
`;

export const MainImage = styled("img")`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ZoomButton = styled(Button)`
  position: absolute;
  bottom: 16px;
  right: 16px;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(4px);
  color: #1a1c19;
  padding: 8px;
  border-radius: 50%;
  min-width: auto;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);

  &:hover {
    background-color: #ffffff;
  }

  & .MuiSvgIcon-root {
    font-size: 20px;
  }
`;

export const ThumbnailsContainer = styled(Box)`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 8px;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const ThumbnailButton = styled(Button)<{ active: boolean }>`
  flex-shrink: 0;
  width: 96px;
  height: 96px;
  background-color: #ffffff;
  border-radius: 8px;
  border: ${({ active }) =>
    active ? "2px solid #2d5a27" : "1px solid #c2c9bb"};
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: auto;

  &:hover {
    border-color: ${({ active }) =>
      active ? "#2d5a27" : "rgba(45, 90, 39, 0.5)"};
  }
`;

export const ThumbnailImage = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
