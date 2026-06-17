import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const FooterSection = styled(Box)`
  background-color: #e3e3de;
  width: 100%;
  border-top: 1px solid #e3e3de;
  margin-top: auto;
`;

export const FooterGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 48px 32px;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 32px 16px;
  }
`;

export const FooterLogo = styled("img")`
  height: 40px;
  width: auto;
  margin-bottom: 16px;
  filter: grayscale(1);
  opacity: 0.8;
`;

export const FooterText = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #42493e;
  margin-top: 16px;
`;

export const FooterHeading = styled(Typography)`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #154212;
  font-weight: 700;
  margin-bottom: 16px;
  display: block;
`;

export const FooterLink = styled("a")`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #42493e;
  text-decoration: none;
  transition: color 0.2s;
  display: block;

  &:hover {
    color: #154212;
  }
`;

export const FooterLinkList = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
