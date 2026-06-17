import styled from "@emotion/styled";
import { Box, Typography, Button } from "@mui/material";

export const StyledHeader = styled(Box)`
  background-color: #ffffff;
  border-bottom: 1px solid #c2c9bb;
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 16px;
    height: 64px;
  }
`;

export const LogoContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const LogoImage = styled("img")`
  height: 40px;
  width: auto;
`;

export const CompanyName = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #154212;
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const DesktopNav = styled(Box)`
  display: none;
  gap: 24px;
  align-items: center;
  margin: 0 24px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const NavLink = styled("span")<{ active?: boolean }>`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: ${({ active }) => (active ? "700" : "400")};
  color: ${({ active }) => (active ? "#154212" : "#42493e")};
  border-bottom: ${({ active }) => (active ? "2px solid #154212" : "none")};
  padding-bottom: 4px;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #154212;
  }
`;

export const LoginButton = styled(Button)`
  background-color: #2d5a27;
  color: #ffffff;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 10px 24px;
  border-radius: 8px;
  display: none;

  &:hover {
    background-color: #23501e;
    opacity: 0.9;
  }

  @media (min-width: 768px) {
    display: inline-flex;
  }
`;

export const MobileMenuButton = styled(Button)`
  color: #154212;
  padding: 8px;
  display: block;
  min-width: auto;

  & .material-symbols-outlined {
    font-size: 24px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
