import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const GallerySectionContainer = styled(Box)`
  padding: 96px 16px;
  background-color: #eeeee9;

  @media (min-width: 768px) {
    padding: 96px 32px;
  }
`;

export const GalleryTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  color: #154212;
  text-align: center;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

export const GalleryGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const GalleryImageWrapper = styled(Box)`
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  aspect-ratio: 1/1;

  &.large {
    grid-column: span 1;
    grid-row: span 2;

    @media (max-width: 768px) {
      grid-column: span 1;
      grid-row: span 1;
    }
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    &::after {
      opacity: 1;
    }

    & img {
      transform: scale(1.05);
    }
  }
`;

export const GalleryImage = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s;
`;

export const GalleryPlaceholder = styled(Box)`
  border-radius: 12px;
  background-color: #2d5a27;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  text-align: center;
  aspect-ratio: 1/1;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.02);
  }
`;

export const GalleryPlaceholderIcon = styled(Box)`
  color: #bcf0ae;
  margin-bottom: 8px;

  & .material-symbols-outlined {
    font-size: 36px;
  }
`;

export const GalleryPlaceholderText = styled(Typography)`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #ffffff;
`;
