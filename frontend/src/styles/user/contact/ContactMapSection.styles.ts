import styled from "@emotion/styled";
import { Box, Typography, Link, Paper } from "@mui/material";

export const MapSection = styled(Box)`
  padding: 0 16px 48px;

  @media (min-width: 768px) {
    padding: 0 32px 48px;
  }
`;

export const MapContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
  background-color: #ffffff;
  border: 1px solid #c2c9bb;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const MapPlaceholder = styled(Box)`
  width: 100%;
  min-height: 300px;
  background-color: #e3e3de;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #42493e;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const MapPlaceholderIcon = styled(Box)`
  margin-bottom: 8px;

  & .MuiSvgIcon-root {
    font-size: 40px;
  }
`;

export const MapPlaceholderText = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #42493e;
`;

export const OfficeInfo = styled(Box)`
  width: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const OfficeTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: #1a1c19;
  margin-bottom: 16px;
`;

export const OfficeAddress = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #42493e;
  margin-bottom: 16px;
  line-height: 1.6;
`;

export const DirectionsLink = styled(Link)`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #154212;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
