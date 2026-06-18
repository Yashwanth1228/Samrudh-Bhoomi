import styled from "@emotion/styled";
import { Box, Typography, Link, Card } from "@mui/material";

export const RelatedSection = styled(Box)`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const RelatedHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid #c2c9bb;
  padding-bottom: 8px;
`;

export const RelatedTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #1a1c19;
`;

export const RelatedViewAll = styled(Link)`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #154212;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const RelatedGrid = styled(Box)``;

export const RelatedCard = styled(Card)`
  background-color: #ffffff;
  border-radius: 12px;
  border: 1px solid #c2c9bb;
  overflow: hidden;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
  }
`;

export const RelatedImageWrapper = styled(Box)`
  aspect-ratio: 1/1;
  background-color: #fafaf4;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(194, 201, 187, 0.5);
`;

export const RelatedImage = styled("img")`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.3s;

  ${RelatedCard}:hover & {
    transform: scale(1.05);
  }
`;

export const RelatedContent = styled(Box)`
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

export const RelatedCategory = styled(Typography)`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: #42493e;
  margin-bottom: 4px;
`;

export const RelatedName = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  color: #1a1c19;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const RelatedPrice = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #2d5a27;
  margin-top: auto;
`;
