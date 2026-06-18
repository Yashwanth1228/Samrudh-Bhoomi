import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const FilterSection = styled(Box)`
  padding: 32px 16px;
  background-color: #fafaf4;
  border-bottom: 1px solid #e3e3de;

  @media (min-width: 768px) {
    padding: 32px 32px;
  }
`;

export const FilterContainer = styled(Box)`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SearchContainer = styled(Box)`
  position: relative;
  width: 100%;

  @media (min-width: 768px) {
    width: 400px;
  }
`;

export const SearchIconWrapper = styled(Box)`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #72796e;

  & .material-symbols-outlined {
    font-size: 24px;
  }
`;

export const SearchInput = styled("input")`
  width: 100%;
  padding: 12px 16px 12px 48px;
  border-radius: 8px;
  border: 1px solid #c2c9bb;
  background-color: #ffffff;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: #1a1c19;
  outline: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  transition: all 0.2s;

  &::placeholder {
    color: #c2c9bb;
  }

  &:focus {
    border-color: #2d5a27;
    ring: 2px solid #2d5a27;
  }
`;

export const CategoryPills = styled(Box)`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CategoryButton = styled(Button)<{ active: boolean }>`
  padding: 8px 20px;
  border-radius: 9999px;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  white-space: nowrap;
  transition: all 0.2s;
  min-width: auto;

  ${({ active }) =>
    active
      ? `
    background-color: #2d5a27;
    color: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  `
      : `
    background-color: #eeeee9;
    color: #42493e;
    border: 1px solid #c2c9bb;
    
    &:hover {
      background-color: #e8e8e3;
    }
  `}
`;

export const SecondaryFilters = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
`;

export const SelectWrapper = styled(Box)`
  position: relative;
`;

export const FilterSelect = styled("select")`
  appearance: none;
  background-color: #ffffff;
  border: 1px solid #c2c9bb;
  color: #42493e;
  padding: 8px 40px 8px 16px;
  border-radius: 8px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  outline: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  cursor: pointer;

  &:focus {
    border-color: #2d5a27;
    ring: 2px solid #2d5a27;
  }
`;

export const SelectIcon = styled(Box)`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #72796e;
  pointer-events: none;

  & .material-symbols-outlined {
    font-size: 20px;
  }
`;
