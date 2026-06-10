import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const SidebarContainer = styled(Box)`
  width: 260px;
  min-width: 260px;
  height: 109vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: #f5f5f0;
  border-right: 1px solid #e2e2dc;

  position: sticky;
  top: 0;
`;

export const LogoSection = styled(Box)`
  padding: 32px 24px;
`;

export const MenuSection = styled(Box)`
  padding: 0 16px;
  flex: 1;
`;

export const LogoutSection = styled(Box)`
  padding: 24px 16px;
  border-top: 1px solid #e2e2dc;
`;

export const MenuItemWrapper = styled(Box)<{
  active?: boolean;
}>`
  height: 52px;

  display: flex;
  align-items: center;
  gap: 14px;

  padding: 0 16px;
  margin-bottom: 8px;

  border-radius: 10px;

  cursor: pointer;

  background: ${(props) => (props.active ? "#e7ece0" : "transparent")};

  border-right: ${(props) => (props.active ? "4px solid #2d5a27" : "none")};

  transition: all 0.3s ease;

  &:hover {
    background: #eef2e9;
  }
`;
