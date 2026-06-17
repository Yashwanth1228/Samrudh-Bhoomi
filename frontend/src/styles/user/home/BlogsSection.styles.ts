import styled from "@emotion/styled";
import { Box, Typography, Button, Card } from "@mui/material";

export const BlogsSectionContainer = styled(Box)`
  padding: 96px 16px;
  background-color: #ffffff;

  @media (min-width: 768px) {
    padding: 96px 32px;
  }
`;

export const BlogsHeader = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  margin-bottom: 48px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const BlogsTitle = styled(Typography)`
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

export const BlogsSubtitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #42493e;
`;

export const ViewAllButton = styled(Button)`
  border: 1px solid #72796e;
  color: #1a1c19;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 10px 24px;
  border-radius: 8px;
  flex-shrink: 0;

  &:hover {
    background-color: #f4f4ee;
  }
`;

export const BlogsGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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

export const BlogCard = styled(Card)`
  cursor: pointer;
  box-shadow: none;
  border: none;
  background-color: transparent;

  &:hover {
    & img {
      transform: scale(1.05);
    }
  }
`;

export const BlogImageWrapper = styled(Box)`
  borderradius: 12px;
  overflow: hidden;
  margin-bottom: 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  height: 256px;
`;

export const BlogImage = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
`;

export const BlogMeta = styled(Box)`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
`;

export const BlogCategory = styled(Typography)`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #2d5a27;
  font-weight: 700;
`;

export const BlogDate = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #42493e;
`;

export const BlogCardTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  color: #1a1c19;
  margin-bottom: 8px;
  transition: color 0.2s;

  ${BlogCard}:hover & {
    color: #154212;
  }
`;

export const BlogExcerpt = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #42493e;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
