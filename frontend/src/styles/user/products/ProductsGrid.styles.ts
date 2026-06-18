import styled from "@emotion/styled";
import { Box, Typography, Button, Paper } from "@mui/material";

export const GridSection = styled(Box)`
  padding: 48px 16px;
  background-color: #fafaf4;
  min-height: 600px;

  @media (min-width: 768px) {
    padding: 48px 32px;
  }
`;

export const GridContainer = styled(Box)`
  max-width: 1440px;
  margin: 0 auto;
`;

export const Toolbar = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  gap: 16px;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const ToolbarLeft = styled(Box)``;

export const ToolbarRight = styled(Box)`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ProductCount = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #42493e;

  & .count {
    font-weight: 600;
    color: #1a1c19;
  }
`;

export const SortWrapper = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ProductGrid = styled(Box)<{ viewMode: "grid" | "list" }>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 640px) {
    grid-template-columns: ${({ viewMode }) =>
      viewMode === "grid" ? "repeat(2, 1fr)" : "1fr"};
  }

  @media (min-width: 1024px) {
    grid-template-columns: ${({ viewMode }) =>
      viewMode === "grid" ? "repeat(3, 1fr)" : "1fr"};
  }

  @media (min-width: 1280px) {
    grid-template-columns: ${({ viewMode }) =>
      viewMode === "grid" ? "repeat(4, 1fr)" : "1fr"};
  }
`;

export const ProductCard = styled(Paper)`
  background-color: #ffffff;
  border-radius: 12px;
  border: 1px solid #c2c9bb;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
  }
`;

export const ProductImageWrapper = styled(Box)`
  aspect-ratio: 1/1;
  background-color: #e3e3de;
  position: relative;
  overflow: hidden;
`;

export const ProductImage = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.5s;

  ${ProductCard}:hover & {
    transform: scale(1.05);
  }
`;

export const ProductBadge = styled(Box)`
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 4px 10px;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  color: #2d5a27;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

export const ProductContent = styled(Box)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ProductTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  color: #1a1c19;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${ProductCard}:hover & {
    color: #2d5a27;
  }
`;

export const ProductDescription = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #42493e;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`;

export const ProductFooter = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid rgba(194, 201, 187, 0.3);
  margin-top: auto;
`;

export const ProductPrice = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #1a1c19;
`;

export const DetailsButton = styled(Button)`
  color: #2d5a27;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 6px 12px;
  border-radius: 6px;
  min-width: auto;

  &:hover {
    background-color: rgba(45, 90, 39, 0.1);
  }
`;

// Removed custom pagination styles - now using MUI Pagination

export const EmptyState = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  text-align: center;
`;

export const EmptyStateIcon = styled(Box)`
  color: #c2c9bb;
  margin-bottom: 16px;

  & .material-symbols-outlined {
    font-size: 64px;
  }
`;

export const EmptyStateTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #1a1c19;
  margin-bottom: 8px;
`;

export const EmptyStateText = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #42493e;
  max-width: 448px;
  margin-bottom: 24px;
`;

export const EmptyStateButton = styled(Button)`
  background-color: #ffffff;
  border: 1px solid #72796e;
  color: #1a1c19;
  padding: 8px 24px;
  border-radius: 8px;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &:hover {
    background-color: #f4f4ee;
  }
`;
