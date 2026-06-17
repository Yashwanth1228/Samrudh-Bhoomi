import styled from "@emotion/styled";
import { Box, Typography, Card } from "@mui/material";

export const ProductsSectionContainer = styled(Box)`
  padding: 96px 16px;
  background-color: #eeeee9;

  @media (min-width: 768px) {
    padding: 96px 32px;
  }
`;

export const SectionHeader = styled(Box)`
  text-align: center;
  max-width: 768px;
  margin: 0 auto 64px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SectionTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: -0.02em;
  color: #154212;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const SectionSubtitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #42493e;
`;

export const ProductsGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const ProductCard = styled(Card)`
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  border: 1px solid #e3e3de;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
  }
`;

export const ProductImageWrapper = styled(Box)`
  height: 192px;
  overflow: hidden;
  position: relative;
`;

export const ProductImage = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;

  ${ProductCard}:hover & {
    transform: scale(1.05);
  }
`;

export const ProductTitle = styled(Typography)`
  position: absolute;
  bottom: 16px;
  left: 16px;
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const ProductDescription = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #42493e;
  margin-bottom: 24px;
  flex-grow: 1;
`;

export const ProductLink = styled("a")`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #2d5a27;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: gap 0.3s;
  margin-top: auto;

  &:hover {
    gap: 8px;
  }
`;
