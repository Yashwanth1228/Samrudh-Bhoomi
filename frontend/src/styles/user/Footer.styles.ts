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

export const BottomBar = styled(Box)`
  border-top: 1px solid #cfcfc8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 32px;
  max-width: 1440px;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    text-align: center;
    padding: 20px 16px;
  }
`;

export const SocialContainer = styled(Box)`
  display: flex;
  gap: 12px;
  margin-top: 10px;
`;

export const SocialIcon = styled("a")`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #154212;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  text-decoration: none;

  &:hover {
    background: #2d5a27;
    transform: translateY(-2px);
  }
`;
